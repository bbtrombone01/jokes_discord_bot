require("dotenv").config()

const arrayOfJokes = require("./jokesList")
// console.log(process.env.discord_bot_token)

const {Client} = require('discord.js')
const discord_client = new Client


discord_client.on(`ready`, ()=>{
    message.send("time to tell some jokes")
})

discord_client.on(`message`,(message) =>{
    if (message.author.bot) return
    message.channel.send("why do i exist")
    console.log(arrayOfJokes.arrayOfJokes.length)
    setTimeout(() =>{
        message.channel.send(" please tell me")
    }, 30000)
})

discord_client.login(process.env.discord_bot_token)