import { logger } from "@vendetta";
import Settings from "./Settings";
import { registerCommand } from "@vendetta/commands";
import testcmdexc from "./cmd",

export default {
  testcmd = registerCommand({
      name: "command test lol",
      displayName: "hi woe",

      description: "command test yes",
      displayDescription: "description is cool",

      options,
      execute: testcmdexc,
      applicationId: -1,
      inputType: 1,
      type: 1,
    });
    onLoad: () => {
        logger.log("test log");
        testcmd();
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}
