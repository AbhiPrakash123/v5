"use client"
import { Terminal } from 'xterm'
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";
import { useEffect, useState, useRef } from 'react'
import { configuration } from './configuration';
import { Settings } from './settings';

import "./style.css"
import 'xterm/css/xterm.css'

const terminalBlackTheme = {
    foreground: '#ffffff', // White foreground color
    background: '#222222', // Dark gray background color
    cursor: '#00ff00', // Green cursor color
    // ... (other theme properties)
}
function LabTerminal(props: any) {
    const config = props?.configuration ? props.configuration : configuration
    const divRef = useRef(null);
    const prompt = useRef(config.prompt)
    const history: any = useRef([]);
    const historyIndex = useRef(0);
    const line = useRef("");
    const [fitAddon, setFitAddon] = useState(new FitAddon())
    const [terminal, setTerminal] = useState(new Terminal({
        rendererType: "canvas",
        convertEol: true,
        cursorBlink: true,
        cursorStyle: "block",
        theme: terminalBlackTheme,

    }))

    useEffect(() => {
        // @ts-ignore
        if (divRef.current.childNodes.length !== 0) return

        terminal.reset()
        terminal.clear()
        const webLinksAddon = new WebLinksAddon();
        // const fitAddon = new FitAddon();
        terminal.loadAddon(webLinksAddon);
        terminal.loadAddon(fitAddon);
        // @ts-ignore
        terminal.open(divRef.current);
        fitAddon.fit();
        terminal.write(prompt.current);

        const resizeObserver = new ResizeObserver(() => fitAddon.fit());
        // @ts-ignore
        resizeObserver.observe(divRef.current);

        terminal.onKey(({ key, domEvent }) => {
            // console.log([domEvent.code])
            if (key === '\x03') { // CTRL + C
                terminal.writeln('C^');
                line.current = ""
                terminal.write(prompt.current);
            } else {
                switch (domEvent.code) {
                    case 'Enter': // pressed Enter
                        // const input: any = terminal.getSelection().trimEnd();
                        if (history.current.length === 0) history.current.push(line.current)
                        else if (history.current[history.current.length - 1] !== line.current) history.current.push(line.current)
                        else if (line.current.length !== 0) history.current.push(line.current)
                        switch (line.current) {
                            case 'clear':
                                terminal.clear()
                                break;
                            case 'history':
                                terminal.writeln('');
                                for (var cmd in history.current) {
                                    terminal.writeln(history.current[cmd]);
                                }
                        }
                        line.current = ""
                        terminal.write(`\r\n${prompt.current}`);
                        historyIndex.current = history.current.length
                        break;
                    case "ArrowUp": // pressed up arraow
                        if (historyIndex.current > 0) {
                            historyIndex.current = historyIndex.current - 1;
                            line.current = history.current[historyIndex.current] || ''
                            terminal.write(`\r${prompt.current}\x1b[K${line.current}`);

                        }
                        break;
                    case "ArrowDown": // pressed down arraow
                        if (historyIndex.current < history.current.length) {
                            historyIndex.current = historyIndex.current + 1;
                            line.current = history.current[historyIndex.current] || ''
                            terminal.write(`\r${prompt.current}\x1b[K${line.current}`);
                        }
                        break;
                    case "ArrowLeft": // pressed down arraow
                        if (historyIndex.current < history.current.length) {
                            terminal.write(`\r${prompt.current}\x1b[K${line.current}`);
                        }
                        break;
                    case "ArrowRight": // pressed down arraow
                        if (historyIndex.current < history.current.length) {
                            terminal.write(`\r${prompt.current}\x1b[K${line.current}`);
                        }
                        break;
                    case "Backspace":
                        terminal.write('\b \b');
                        line.current = line.current.slice(0, -1)
                        break;
                    default:
                        line.current = line.current + key
                        terminal.write(key);
                        // terminal.write(`\r$> ${line.current}`);
                        break;

                }
            }



        })

        return () => {
            // terminal.dispose()
            // resizeObserver.disconnect();
        }
    }, [])

    return (
        <>
            <div className=' tw-p-0 tw-m-0 tw-h-full tw-w-full'>
                <div

                    style={{ width: "100%", height: "100%" }}
                    ref={divRef}
                    id="terminal"
                />

            </div>

        </>

    );
}

export default LabTerminal
export { LabTerminal as element, configuration, Settings }