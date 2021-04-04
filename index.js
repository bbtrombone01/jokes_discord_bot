// has discord bot tokem 
require("dotenv").config()

const {Client} = require('discord.js')
const discord_client = new Client

// array of all the jokes for bot
const arrayOfJokes = require("./jokesList")

// look into find out what the prefix for other channels are 
const prefix = "!"

discord_client.on(`ready`, ()=>{
    console.log("time to tell some jokes")
})

discord_client.on(`message`,(message) =>{
    if (message.author.bot) return
    if (message.content.startsWith(prefix)){
        let indexOfJokeArray = parseInt(message.content.slice(prefix.length))
        if (message.content.slice(prefix.length) === "random joke"){
            console.log("set up this code later")
        }
        if( indexOfJokeArray < 50){
            console.log("progress")
            message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray-1][0])
            setTimeout(()=>{
                message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray-1][1])
            },30000)
        }
    }
})

discord_client.login(process.env.discord_bot_token)