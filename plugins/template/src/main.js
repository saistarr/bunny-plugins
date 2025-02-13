import { registerCommand } from "@vendetta/commands"

let testCommand = [
]

const ranItem = async function () {
	var items = ["hiii!!","boo..","woe....","<3"];
    return items[Math.floor(Math.random()*items.length)]
}

export const onLoad = () => {
    testCommand = registerCommand({
        name: "random stringgg...",
        displayName: "random string!",
        description: "hi !!",
        displayDescription: "hello !!",
        applicationId: '-1',
        inputType: 1,
        type: 1,

        execute: async () => { return {content:ranItem()}}
    });
}

export const onUnload = () => {
    testCommand();
}
