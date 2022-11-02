![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# React State

In React, we can't change the values in the props object. They are meant to be **immutable**. So, if we can't change the value in a props object how do we update our page? The answer is _state_.

## Learning Objectives

- Review passing data to a React component via props.
- Identify state in a React app.
- Modify the state of a React component through events.
- Distinguish container and presentational components.

## Set Up

1. Change into your sei directory for this class
1. Once you're in the **sandbox** directory, type `npx create-react-app react-state` and press enter.
1. After it's completed and you're returned to the prompt, type `cd react-state` to switch into the project directory.
1. Open the application in VS Code by typing `code .`.
1. In VS Code, click the run button next to the **start** script in the NPM SCRIPTS area of the Explorer pane **_or_** from the Terminal, type `npm start` to launch the development server.

## Framing

In computer science terms, we descibe systems as stateful if they are designed to remember preceding events or user interactions; the remembered information is called the **state** of the system.

So far in this program, we used an imperative model of programming. React uses a declarative style of programming. **_Declarative programming_** is like describing a picture, whereas **_imperative programming_** is like a set of instructions for painting that picture. React enables us to design views for each **state** in our application, and it handles efficiently updating and rendering views when our data changes.
 
With React, we give up the control of changing the user interface (UI) to React. Let's consider an example in vanilla JavaScript:

```js
if (gameOver === true) {
  const restart = document.querySelector('#restart');
  restart.style.display = 'inline-block';
} else {
  restart.style.display = 'none';
}
```

In React, we describe how React should render the UI based on the current data and conditions that exist:

Hey by the way, if you're not familiar with this ? operator in the code, it is known as a Ternary operator, and is basically a shorter way of writing If/Else statements. Here's a quick description from the web: "Ternary operator starts with conditional expression followed by ? operator. Second part ( after ? and before : operator) will be executed if condition turns out to be true. If condition becomes false then third part (after :) will be executed."

```jsx
// ...
return (
  {gameOver ? <button onClick={restartGame}>Restart</button> : null}
)
```

The game being over is one _state_ our game can be in. We know it's in this state when the `gameOver` variable evaluates to `true`. In that case, we want React to render the button. If the game isn't over, we can render something else or nothing at all.

## Changing the State

Up to now, we've seen that we can use props to pass data into components. The components in turn, can use that data when rendering content to the page. What we haven't seen is how to make the pages dynamically change based on user interactions or some other event. Since the props object cannot be changed in React once it's rendered, our app has been completely static.

To make our app dynamic we need to designate some data as state because the only way to tell React to update the page is to change the data that's in state. Any components that are dependent upon state data &mdash; including any props that are passed state data &mdash; will be rerendered automatically if the state they are dependent upon changes.

![Diagram showing how state changes cause components to rerender](https://media.git.generalassemb.ly/user/17300/files/39d10a00-0f85-11eb-91a2-afabd530b7c8)

## Class-based vs. Function Components with Hooks

In order to designate some data as state in a React component, there are two different syntaxes that can be used:

1. ES6 **class** syntax
2. Function components with hooks

There are differences in the way each of these behaves and looks. Originally when React was created there was only class syntax. Over the years, as React became more comprehensive and as the base grew, some challenges with this syntax became more evident. For one, class syntax was harder to test using test automation tools that existed in the industry. Many people also argued that it was harder for humans to reason about class-based components, particularly since classes themselves were new to Javascript. As a result, the React team and community rethought the approach and came up with **Hooks** as an alternative.

Hooks were introduced in version 16.8 in February 2019. Today, much of the new code that is written in React uses hooks, but there's **a lot** of legacy code (and tutorials) that still exists using the class syntax, and some people still prefer to write their new code using it. We're going to focus on hooks in this program because most people find it a lot easier to work with and learn.

### We Do: Add State to a Component

Let's start by everything in App.js with the following:

```jsx
import React from 'react';

function App() {
  return (
    <div className="main">
      <button>Toggle State</button>
    </div>
  );
}

export default App;
```

We should now have a very basic component that renders a button to the page.

Next, we're going to use the useState Hook to designate a piece of data as part of our application's state. To use this method (that's all a Hook is a method in the React class), we need to import it. We're going to also be importing it from the `react` package in our `node_modules` folder, so we'll change the first line of the App.js file to read:

```js
import React, { useState } from 'react';
```

This syntax is called **destructuring**. Destructuring is a cool JavaScript feature that lets us name parts of an array or object so that we don't have to use the dot notation. Let's take a quick look at it by watching this quick [video](https://www.youtube.com/watch?v=G4T2ZgJPKbw).

The way that we'll use the `useState` method in our code will also use destructuring. In this case, we'll be destructuring an array that is returned from useState. This array contains two elements. The first is the actual state data and the second is a method that allows us to change the data. Let's see the pattern:

```jsx
const [data, setData] = useState(initialState);
```

You can name the elements of the array anything that you like but it's convention to give the data element an intuitive and descriptive name as we have always done with our variables, and name the second element, the same as the first but with `set` prepended to the name. For example:

```jsx
const [movies, setMovies] = useState([]);

const [gameOver, setGameOver] = useState(false);

const [friends, setFriends] = useState([{ name: 'Billie' }, { name: 'Kareem' }]);
```

We're going to only have one variable in our state right now, but you can add as many pieces of state as you need to a component.

Add the following line to the `App` function **before** the `return`:

```jsx
import React, { useState } from 'react';

function App() {
  // Add state for showing:
  const [showing, setShowing] = useState(true);

  return (
    <div className="main">
      <button>Toggle State</button>
    </div>
  );
}

export default App;
```

Cool! Now we have some state, but how can we tell? There's an app for that... Install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) from the Chrome Extension Store.

## Listening for User Interactions

In the past when we wanted to listen for an event, we created an event listener and attached it to an element in the DOM. Remember though, we're not interacting directly with the DOM in React. That's React's job.

With React's declarative programming model, when we want to listen for an event on an element we'll just attach the event handler directly to the element. Let's see the pattern:

```jsx
function AlertButton() {
  // Add the onClick and give it a callback function
  return <button onClick={() => alert('You clicked me!')}>Click me</button>;
}
```

We can find a comprehensive list of all of the events React supports in the [docs](https://reactjs.org/docs/events.html#supported-events).

Let's have our button toggle the showing state when it's clicked. How might we do that?

<details>
    <summary>Solution</summary>
    
```jsx

<button onClick={() => setShowing(!showing)}>Toggle State</button>


```
</details>

Now we can use the data in state to make some changes to the page. Add a paragraph into the return of the App component:

```js
return (
  <div className="main">
    <p>Can you see me now?</p>
    <button onClick={() => setShowing(!showing)}>Toggle State</button>
  </div>
);
```

We want the paragraph to only display when the `showing` state variable evaluates to true. There are many ways we can do this...

1. Use a logical &&:

```js
return (
 <div className="main">
    {showing && <p>Can you see me now?</p>}
    <button onClick={() => setShowing(!showing)}>Toggle State</button>
  </div>
);
```

2. Use a ternary:

```js
return <div>{showing ? <p>Can you see me now?</p> : null}</div>;
```

3. Set an inline style:

```js
return (
  <div>
    <p style={{ showing ? {display: 'none'} : {display:'block'}}}>Can you see me now?</p>
  </div>
)
```

## Passing Down State as Props

We can also pass state down as props. We'll create a friend list to see this in action.

Create a Friend component that renders the following html:

```html
<li>A friend</li>
```

Now create a new component called Friends and add some state to it:

```jsx
import React, { useState } from 'react';
import Friend from './Friend';

const Friends = () => {
  const [friends, setFriends] = useState(['Billie', 'Kareem', 'Andrew', 'Justin', 'Max', 'Hisham']);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend} friend={friend} />
      ))}
    </ul>
  );
};

export default Friends;
```

Next import it into App.js and compose it in the App function's `return`.

Cool let's get our friend's name to appear instead of "A Friend".

<details>
  <summary>Solution</summary>

```jsx
import React from 'react';

//Cool! We can use destructing here too!
const Friend = ({ friend }) => {
  return <li>{friend}</li>;
};

export default Friend;
```

</details>

Let's add a function now in Friends to change our friends array. Let's call it `unfriend`:

```js
import React, { useState } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState(['Billie', 'Kareem', 'Andrew', 'Justin', 'Max', 'Hisham']);
  function unfriend() {
    const newFriends = friends.slice(1);
    setFriends(newFriends);
  }
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend} friend={friend} />
        ))}
      </ul>
      <button onClick={unfriend}>Unfriend Someone</button>
    </>
  );
};

export default Friends;
```

Okay, this is cool, but let's make it so that we unfriend a specific friend when we click on them...

<details>
  <summary>Solution</summary>

```jsx
import React, { useState } from 'react';
import Friend from './Friend';
// So cool... we can use destructuring here too!!!
const Friends = () => {
  const [friends, setFriends] = useState(['Billie', 'Kareem', 'Andrew', 'Justin', 'Max', 'Hisham']);
  function unfriend(friendName) {
    const newFriends = friends.filter((friend) => friend !== friendName);
    setFriends(newFriends);
  }
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend} friend={friend} unfriend={unfriend} />
        ))}
      </ul>
    </>
  );
};

export default Friends;
```

```jsx
import React from 'react';

//Cool! We can use destructing here too!
const Friend = ({ friend, unfriend }) => {
  return <li onClick={() => unfriend(friend)}>{friend}</li>;
};

export default Friend;
```

</details>

## Additional Resources

- [Visual Guide to State in React | Dave Ceddia](https://daveceddia.com/visual-guide-to-state-in-react/)
- [Component State | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-state)
- [React State | React Docs](https://reactjs.org/docs/state-and-lifecycle.html)
- [Thinking in React | React Docs](https://reactjs.org/docs/thinking-in-react.html)
- [Imperative vs. Declarative Javascript](http://www.tysoncadenhead.com/blog/the-state-of-javascript-a-shift-from-imperative-to-declarative#.VxgGxZMrKfQ)
- [Styling in React](http://survivejs.com/webpack_react/styling_react/)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
