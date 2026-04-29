import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PORT = 4173;

function startPreview() {
    return new Promise((resolveReady, reject) => {
        const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
            cwd: ROOT,
            env: process.env,
        });

        let resolved = false;
        proc.stdout.on('data', (chunk) => {
            const text = chunk.toString();
            process.stdout.write(text);
            const match = text.match(/Local:\s+(http:\/\/[^\s]+)/);
            if (match && !resolved) {
                resolved = true;
                resolveReady({ proc, baseUrl: match[1].replace(/\/$/, '') });
            }
        });
        proc.stderr.on('data', (c) => process.stderr.write(c));
        proc.on('exit', (code) => {
            if (!resolved) reject(new Error(`vite preview exited with code ${code}`));
        });
    });
}

async function main() {
    console.log('Starting vite preview...');
    const { proc, baseUrl } = await startPreview();
    const exportUrl = `${baseUrl}/?export=pdf`;

    try {
        console.log(`Loading ${exportUrl}`);
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
        await page.goto(exportUrl, { waitUntil: 'networkidle0', timeout: 90_000 });
        await page.evaluateHandle('document.fonts.ready');

        const out = resolve(ROOT, 'presentation.pdf');
        await page.pdf({
            path: out,
            width: '1280px',
            height: '720px',
            printBackground: true,
            preferCSSPageSize: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });
        console.log(`PDF saved -> ${out}`);

        await browser.close();
    } finally {
        proc.kill('SIGTERM');
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
