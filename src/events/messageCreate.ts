import { discordClient } from "../utils/discord";
import moka from "../services/moka";

const MokaChatGpt = () => {
  discordClient.on("messageCreate", async (message: any) => {
    // Only respond to messages that @ the moka
    if (message.mentions.has(discordClient.user?.id)) moka(message);
  });
};

export default MokaChatGpt;
