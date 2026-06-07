const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server działa");
});

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const CHANNEL_ID = "1315633892266348606";

client.once("ready", () => {
  console.log(`Bot uruchomiony jako ${client.user.tag}`);

  client.user.setActivity("Włada Grzechem", {
    type: ActivityType.Playing
  });
});

client.on("guildMemberAdd", async (member) => {
  const channel = await member.guild.channels.fetch(CHANNEL_ID).catch(() => null);
  if (!channel) return;

  channel.send(
    `🔥 Witaj ${member} 👋 Jesteś ${member.guild.memberCount} potępionym w Czeluści Klanu AZM! 🔥`
  );
});

client.login(process.env.TOKEN);
