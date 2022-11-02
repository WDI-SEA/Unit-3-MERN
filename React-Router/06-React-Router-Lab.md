# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Router Recap and Exercise



## Recap
What have we learned so far?
* Single Page Applications have specific URLs that are routed to display
  different content.
* React Router is a third-party library that we can install and use with React.
* Since React Router isn't built in to React, we must import its components.
* React Router makes it easy for us to route URLs to components.
* React Router automatically manipulates modern browser history mechanics.

Now let's put that to the test!

## You Do: Implement Router

Let's go back to our blog project.

You've been told your blog needs to have five pages:
- Homepage
- Main blog
- Favorite movie
- Favorite food
- About page

You already have the "Main blog" page, which renders the `Post` component! One down, four to go.

Task:

- Each page is a component - we're learning to use React Router here!
- Create a navigation menu of list items that Route to each page.
  - These pages don't need to have much content — just the header at the top saying what the page is and a paragraph description of your choosing.

_Fun Note:_ There's no reason you can't change the CSS, if you'd like! The CSS file that you'll change is `App.css`. If you'd like, you can grab ours below:


<details>
  <summary>App.css</summary>

  ```css
  @import url('https://fonts.googleapis.com/css?family=Spectral:500,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,600i');

a {
  margin: 20px 30px 0px 0px;
  font-family: "Spectral", serif;
  color: blue;
}

body {
  font-size: 16px;
  line-height: 1.5;
  color: #002F2F;
  font-family: "Raleway", sans-serif;
}

li {
  font-style: italic;
}

ol {
  font-weight: bold;
}

body {
  background: #EFECCA;
}

h1 {
  font-size: 26px;
  color: #046380;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Spectral", serif;
}

h2 {
  font-size: 24px;
  color: #046380;
  text-align: center;
  font-family: "Spectral", serif;
}

h3 {
  font-size: 22px;
  color: #046380;
  text-align: center;
  font-family: "Spectral", serif;
}


.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

</details>
 - Thought exercise: Why is that the only CSS file you need to change?

**Hint**: You'll need multiple `.js` files

**Hint**: Do you have `react-router-dom` installed for this project?

**Hint**: You can instantiate a component with `props` inside of a `<Route>` element. An example is below:


```js
            <Route path="/procedures" element={<Procedures procedures={proceduresArray}/>}></Route>
```

##### A good article that discusses how to pass props to a component: 
- https://tylermcginnis.com/react-router-pass-props-to-components/

##### Articles about the spread operator: 
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [6 great uses of the spread operator](https://davidwalsh.name/spread-operator)

## Solution

Your solution should look something like as follows:

![Solution for Project](assets/router-solution.png)
