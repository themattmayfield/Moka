import { discordClient } from "../utils/discord";
import moka from "../services/moka";

discordClient.on("messageCreate", async (message: any) => {
  // Run moka
  moka(message);
});
