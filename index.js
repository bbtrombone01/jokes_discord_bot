// has discord bot tokem 
require("dotenv").config()

const {Client} = require('discord.js')
const discord_client = new Client

// array of all the jokes for bot, each element is broken into indexs,
// index zero is set up while index 1 is the punchline 
const botsJokes = require("./jokesList")

// look into find out what the prefix for other channels are 
const prefix = "!"

discord_client.on(`ready`, ()=>{
    console.log("time to tell some jokes")
})


discord_client.on(`message`,(message) =>{
    if (message.author.bot) return
    if (message.content.startsWith(prefix)){
       
    // should be an integer or NaN, if it will be a interger if the user enters prefix and an integer
    // if the user enters something besides an integer then it should be NaN     
    let indexOfJokeArray = parseInt(message.content.slice(prefix.length))-1
    
    // uses indexOfJokeArray to find an element of jokesArray, 
    function sendOutMessage(){
        message.channel.send(botsJokes.jokesArray[indexOfJokeArray][0])
        // should wait for 30 seconds so the user can have time to read the set up of the joke
        setTimeout(()=>{
            message.channel.send(botsJokes.jokesArray[indexOfJokeArray][1])
        },30000)
    }
        if( indexOfJokeArray <= 50){
            sendOutMessage()
        }
        
        if (message.content.slice(prefix.length) === "random joke"){
            // generates and assigns a random number between 0 and 49 to indexOfJokeArray
            min = Math.floor(0)
            max = Math.ceil(49)
            indexOfJokeArray = Math.floor(Math.random()* (max - min + 1) + min)
            sendOutMessage()
        }
    }
})

discord_client.login(process.env.discord_bot_token)