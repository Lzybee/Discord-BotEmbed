const { Client, GatewayIntentBits, EmbedBuilder, } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return;
    let prefix = "Your Prefix";
    const exampleEmbed = new EmbedBuilder()
        .setColor('Your Embed Color')
        .setTitle('Your Embed Title')
        .setURL('https://discord.gg/eJmZ4RgpxJ')
        .setAuthor({ name: 'Your Name', iconURL: 'Your url Icon' })
        .setDescription('Your Embed Description')
        .setThumbnail('Your Embed Thumbnail')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('Your url image')
        .setTimestamp()
        .setFooter({ text: 'Your Footer text', iconURL: 'Your Footer Icon' });
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (cmd == `${prefix}rules`) {
        // reply option from bot
        client.channels.cache.get('Your Channel ID').send({ embeds: [exampleEmbed] }); // use this to make the bot send message in specific channel 
        msg.reply({ embeds: [exampleEmbed] }); // use this to make the bot reply your command
    }
});


client.login('Your Bot Token')


