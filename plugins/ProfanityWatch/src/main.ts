// using fierdetta's Text Replacement plugin as a reference (not sure where to get the @vendetta locations, so its hard to make stuff on my own, if you happen to know id love to know!)
// apologies for bad code, first time using typescript :)
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";
const UserStore = findByStoreName('UserStore')
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
			var asterisks = ""
			for (let i = 0; i < bad.length -1; i++) {
			   asterisks = asterisks + "\\*";
		    };
		    
		    content = content.replaceAll(bad, Array.from(bad)[0] + asterisks)
		};

		var username = UserStore.getCurrentUser()?.username as string;
		
		if(content !== args[1].content) {
			showToast(`Watch your language, ${username}!`, getAssetIDByName("ic_warning_24px"))
		};
		
		args[1].content = content;
	});
};
