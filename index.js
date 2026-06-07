console.log("🔥 BOT FILE STARTED");

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const TOKEN = 'MTExNTM1Nzc5OTU1NjMyOTUyNQ.GR0adA.3ywyVWbXlVE9doL8SNLeptEMrDIlS3n-Usnx0E';
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

client.login(TOKEN);

