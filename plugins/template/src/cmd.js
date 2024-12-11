import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";
import { logger } from "@vendetta"

function respond(msg) {
  try {
        let output = ["I'm Sroryi!\n"];
        const data = "test test hi";
  };

      findByProps("sendBotMessage").sendBotMessage(
        ctx.channel.id,
        output.join("\n"),
      );
}

export default respond;
