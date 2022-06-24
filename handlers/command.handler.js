const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const { prefix } = require(__dirname + "/../data/config.js")

const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (client) => {
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter((file) => file.endsWith(".command.js"))
    
    for(const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)

        if(command.name) {
            client.commands.set(command.name, command)
            table.addRow(file, "\u2705")
        } else {
            table.addRow(file, "\u274C")
            continue
        }
    }

    console.log(table.toString())

    client.on("message", (msg) => {
        const { author, guild } = msg

        if(author.bot || !guild) return

        if(!msg.content.startsWith(prefix)) return

        const args = msg.content.slice(prefix.length).trim().split(/ +/g)

        const cmd = args.shift().toLowerCase()

        if(!client.commands.has(cmd)) return

        try{
            client.commands.get(cmd).run(msg, args)
        } catch(error) {
            console.log(error)
            msg.reply("there was an error trying to execute that command!")
        }
    })
}