import dotenv from "dotenv";
dotenv.config();

interface EnvironmentVariables {
  DISCORD_BOT_TOKEN: string;
  DISCORD_GUILD_ID: string;
  PORT?: string;
}

if (!process.env.DISCORD_BOT_TOKEN) {
  console.error("DISCORD_BOT_TOKEN environment variable is required");
  throw new Error("DISCORD_BOT_TOKEN environment variable is required");
}
if (!process.env.DISCORD_GUILD_ID) {
  console.error("DISCORD_GUILD_ID environment variable is required");
  throw new Error("DISCORD_GUILD_ID environment variable is required");
}

// if (!process.env.SERVER_API_KEY) {
//   console.error('SERVER_API_KEY environment variable is required');
//   throw new Error('SERVER_API_KEY environment variable is required');
// }

// if (!process.env.SUPABASE_PROJECT_URL) {
//   console.error('SUPABASE_PROJECT_URL environment variable is required');
//   throw new Error('SUPABASE_PROJECT_URL environment variable is required');
// }

// if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
//   console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
//   throw new Error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
// }

export const variables: EnvironmentVariables = {
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
  //   SERVER_API_KEY: process.env.SERVER_API_KEY,
  //   SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL,
  //   SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  PORT: process.env.PORT,
};
