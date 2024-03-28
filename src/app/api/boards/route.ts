import { NextResponse } from 'next/server'
const data = {
    "inputs": [
        {
            "uname": "lab-select-default",
            "configuration": {
                "value": "1",
                "lable": "Voltage",
                "options": [
                    {
                        "name": "1V",
                        "value": "1"
                    },
                    {
                        "name": "2V",
                        "value": "2"
                    },
                    {
                        "name": "3V",
                        "value": "3"
                    }
                ],
                "event": "set_voltage",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "298d7d22-fd16-42bc-a24f-51a7c922dbb1"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "TURN on audio",
                "event": "on_audio",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "12d4da18-9e4b-4142-9f19-6026eb27dcdf"
        },
        {
            "uname": "lab-select-default",
            "configuration": {
                "value": "1",
                "lable": "current",
                "options": [
                    {
                        "name": "1A",
                        "value": "1"
                    }
                ],
                "event": "set_current",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "0240c3b4-87e1-4ab0-ab89-eec2a0825b96"
        },
        {
            "uname": "lab-button-default",
            "configuration": {
                "value": "audio off",
                "event": "audio_off",
                "variant": "contained",
                "type": "submit"
            },
            "uuid": "9c50a9a0-fc82-4938-823c-bfa699b5dd42"
        }
    ],
    "outputs": [
        {
            "uname": "line-graph",
            "configuration": {
                "title": "output plot",
                "event": "",
                "axis_label": {
                    "x": "time",
                    "y": "voltage"
                },
                "lines": [
                    {
                        "label": "output"
                    }
                ]
            },
            "uuid": "49de0926-7c5b-4a03-893e-54a9c13d2c76",
            "layout": {
                "lg": {
                    "w": 5,
                    "h": 11,
                    "x": 0,
                    "y": 16,
                    "i": "49de0926-7c5b-4a03-893e-54a9c13d2c76",
                    "moved": false,
                    "static": false
                },
                "md": {
                    "w": 3,
                    "h": 8,
                    "x": 0,
                    "y": 0,
                    "i": "49de0926-7c5b-4a03-893e-54a9c13d2c76",
                    "moved": false,
                    "static": false
                },
                "sm": {
                    "w": 6,
                    "h": 10,
                    "x": 0,
                    "y": 0,
                    "i": "49de0926-7c5b-4a03-893e-54a9c13d2c76",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "uname": "terminal",
            "configuration": {
                "title": "Terminal",
                "event": "terminal",
                "prompt": "$~ :"
            },
            "uuid": "24427b82-40c4-427e-91f6-f58d2ae59a59",
            "layout": {
                "lg": {
                    "w": 12,
                    "h": 16,
                    "x": 0,
                    "y": 0,
                    "i": "24427b82-40c4-427e-91f6-f58d2ae59a59",
                    "moved": false,
                    "static": false
                },
                "md": {
                    "w": 8,
                    "h": 14,
                    "x": 0,
                    "y": 8,
                    "i": "24427b82-40c4-427e-91f6-f58d2ae59a59",
                    "moved": false,
                    "static": false
                },
                "sm": {
                    "w": 6,
                    "h": 11,
                    "x": 0,
                    "y": 10,
                    "i": "24427b82-40c4-427e-91f6-f58d2ae59a59",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "uname": "line-graph",
            "configuration": {
                "title": "output current",
                "event": "current",
                "axis_label": {
                    "x": "time",
                    "y": "current"
                },
                "lines": [
                    {
                        "label": "current"
                    }
                ]
            },
            "uuid": "3e9045ab-41de-4f6d-abc1-533b7eadd460",
            "layout": {
                "lg": {
                    "w": 7,
                    "h": 11,
                    "x": 5,
                    "y": 16,
                    "i": "3e9045ab-41de-4f6d-abc1-533b7eadd460",
                    "moved": false,
                    "static": false
                },
                "md": {
                    "w": 5,
                    "h": 8,
                    "x": 3,
                    "y": 0,
                    "i": "3e9045ab-41de-4f6d-abc1-533b7eadd460",
                    "moved": false,
                    "static": false
                },
                "sm": {
                    "w": 6,
                    "h": 8,
                    "x": 0,
                    "y": 21,
                    "i": "3e9045ab-41de-4f6d-abc1-533b7eadd460",
                    "moved": false,
                    "static": false
                }
            }
        }
    ],
    "title": "infineon board temp name IN001"
}
export async function GET(request: Request) {
    return NextResponse.json({ data })
}