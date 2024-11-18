import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";
import { logger } from "@vendetta"

function respond(msg) {
  try {
        let output = ["I'm Sroryi!\n"];
        const data = "hmm.. Ur phoje sux Scan Over Pay $200";
      }
    });

    const epermit = storage["ephemeral"];
    const ephemeral = args.find((i) => i.name == "ephemeral")?.value ?? epermit;
    if ((ephemeral || epermit) && !(epermit && !ephemeral)) {
      findByProps("sendBotMessage").sendBotMessage(
        ctx.channel.id,
        output.join("\n"),
      );
    } else {
      return { content: output.join("\n") };
    }
  } catch (e) {
    alert(e);
    console.error(e);
    throw e;
  }
}

export default respond;
