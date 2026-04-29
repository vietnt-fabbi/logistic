import Presentation from './components/Presentation/Presentation';
import PrintView from './components/PrintView/PrintView';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
    const isExport = new URLSearchParams(window.location.search).get('export') === 'pdf';
    return (
        <LanguageProvider>
            {isExport ? <PrintView /> : <Presentation />}
        </LanguageProvider>
    );
}
