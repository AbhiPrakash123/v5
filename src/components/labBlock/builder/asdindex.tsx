"use client"
// Next.js app router
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { v4 as uuidv4 } from 'uuid';

export default function BlockBuilder() {
    const [canvas, setCanvas] = useState<fabric.Canvas>();
    const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
    const [textValue, setTextValue] = useState<string>("");
    const [savedCanvasJSON, setSavedCanvasJSON] = useState<string | null>(null);

    useEffect(() => {
        const container = document.getElementById("canvas-container");

        if (!container) return;

        const c = new fabric.Canvas("canvas", {
            backgroundColor: "black",
        });

        // Set canvas size to match parent element
        c.setWidth(container.offsetWidth);
        c.setHeight(container.offsetHeight);

        // settings for all canvas in the app
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerColor = "#2BEBC8";
        fabric.Object.prototype.cornerStyle = "rect";
        fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
        fabric.Object.prototype.cornerSize = 6;

        c.on("selection:cleared", () => {
            setSelectedObject(null);
        });

        c.on("selection:created", (e) => {
            setSelectedObject(e.target);
            if (e.target instanceof fabric.Textbox) {
                setTextValue(e.target.text);
            }
        });

        c.on("selection:updated", (e) => {
            setSelectedObject(e.target);
            if (e.target instanceof fabric.Textbox) {
                setTextValue(e.target.text);
            }
        });

        setCanvas(c);

        return () => {
            c.dispose();
        };
    }, []);

    useEffect(() => {
        if (!canvas) return;

        if (savedCanvasJSON) {
            canvas.loadFromJSON(savedCanvasJSON, () => {
                canvas.renderAll();
            });
        }
    }, [savedCanvasJSON]);

    const addRect = () => {
        if (!canvas) return;
        const rect = new fabric.Rect({
            height: 280,
            width: 200,
            stroke: "#2BEBC8",
            uuid: uuidv4(),
        });
        canvas.add(rect);
        canvas.requestRenderAll();
    };

    const addTextbox = () => {
        if (!canvas) return;
        const textbox = new fabric.Textbox("Type here", {
            left: 50,
            top: 50,
            width: 200,
            fontSize: 20,
            fill: "#FFFFFF",
            uuid: uuidv4(),
        });
        canvas.add(textbox);
        canvas.setActiveObject(textbox);
        canvas.requestRenderAll();
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value);
    };

    const updateTextOnCanvas = () => {
        if (!selectedObject || !(selectedObject instanceof fabric.Textbox) || !canvas) return;
        selectedObject.set({ text: textValue });
        setSelectedObject(selectedObject);
        canvas.renderAll();
    };

    const updateTextOutsideCanvas = () => {
        if (!selectedObject || !(selectedObject instanceof fabric.Textbox)) return;
        selectedObject.set({ text: textValue });
        setSelectedObject(selectedObject);
        setTextValue(""); // Clear input field after updating canvas
    };

    const saveCanvas = () => {
        if (!canvas) return;
        const json = canvas.toJSON(['uuid']);
        console.log(json)
        setSavedCanvasJSON(JSON.stringify(json));
    };

    const loadCanvas = () => {
        if (!canvas || !savedCanvasJSON) return;
        canvas.clear();
        canvas.loadFromJSON(savedCanvasJSON, () => {
            canvas.renderAll();
        });
    };

    return (
        <>
            <button onClick={addRect}>Rectangle</button>
            <button onClick={addTextbox}>Add Textbox</button>
            <input type="text" value={textValue} onChange={handleTextChange} />
            <button onClick={updateTextOutsideCanvas}>Update Text Outside Canvas</button>
            <button onClick={saveCanvas}>Save Canvas</button>
            <button onClick={loadCanvas}>Load Canvas</button>
            <div id="canvas-container" className="container mx-auto w-full" style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <canvas id="canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                {selectedObject && selectedObject instanceof fabric.Textbox && (
                    <input
                        type="text"
                        value={textValue}
                        onChange={handleTextChange}
                        style={{
                            position: 'absolute',
                            top: selectedObject.top || 0,
                            left: selectedObject.left || 0,
                        }}
                    />
                )}
            </div>
        </>
    );
}
