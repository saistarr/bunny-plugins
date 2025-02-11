import { registerCommand } from "@vendetta/commands"
import { findByProps } from "@vendetta/metro"

const MessageActions = findByProps("sendMessage", "receiveMessage")

let commands = [
]

commands.push(registerCommand({
    name: "test !!",
    displayName: "test yeah",
    description: "it is a test or something",
    displayDescription: "description or something i think",
    applicationId: -1,
    inputType: 1,
    type: 1,

    execute: (ctx) => MessageActions.sendMessage(ctx.channel.id, {
        content: ["This is a message with components"],
    })
}))
