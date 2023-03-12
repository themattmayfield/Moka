import { ActivityType } from "discord.js";
import dotenv from "dotenv";

import {
  discordClient,
  getDiscordChannelNameById,
  getDiscordUserCount,
} from "../utils/discord";
import serverStatChannelIDs from "../constants/serverStatChannelIDs";

dotenv.config();

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

  const memberCount = await getDiscordUserCount();

  const memberCountChannel = await getDiscordChannelNameById(
    serverStatChannelIDs[1]
  );

  memberCountChannel?.setName(`Members - ${memberCount}`);
});
