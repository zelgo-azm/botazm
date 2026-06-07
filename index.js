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

    if (channel) {
        channel.send(
            `🔥 Witaj ${member} jesteś ${member.guild.memberCount} duszą w Czeluści Klanu AZM! 🔥`
        );
    }
});

// 🔥 TOKEN Z ENV (Render / .env lokalnie)
client.login(process.env.TOKEN);
