import express, { Request, Response } from "express";

const PORT = process.env.PORT || 5000;

const app = express();

//////////////////////////////////////////////////////////////////
//             EXPRESS SERVER SETUP FOR UPTIME ROBOT            //
//////////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));

app.use("/", (request: Request, response: Response) => {
  response.sendStatus(200);
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

//////////////////////////////////////////////////////////////////
//                    DISCORD CLIENT LISTENERS                  //
//////////////////////////////////////////////////////////////////
// Discord Events: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate

//load environment variables
import "./lib/variables";
//run the twitch bot
import "./bot";
