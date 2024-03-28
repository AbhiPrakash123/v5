import { useEffect, useRef, useState } from "react";
import { Translate } from "@mui/icons-material";
import "./style.css"

export default function MultiLanguage() {
    const translateElementRef = useRef(null);

    useEffect(() => {
        initializeGoogleTranslateElement();
    }, []);

    const initializeGoogleTranslateElement = () => {

        // @ts-ignore
        if (window.google && window.google.translate) {

            // @ts-ignore
            window.googleTranslateElementInit = new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",

                    // @ts-ignore
                    layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                    // @ts-ignore
                    position: window.google.translate.TranslateElement.FloatPosition.BOTTOM_RIGHT,

                    includedLanguages: "en,ja,uk,de,zh-CN",
                    autoDisplay: false,
                },
                // googleTranslateElementRef.current
                translateElementRef.current
            );
        }
    };

    return (
        <div className=" tw-w-[25px] tw-h-[25px] tw-relative ">
            <div className="tw-z-10 tw-w-[30px] tw-h-[30px] tw-opacity-0 tw-absolute tw-top-0 tw-left-0" ref={translateElementRef} id="google_translate_element"></div>
            <Translate className=" tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-text-white " />
        </div>
    );
};