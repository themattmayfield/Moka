import { Configuration, OpenAIApi } from "openai";
import { discordClient } from "../utils/discord";
import MOKA_CHANNELS from "../constants/mokaChannels";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const moka = async (message: any) => {
  try {
    // Don't respond to yourself or other bots
    if (message.author.bot) return;
    if (message.author == discordClient.user) return;
    // Only respond to messages in the bot channels
    if (!MOKA_CHANNELS.includes(message.channel.id)) return;

    // Only respond to messages that @ the bot
    if (!message.mentions.has(discordClient.user?.id)) return;

    // Only respond to messages that are not too long
    if (message.content.length > 150) {
      message.reply(
        "Woof! I'm an dog, not a book reader! Message too long! Woof!"
      );
      return;
    }

    //   // Only respond to messages that are not too short
    if (message.content.length < 10) {
      message.reply("Woof! Message too short! Woof!");
      return;
    }

    message.channel.sendTyping();

    const response = await openai.createCompletion({
      prompt: `Moka is a friendly dog.\n\
             Moka: Hello! I am Moka, a friendly dog.\n\
             ${message.author.username}: ${message.content}\n\
             Moka:`,
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 100,
      stop: ["Moka:"],
    });

    await message.reply(`${response.data.choices[0].text}`);
    return;
  } catch (error) {
    console.log(error);
  }
};

export default moka;
