import { discordClient } from "./utils/discord";
import { variables } from "./lib/variables";

import "./events/index";

discordClient.login(variables.DISCORD_BOT_TOKEN);
