import { ActivityType, Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import MokaChatGpt from "./CHATGPT";
import MOKA_CHANNELS from "./constants/mokaChannels";
import { discordClient } from "./utils/discord";
import { variables } from "./lib/variables";
dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

discordClient.on("ready", async () => {
  console.log(`Logged in as ${discordClient.user?.tag}`);
  discordClient.user?.setPresence({
    activities: [
      {
        name: "Fetch!",
        type: ActivityType.Playing,
      },
    ],
  });
});

MokaChatGpt({
  openai,
  MOKA_CHANNELS,
});

discordClient.login(variables.DISCORD_BOT_TOKEN);
