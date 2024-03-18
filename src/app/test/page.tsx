"use client"
import React, { useRef, useState } from "react"
import dynamic from 'next/dynamic'
// import LabTerminal from "@/livebench/outputs/terminal"
const LabTerminal = dynamic(() => import('@/livebench/outputs/terminal'), {
    ssr: false
})

export default function Term() {
    return (
        <div className=" tw-container">
            <LabTerminal />
        </div>
    )
}