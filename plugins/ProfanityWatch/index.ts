import patchSendMessage from "./src/sendMessage";
let patches;

export default {
    onLoad: () => {
        patches = [
            patchSendMessage(),
        ];
    },
    onUnload: () => {
        for (const unpatch of patches) {
            unpatch();
        };
    },
}
