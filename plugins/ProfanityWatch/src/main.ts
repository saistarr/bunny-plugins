// using fierdetta's Text Replacement plugin as a reference (not sure where to get the @vendetta locations, so its hard to make stuff on my own, if you happen to know id love to know!)
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";
var profanity = [
	"fuck",
	"bitch",
	"shit",
	"ass",
	"damn",
	"piss",
	"hell",
	"slut",
	"whore" // why are you saying these?
];

const Messages = findByProps("sendMessage", "receiveMessage");
export default function patchSendMessage() {
	return before("sendMessage", Messages, (args) => {
		// The message content
		let content = args[1].content as string;
		
		// Go through each rule and run the message through it
		for (const bad of profanity) {
			if ((content.toLowerCase()).includes(bad)) {
				for (let i = 0; i < content.length -1; i++) {
				   content = Array.from(args[1].content)[0] + "*";
				};
			};
		};

		// Update message content with the updated content
		if(content !== args[1].content) {
			showToast(`Language!`, getAssetIDByName("ic_warning_24px"))
		};
		args[1].content = content;
	});
};
