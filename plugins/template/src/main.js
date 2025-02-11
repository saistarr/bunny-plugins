import { registerCommand } from "@vendetta/commands"

let testCommand = [
]

export const onLoad = () => {
    testCommand = registerCommand({
        name: "test !!",
        displayName: "test 2 !!",
        description: "hi !!",
        displayDescription: "hello !!",
        applicationId: '-1',
        inputType: 1,
        type: 1,

        execute: async () => { return { content: {"id":"e17dbc8227aeef69e0144649714738ea","text":"hmmmmm... hai!!! ^w^","language":"en"} }}
    });
}

export const onUnload = () => {
    testCommand();
}
