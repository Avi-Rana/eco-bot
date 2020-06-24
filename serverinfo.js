const Discord = require('discord.js');
module.exports = {
    name: 'serverinfo',
    description: 'desc',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**INFO**")
        .setColor("GREEN")
        .addField("Name", message.guild.name, true)
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Region", message.guild.region, true)
        .addField("Created On", message.guild.createdAt, true)
        .setFooter("ServerRep")
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        message.channel.send(embed);
    }
}