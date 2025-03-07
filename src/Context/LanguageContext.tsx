import {createContext, ReactNode, useContext, useState} from "react";
import * as React from "react";
 type LanguageContextType = {
     language: 'en' | 'uz'
     toggleLanguage: () => void;
 }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined) // default value of context
interface LanguageProviderProps {
     children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<'en'| 'uz'>('en')
    const toggleLanguage = () => {
        setLanguage((prev)=> (prev === 'en'? 'uz' : 'en'))
    }
     return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = () => {
     const context = useContext(LanguageContext);
     if (!context) throw new Error("useLanguage must be used within the language provider");
     return context;
}
export default LanguageContext
