--// using fierdetta's Text Replacement plugin as a reference (not sure where to get the @vendetta locations, so its hard to make stuff on my own, if you happen to know id love to know!)
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";
import { Rule } from "../def";
var profanity = [
	"fuck",
	"shit",
	"ass",
	"damn",
	"piss",
	"hell"
];

const Messages = findByProps("sendMessage", "receiveMessage");

const Warning = getAssetIDByName("ic_warning_24px");

export default function patchSendMessage() {
	return before("sendMessage", Messages, (args) => {
		// The message content
		let content = args[1].content as string;

		var asterisks = "";
		
		// sorry first time working with typescript, i don't know a more efficient way of doing this currently.
		for (var asterisk of args[1].content) {
		  asterisks = asterisks + "*";
		};
		
		// Go through each rule and run the message through it
		for (const bad of profanity) {
			content = content.replaceAll(bad, Array.from(args[1].content)[0] + asterisks);
			asterisks = "";
		};

		// Update message content with the updated content
		args[1].content = content;
		if(content !== args[1].content) {
			showToast(`Language!`)
		};
	});
};
