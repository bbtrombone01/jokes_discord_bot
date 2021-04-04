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
        let indexOfJokeArray = parseInt(message.content.slice(prefix.length))-1
        if( indexOfJokeArray <= 50){
            message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray][0])
            setTimeout(()=>{
                message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray][1])
            },30000)
        }
        if (message.content.slice(prefix.length) === "random joke"){
            min = Math.floor(0)
            max = Math.ceil(50)
            indexOfJokeArray = Math.floor(Math.random()* (max - min + 1) + min)
            message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray][0])
            setTimeout(()=>{
                message.channel.send(arrayOfJokes.arrayOfJokes[indexOfJokeArray][1])
            },30000)
        }
    }
})

discord_client.login(process.env.discord_bot_token)