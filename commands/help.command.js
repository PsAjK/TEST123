const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: "verify",

    run(msg) {
        const embed = new MessageEmbed()
            .setTitle("Zweryfikuj")
            .setDescription("klikaj kurwo na dol")
            .setTimestamp()

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("1")
                .setLabel("Zweryfikuj się!")
                .setEmoji("✅")
                .setStyle("SUCCESS")
        )
        
        msg.reply({embeds: [embed], components: [row]})
    }
}