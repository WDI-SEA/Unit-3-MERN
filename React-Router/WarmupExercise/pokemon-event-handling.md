# Pokemon Event Handling

**Goal:**

- Create a pokemon battling app using React.js

**Wireframe**

https://user-images.githubusercontent.com/24878576/114391828-f6d3a600-9b65-11eb-98ca-61b96e484a15.png

## Setup:

- Create a new project:

```npx create-react-app pokemon```

- cd into the directory:
``` cd pokemon``` 

- Check the app is running using the following command:

```npm start```

## Steps

- Create a new component Pokemon.js.
rcc
- Render two Pokemon components inside App.js.

- Pass down a name prop for each Pokemon. Each name should be a different value. I suggest "Pikachu" and "Charizard".

- Create a state variable that holds two different hp values. Name the state variables hp1 and hp2. I suggest a numerical value of 120 for Charizard and 100 for Pikachu.

- Pass these state variables down as props to each individual Pokemon component. Also pass an image prop down into each Pokemon component. These image values are below:

```Charizard: 'https://pokestop.io/img/pokemon/charizard-256x256.png'```

```Pikachu: 'https://pokestop.io/img/pokemon/pikachu-256x256.png'```

- Render these props in the Pokemon component. Your page should now display two pokemon names, two hp values and two images. Your image should be in an image html tag.

- Add a button that says "Attack" inside Pokemon.jsx. You should now have two buttons displayed on the page.

- Create two arrow functions in App.js called "handlePikachuAttack" and "handleCharizardAttack". These methods should lower the hp of their opponent, not their own. Remember to use ```this.setState``` within these methods like we did for ```increaseMood``` and ```decreaseMood```. Each click of the attack button should decrease the opponent's HP by 10.

- Pass these two methods down into each Pokemon component as a single name.

Example: ```handleAttack={this.handlePikachuAttack}```

- Attach this prop method to the Attack button inside Pokemon.jsx using an "onClick".

## Expectations

- When you click on the Charizard attack button, pikachu's HP should go down. Conversely, when you click on the Pikachu attack button, Charizard's HP should go down. See the demo below:

https://pokemonbattle.alexanderghose.repl.co


**Bonus**

- The demo also has a 'status' state variable passed down that changes depending on who's attacking. You can add this feature if you like to.