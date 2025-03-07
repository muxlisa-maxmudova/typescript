import {useLanguage} from "./LanguageContext.tsx";

const LanguageSwitcher = () => {
    const {language, toggleLanguage} = useLanguage()
    return (
        <div>
            <button onClick={toggleLanguage}>
                {language=== 'en' ? 'Switch to Uzbek' : 'Ingliz tiliga otish'}
            </button>
        </div>
    )
}
export default LanguageSwitcher
