import { useEffect, useRef, useState } from "react";
import { Translate } from "@mui/icons-material";
import { Box } from "@mui/material"
import "./style.css"

export default function MultiLanguage() {
    const translateElementRef = useRef(null);

    useEffect(() => {
        initializeGoogleTranslateElement();
    }, []);

    const initializeGoogleTranslateElement = () => {
        if (window.google && window.google.translate) {
            window.googleTranslateElementInit = new window.google.translate.TranslateElement(
                {
                    pageLanguage: "ja",
                    layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                    position: window.google.translate.TranslateElement.FloatPosition.BOTTOM_RIGHT,
                    includedLanguages: "en,ja,uk,de,zh-CN",
                    autoDisplay: false,
                },
                // googleTranslateElementRef.current
                translateElementRef.current
            );
        }
    };
    const triggerEvent = (element, eventName) => {
        const event = new Event(eventName,{"bubbles": true});
        element.dispatchEvent(event);
    };

    const changeLanguage = () => {
        const selectElement = document.querySelector('.goog-te-combo');
        console.log(selectElement)
        if (selectElement) {
            selectElement.value = 'es';
            triggerEvent(selectElement, 'change');
        }
    };

    return (
        <div>
            <button onClick={changeLanguage}>Change Language to Spanish</button>
            <div ref={translateElementRef} id="google_translate_element"></div>
        </div>
    );
};

// export default function MultiLanguage() {
//     const translateElement = useRef(null)
//     const options = [
//         { title: "English", value: "en" },
//         { title: "Chinese", value: "zh-CN" },
//         { title: "Germen", value: "de" },
//         { title: "Japanese", value: "ja" },
//         { title: "Ukrainian", value: "uk" },
//     ]

//     const googleTranslateElementRef = useRef(null);
//     const [currentLanguage, setCurrentLanguage] = useState('en');

//     useEffect(() => {
//         initializeGoogleTranslateElement();
//     }, []);

//     const initializeGoogleTranslateElement = () => {
//         if (window.google && window.google.translate) {
//             translateElement.current = new window.google.translate.TranslateElement(
//                 {
//                     pageLanguage: currentLanguage,
//                     layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
//                     position: window.google.translate.TranslateElement.FloatPosition.BOTTOM_RIGHT,
//                     includedLanguages: "en,ja,uk,de,zh-CN",
//                     autoDisplay: false,
//                 },
//                 // googleTranslateElementRef.current
//                 googleTranslateElementRef.current
//             );
//         }
//     };
//     const handleLanguageChange = () => {
//         // document.getElementsByClassName("goog-te-combo").focus()
//         // @ts-ignore
//         // const langSelect = googleTranslateElementRef.current.getElementsByClassName("goog-te-combo")

//         // langSelect[0].focus()

//         // langSelect[0].click()
//         // document.getElementsByClassName("goog-te-combo")[0].click(); 
//         let element: HTMLElement = document.getElementsByClassName("goog-te-combo")[0] as HTMLElement;
//         // let clickEvent = new MouseEvent("mousedown");

//         // var length = element.options.length;
//         // //open dropdown
//         // element.size = length;

//         // element.focus()
//         // element.dispatchEvent(clickEvent);
//         // element.value = 'en'
//         // element.change()
//         console.log(element)
//     };
//     const changeLanguage = (lang: any) => {
//         // const translateInstance = new window.google.translate.TranslateElement();
//         // const intervalId = setInterval(() => {
//         //     if (translateInstance.isTranslateReady()) {
//         //         clearInterval(intervalId);
//         //         translateInstance.setLanguage(lang);
//         //     }
//         // }, 100);
//         // translateElement.current.restart()
//         console.log(translateElement.current)
//         const existingTranslateElement = document.getElementById('google_translate_element');
//         existingTranslateElement.innerHTML = '';

//         // Create a new TranslateElement with the updated language
//         new window.google.translate.TranslateElement({
//             pageLanguage: lang,
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//         }, 'google_translate_element');
//     }
//     function loadGoogleTranslate(lang) {
//         const url = `https://translate.google.com/translate?sl=auto&tl=${lang}&op=translate`;
//         window.open(url, '_blank');
//     }

//     return (
//         <Box>
//             <div id='google-translate-container'></div>
//             <a href="#googtrans(en|zh-CN)" data-lang="zh-CN">Chines</a>
//             <button onClick={() => loadGoogleTranslate('ja')}>Change to French</button>
//             <div className="" id='google_translate_element' ref={googleTranslateElementRef} />
//             {/* <div className="tw-box-border tw-relative">
//                 <Translate/>
                
//             </div> */}
//         </Box>

//     )
// }