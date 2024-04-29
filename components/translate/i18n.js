import translations from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import {messages} from './languages'


console.log(LanguageDetector)

translations.use(LanguageDetector).init({
    debug:false,
    defaultNS:['translations'],
    fallbackLng: 'pt',
    ns:['translations'],
    resources: messages
})


export {translations}