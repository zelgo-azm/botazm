const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bot AZM działa');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Port aktywny');
});

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const CHANNEL_ID = '1315633892266348606';

client.once('ready', () => {
    console.log(`Bot uruchomiony jako ${client.user.tag}`);

    client.user.setActivity('Włada Grzechem', {
        type: ActivityType.Playing
    });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(CHANNEL_ID);

    if (!channel) return;

    channel.send(
        `🔥 Witaj ${member} 👋 Jesteś ${member.guild.memberCount} potępieńcem pochłoniętym przez Czeluść Klanu AZM! 🔥`
    );
});

client.login(process.env.TOKEN);
