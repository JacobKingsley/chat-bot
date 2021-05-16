// js for chatbot
// event listener to get input from the input box
document.addEventListener("DOMContentLoaded", ()=> {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

// make the bot
function output(input) {
    let product;
    // remove characters that are not words, spaces, or digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    // remove the words a, please, and change whats to what is
    text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    // compare the input to arrays and return response
    if (compare(possibleinputs, replies, text)){
        reply = compare(possibleinputs, replies, text);
    }
    else {
        reply = alternative[Math.floor(Math.random * alternative.length)];
    }

    //return to the site
    addChat(input, reply)
}

//compare the arrays
function compare(possibleinputsArray, repliesArray, text) {
    let item;
    for (let x = 0; x<possibleinputsArray.length; x++){
        for (let y = 0; y < repliesArray.length; y++){
            if (possibleinputsArray[x][y] == text) {
                items = repliesArray[x];
                item = items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    return item;
}

function addChat(input, reply) {
    const chatContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerText = input;
    chatContainer.appendChild(userDiv);

    let chatbotDiv = document.createElement("div");
    chatbotDiv.className = "chatbot";
    chatbotDiv.innerText = reply;
    chatContainer.appendChild(chatbotDiv);

}

// possible inputs
const possibleinputs = [
    ["hi", "hey", "howdy", "hey hey", "hey there", "hello", "hello hello", "yo"],

    ["how are you"],

    ["what is going on", "what is up", "what is cracking", "what is crackin", "wassup", "sup"]
];

const replies = [
    ["Hello!", "Hi!", "Hey!", "Yo"],

    ["I'm splendid, how are you?", "I'm rocking and rolling, how are you?"],

    ["Not much, just chilling", "Just chatting with my best friend!", "I'm about to go play some golf actually"]
];

const alternative = [
    "Nice",
    "Oh interesting, tell me more",
    "Could you rephrase that please?",
    "Nice try Dali, but Jacob didn't program me to be able to reply to that"
];

