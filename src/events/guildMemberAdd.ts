import serverStatChannelIDs from "../constants/serverStatChannelIDs";
import {
  discordClient,
  getDiscordChannelNameById,
  getDiscordUserCount,
} from "../utils/discord";

discordClient.on("guildMemberAdd", async () => {
  const memberCount = await getDiscordUserCount();

  const memberCountChannel = await getDiscordChannelNameById(
    serverStatChannelIDs[1]
  );

  memberCountChannel?.setName(`Members - ${memberCount}`);
});
