// using fierdetta's Text Replacement plugin as a reference (not sure where to get the @vendetta locations, so its hard to make stuff on my own, if you happen to know id love to know!)
// apologies for bad code, first time using typescript :)
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";
import { logger } from "@vendetta";
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
		let content = args[1].content as string;
		
		for (const bad of profanity) {
			if ((content.toLowerCase()).includes(bad)) {
				var asterisks = ""
				for (let i = 0; i < bad.length -1; i++) {
				   asterisks = asterisks + "*";
				};
				
				var messagelower = content.toLowerCase();
				var indexstart = messagelower.indexOf(bad); //- bad.length;
				showToast(`${content} ${bad} ${indexstart}`, getAssetIDByName("ic_warning_24px"));
				content = args[1].content.substring(0, indexstart) + content.substring(content.length);
			};
		};
		
		if(content !== args[1].content) {
			showToast(`Watch your language!`, getAssetIDByName("ic_warning_24px"))
		};
		
		args[1].content = content;
	});
};
