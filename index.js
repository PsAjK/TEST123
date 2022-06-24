const {Client} = require("discord.js")


const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
    partials: ["USER", "REACTION", "MESSAGE", "GUILD_SCHEDULED_EVENT", "GUILD_MEMBER", "CHANNEL"]
})

const config = require("./data/config.js")
const commandHandler = require("./handlers/command.handler.js")
const token = config.token

commandHandler(client)

client.on("ready", () => {
    console.log(`Bot online! - ${client.user.tag}`)

    client.user.setActivity("pornole", {type: "COMPETING"})
})

client.on("interactionCreate", (interaction) => {
    if(interaction.customId == "1") {
        interaction.reply({content: "Zweryfikowano pomyślnie!", ephemeral: true})
        interaction.member.roles.add("989713886179651594")
    }
})

client.login(token)