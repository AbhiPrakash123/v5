"use client"
import { Terminal } from 'xterm'
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";

import { useEffect, useRef } from 'react'
// import "./style.css"
import 'xterm/css/xterm.css'

function LabTerminal(props: any) {
    const divRef = useRef(null);

    const initTerminal = () => {
        if(divRef.current.childNodes.length !== 0) return
        console.log("TERMINAL =", divRef.current.childNodes.length)
        // if(divRef !== null) return
        const term = new Terminal({
            rendererType: "canvas",
            convertEol: true,
            cursorBlink: true,
            cursorStyle: "block",

        });
        term.reset()
        const webLinksAddon = new WebLinksAddon();
        const fitAddon = new FitAddon();
        term.loadAddon(webLinksAddon);
        term.loadAddon(fitAddon);
        // @ts-ignore
        term.open(divRef.current);
        fitAddon.fit();
        term.write("$> ");
        term.onKey(({ key, domEvent }) => {
            console.log([key.charCodeAt(0)])
            term.write(key);

            if (key.charCodeAt(0) === 13) {
                term.write("\r\n$> ");
            }
        });

        // term.textarea.onkeypress = function (e) {
        //     console.log(e);
        //     term.write(String.fromCharCode(e.keyCode));
        // };
    };

    return (
        <>
            <button onClick={() => initTerminal()}>ADD TERMINAL</button>
            <div
                style={{ }}
                ref={divRef}
                id="terminal"
            />
        </>

    );
};

// export default TerminalComponent
// import * as React from 'react'
// import { XTerm } from 'xterm-for-react'

// const LabTerminal = () => {
//     const xtermRef = React.useRef(null)

//     React.useEffect(() => {
//         // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
//         // @ts-ignore
//         xtermRef.current.terminal.writeln("Hello, World!\r\n")
//         // @ts-ignore
//         xtermRef.current.terminal.writeln("Hello, World!")
//     }, [])

//     return (
//         // Create a new terminal and set it's ref.
//         <XTerm ref={xtermRef} />
//     )
// }

export default LabTerminal