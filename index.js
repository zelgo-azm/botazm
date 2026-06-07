const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

console.log("TOKEN LENGTH:", process.env.TOKEN?.length);
console.log("TOKEN EXISTS:", !!process.env.TOKEN);

const CHANNEL_ID = '1315633892266348606';

client.once('ready', () => {
    console.log(`Bot uruchomiony jako ${client.user.tag}`);

    client.user.setActivity('Władca Grzechu');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(CHANNEL_ID);

    if (channel) {
        channel.send(
            `🔥 Witaj ${member} jesteś ${member.guild.memberCount} duszą w Czeluści Klanu AZM! 🔥`
        );
    }
});

client.login(process.env.TOKEN);
