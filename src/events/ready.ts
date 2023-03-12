import { ActivityType } from "discord.js";

import {
  discordClient,
  getDiscordChannelNameById,
  getDiscordUserCount,
} from "../utils/discord";
import serverStatChannelIDs from "../constants/serverStatChannelIDs";

discordClient.on("ready", async () => {
  console.log(`Logged innnn as ${discordClient.user?.tag}`);
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
