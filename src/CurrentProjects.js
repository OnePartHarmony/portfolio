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
        description: [
            "Based on the card game Set",
            ""
        ],
        videos: [win, midGame, lose],
        images: []
    },
    {
        title: "Baraka",
        indexImage: baraka
    },
    {
        title: "SetList",
        indexImage: setList
    },
    {
        title: "Git Input",
        indexImage: gitInput
    }    
]


export default currentProjects