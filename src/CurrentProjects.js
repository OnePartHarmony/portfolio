import ruleOf3 from "./images/RuleOf3.png"
import setList from "./images/SetList.png"
import gitInput from "./images/GitInput.png"
import baraka from "./images/Baraka.png"
import win from "./images/WinScreen.mp4"
import lose from "./images/LoseScreen.mp4"
import midGame from "./images/midGame.mp4"



const currentProjects = [
    {
        title: "Rule of 3",
        subTitle: "A logic-based card game",
        indexImage: ruleOf3,
        deployedLink: "https://onepartharmony.github.io/rule-of-3/",
        gitHubLink: "https://github.com/OnePartHarmony/rule-of-3",
        description: [
            "Note: This game is not yet optimized for smaller screens - coming soon.",
            "Based on the card game Set",
            ""
        ],
        videos: [win, midGame, lose],
        images: []
    },
    {
        title: "Baraka",
        subTitle: "A turn-based resource management board game for two to four players",
        indexImage: baraka,
        frontEndLink: "https://github.com/OnePartHarmony/Client-Baraka-Capstone",
        backEndLink: "https://github.com/OnePartHarmony/Server-Baraka-Capstone",
        description: [],
        videos: [],
        images: []
    },
    {
        title: "SetList",
        indexImage: setList,
        subTitle: "A web app for musicians to organize repertoire songs and set lists",
        deployedLink: "https://setlist.fly.dev/",
        gitHubLink: "https://github.com/OnePartHarmony/setList",
        description: [],
        videos: [],
        images: []   
    },
    {
        title: "Git Input",
        indexImage: gitInput,
        subTitle: "A web app for software engineers to anonymously review employer companies",
        deployedLink: "https://git-input.netlify.app/",
        frontEndLink: "https://github.com/OnePartHarmony/WDSTF-Project3-Client",
        backEndLink: "https://github.com/OnePartHarmony/WDSTF-Project3-API",
        description: [],
        videos: [],
        images: []        
    }    
]


export default currentProjects