import patchSendMessage from "./src/main";
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
