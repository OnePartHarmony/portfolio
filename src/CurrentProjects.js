import ruleOf3 from "./images/RuleOf3.png"
import setList from "./images/SetList.png"
import gitInput from "./images/GitInput.png"
import baraka from "./images/Baraka.png"
import win from "./images/WinScreen.mp4"
import lose from "./images/LoseScreen.mp4"
import midGame from "./images/midGame.mp4"
import gitWelcome from "./images/GitWelcome.png"
import reviewStars from "./images/ReviewStars.mp4"
import songView from "./images/SongView.png"
import groupView from "./images/GroupView.png"
import dragAndDrop from "./images/Draggable.mp4"
import placeDudes from "./images/ChoosingTerritories.mp4"
import newGame from "./images/newGame.png"


const currentProjects = [
    {
        title: "Rule of 3",
        subTitle: "A logic-based solitaire card game",
        indexImage: ruleOf3,
        deployedLink: "https://onepartharmony.github.io/rule-of-3/",
        gitHubLink: "https://github.com/OnePartHarmony/rule-of-3",
        description: [
            "Rule of 3 is based on Set, a card game I grew up playing alone for hours.  The player has to find sets of three cards with symbols that are all the same or all different in four ways: color, shape, number, and fill.",
            "This app improves on the physical version of the game by allowing the player to check if a set is currently possible.  There is an easy mode for learning the game, which reduces the card properties.",
            "The help button finds a set for the player.  The player can lose the game by asking for help more times than they found sets alone.",
            "I created simple animations for wins and losses using an html canvas and randomly generated colours.",
            "Automatic redraws and clickability are delayed with timeouts to create a smooth user experience where one has time to see what cards made a set.",
            "I built this app in my third week of learning to code, using only vanilla JavaScript, HTML, and CSS."
        ],
        videos: [win, midGame, lose]
    },
    {
        title: "Baraka",
        subTitle: "A turn-based resource management board game",
        indexImage: baraka,
        frontEndLink: "https://github.com/OnePartHarmony/Client-Baraka-Capstone",
        backEndLink: "https://github.com/OnePartHarmony/Server-Baraka-Capstone",
        description: [
            "Created with two other student developers, this game lets a user play with up to three friends at once.",
            "The game centers around a map of territories with stats for population, wealth, and abundance.  Players control territories with priests and soldiers.  Each season, players choose from a variety of commands to issue to each controlled territory, then commands are executed one at a time in backend game logic and updates are sent to players.  A player wins by killing all enemy priests.",
            "I implemented socket.io to create a live online multiplayer experience.  Each time a change is made to the map, all players get instant updates.",
            "Using original art by my teammate, I created a responsive map of hexagons that displays stats for each territory and displays contextual visual cues for clickability.",
            "Technologies used: React, Express, Node, MongoDB, JavaScript, HTML, CSS, Bootstrap, Socket.io",
            "Note: This game is not yet optimized for smaller screens."
        ],
        videos: [placeDudes],
        images: [newGame]
    },
    {
        title: "SetList",
        indexImage: setList,
        subTitle: "A web app for musicians to organize songs and set lists",
        deployedLink: "https://setlist.fly.dev/",
        gitHubLink: "https://github.com/OnePartHarmony/setList",
        description: [
            "Inspired by my barbershop quartet, this app helps bands and other musical ensembles to organize their repertoire into set lists based on length.",
            "Beacause the content for this app is user-generated, I seeded the database with content that can be viewed by logging in with the username 'JohnLennon' and the password '123'.",
            "A user is able to work as one of multiple groups they may be a part of.  Members of a group have full CRUD ability for songs, set lists, and comments, as well as the group itsself.",
            "I implemented drag-and-drop functionality for a user to reorder a set list.",
            "Technologies used: Express, Node, MongoDB, JavaScript, Liquid.js, HTML, CSS, Bootstrap"
        ],
        videos: [dragAndDrop],
        images: [groupView, songView]   
    },
    {
        title: "Git Input",
        indexImage: gitInput,
        subTitle: "A web app for software engineers to anonymously review employer companies",
        deployedLink: "https://git-input.netlify.app/",
        frontEndLink: "https://github.com/OnePartHarmony/GitInput-Client",
        backEndLink: "https://github.com/OnePartHarmony/GitInput-API",
        description: [
            "This was my first project working as a team, with an assigned team of three other classmates.  As git manager, I worked across the full stack to assure we met MVP in our short project window by scrutinizing every pull request and helping each teammate with debugging.",
            "Users can rate a company using stars, which updates the company average. Signed-in users have full CRUD functionality for companies, reviews, and comments.",
            "Technologies used: React, Express, Node, MongoDB, JavaScript, HTML, CSS, Bootstrap"
        ],
        videos: [reviewStars],
        images: [gitWelcome]        
    }    
]


export default currentProjects