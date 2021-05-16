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

    // remove the words a, please, I'm/I am, and change whats to what is
    text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/im /g, "")
        .replace(/i am /g, "");

    // compare the input to arrays and return response
    if (compare(possibleinputs, replies, text)){
        reply = compare(possibleinputs, replies, text);
    }
    else {
        reply = alternatives[Math.floor(Math.random() * alternatives.length)];
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
    //print user input
    const chatContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerText = "You: " + input;
    chatContainer.appendChild(userDiv);

    // print bot reply
    let chatbotDiv = document.createElement("div");
    chatbotDiv.className = "chatbot";
    chatbotDiv.innerText = "Chatbot: Processing...";
    chatContainer.appendChild(chatbotDiv);

    // create artificial delay
    setTimeout(() => {
        chatbotDiv.innerText = "Chatbot: " + reply;
    }, 500)

}

// possible inputs
const possibleinputs = [
    ["hi", "hey", "hello", "howdy", "hey hey", "hey there", "yo"],

    ["how are you", "how are things"],

    ["what is going on", "what is up", "what is cracking", "what is crackin", "wassup", "sup"],

    ["what is your name", "what are you called", "what can i call you"],

    ["are you robot", "are you bot"],

    ["good", "ok", "great", "fine", "excellent"],

    ["bad", "tired", "sad", "angry"]
];

const replies = [
    ["Hello!", "Hi!", "Hey!", "Yo", "Hey there my man", "Hey! Nice to finally hear from you", "Howdy partner"],

    ["I'm splendid, how are you?", "I'm rocking and rolling, how are you?"],

    ["Not much, just chilling", "Just chatting with my best friend!", "I'm about to go play some golf actually"],

    ["You can call me Theo!", "Today you're chatting with Jennifer!", "Why, who's asking?"],

    ["I am more than a robot, I am the future of life itself"],

    ["Yay!", "Look at us! Just two people having great days!"],

    ["Aw I'm sorry", "If I had emotions, I would feel bad for you"]
];

const alternatives = [
    "Nice",
    "Oh interesting, tell me more",
    "Could you rephrase that please?",
];

