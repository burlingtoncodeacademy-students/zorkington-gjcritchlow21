/* -------------------------------- Readline ------------------------------------*/

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

/*--------------------------- Functions ----------------------*/
// function to steralize words
function cleanWords(dirtyWord) {
  let steralize = dirtyWord.toString().trim().toLowerCase();
  return steralize;
}

/*--------------------------- Rooms ----------------------*/
/*--------------------------- Items ----------------------*/
/*--------------------------- Look-up Tables ----------------------*/
/*--------------------------- State Maching & Transitions ----------------------*/
/*--------------------------- Story ----------------------*/
async function intro() {
  let rules =
    "Welcome Adventurer! Please word your actions in a [Action] followed by [Item/Room] format. If you would like to look at your inventory you can do this by typing [C] at any time. You can also check on a rooms inventory by typing the letter [I] at any time. Please refer to rooms by their name, and cheaters will be punished to the full extent of my omnipotent abilities.";

  let startPrompt = await ask(
    rules + "\n" + "Do you understand the rules of the game? Yes or no? \n>_"
  );

  let cleanStart = cleanWords(startPrompt)
  if(cleanStart === 'yes') {
      start()
  } else {
      console.log("Well OK BYE")
  }
  
}
intro()

async function start() {
let gameStartMessage = "After a night of drinking in the local tavern, you suddenly awake to the howls of wolves in the middle of a forest. Beset with fog, the sounds of the wolves begin to get closer, but in the distance you see a dim light. As you frantically run towards the light, an old victorian house comes into focus surrounded by an old iron fence."

}
