<img src="https://i.imgur.com/bpXa9WB.gif" width="500">

# React Props Lab: "Simpsons Family website"

You now some key React concepts: <strong>components, props,</strong> and state!  Props require a little bit of practice to get the hang of, ergo, this simpsons-themed props lab.

<strong>Note:</strong> <em>(If you are not a fan of the Simpsons, you are welcome to change this to whatever theme you like, eg., the sims, UFC, the backstreet boys, 'n sync, etc.. whatever you like.)</em>

# The Problem/Situation

The <a href="https://en.wikipedia.org/wiki/The_Simpsons">Simpsons</a> have decided to create a Simpsons family website. Bart Simpson <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" height="20"> was supposed to do the homepage but abandoned the project to go hang out at the Quick-E-Mart with Milhouse <img src="https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png" height="20">.

This is as far as Bart got: 
<img src="https://user-images.githubusercontent.com/24878576/126073747-7d59c309-05bf-4b49-a9c7-035c1765419d.png">

# Tasks Overview

Lisa Simpson <img src="https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png" height="20"> has now hired you to finish Bart's work.

Your tasks:
- <strong>Task 1</strong>: In App.js, you will pass props to the `<ProfileCard>` JSX element so that, on the homepage, each simpson has a pic, name, description, email
- <strong>Task 2</strong> (optional but recommended): Create a set of components to organize the generic nav menu items, and customize them using props.
- <strong>Task 3</strong> (optional): Make any other changes you'd like to practice your react and make the website better.
- <strong>Task 4</strong> (optional): Investigate some of the optional topicslisted in the task 4 description.
 
Further details/hints are provided below after the Setup section.

# Setup

0. Fork and clone this repository 
1. `cd` into your `props-simpsons-website-lab/` folder and do an `ls`. You should see that you have a basic react project with an `src/` and `public/` folder but  that has `package.json` (list of packages) but is <strong>missing a node_modules/ folder</strong>:

![image](https://user-images.githubusercontent.com/24878576/126079216-d7fbdbde-27b1-455c-bb9b-2ea64bb7fba6.png)

7. Do `npm install` to install the packages listed in `package.json`. Typically when you pull someone's react project, there is no `node_modules` folder and you have to use `npm install` to install the packages from package.json. (Why?)
8. Type `ls` to verify that a `node_modules/` folder has appeared which contains the installed packages.
9. Type `code .` to open up the react project in VSCode
10. Inside VSCode, open up the VSCode terminal (View->Terminal or Ctrl+backtick)
11. Type `npm start` to run your react frontend.
12. On your browser, react may automatically open up localhost:3000. If not, you may have to do that yourself. (<strong>Note:</strong> Although react tooling uses `npm` and `package.json` and the node environment, we are NOT creating a server/doing backend work. All your react work is frontend code that runs on a browser.)

You should see something that looks like the screenshot above.

13. Examine the starter code: inspect the HTML in your browser, inspect the Component hierarchy with react dev tools, and examine the code in VSCode to see what it's doing.


# Task 1: Customize the cards using props

Your main task is to pass props into the <ProfileCard /> tags in order to customize each family member's:
- name, 
- description, 
- email, and 
- picture

The end result should look like this (the green and red highlights suggest some of the props you may wish to pass in):

<img src="https://user-images.githubusercontent.com/24878576/126102670-9ac76f0e-a974-4ab7-9c1d-8bd1b12f7c55.png">


## Hints (if needed):
1. Before starting, take a look at App.js, our outermost component, and look at the work that has been done so far by Bart <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" height="20">. It appears that he has written some code to:
    - render some builtin `<div>` and `<section>` elements
    - render some userdefined JSX elements: `<Nav>`, `<ProfileCard>`, `<ProfileCard>`, `<ProfileCard>`, ...
2. Secondly, look at the `ProfileCard.jsx` file to see what the `ProfileCard` component's definition looks like. It is a bunch of divs with an img tag, an h1 tag, and an email.
3. <strong>Pass a prop to the ProfileCard</strong>: On the App.js, modify the code that is rendering the `<ProfileCard>` elements, and pass in some props of your choosing (eg., to pass a `name` prop we can do this: `<ProfileCard name={"Homer Simpson"} />`
4. Use React Dev Tools to verify that the ProfileCard now has a props section with the name coming in. This means ProfileCard is receiving the prop you gave!!
    - <img src="https://user-images.githubusercontent.com/24878576/126159091-3ad2df82-aa19-4aa1-85bc-3ba0e7568bf9.png">
5. After you've verified that the ProfileCard is receiving the `name` prop, we know that ProfileCard has access. So now, we can make it show up by doing `<h1>{props.name}</h1>` in the ProfileCard.jsx in place of the `<h1>Name Here</h1>`
6. You should see the name change in the browser if this was done correctly.
7. Now pass the appropriate name, email, description and picture props into each `<ProfileCard>`, until all the profiles look like the image above.
8. (As mentioned, you may use any theme you want in case you don't like the simpsons)

# Task 2 (optional but recommended): Improve the NavBar code

1. If you peek at the Nav.jsx, you will notice the Navbar code hs a ton of similar repeated code: ![image](https://user-images.githubusercontent.com/24878576/126160123-40449d99-6abe-41a6-a201-7076d8c869a5.png)
2. Your task is to get rid of the copy-paste by defining a component (eg., NavMenuItem? MenuItem?) that renders repeated bits - for example, the bit highlighted in red above is one possibility.
3. Render your new `<MenuItem />` component in place of the menu items.
4. Pass in appropriate props to customize the menu and submenu links (it's up to you to decide if you'd like to also have an additional Submenu component) to be theme-appropriate instead of just "Menu item" and "link 1" and "link 2" (eg., "Flanders Facts", "Favourite Drinks at Mo's", etc.)
5. You don't need to have the links actually point anywhere, since we will get to that when we do client side routing with react router

# Task 3 (optional)

Make any other changes you'd like to practice your react and make the website better.

# Task 4 (optional)

Investigate using some of the more <a href="https://www.freecodecamp.org/news/react-props-cheatsheet/">advanced features of props</a>, such as boolean props, destructuring, etc.

Investigate <a href="https://reactjs.org/docs/typechecking-with-proptypes.html">PropTypes</a> - are they useful? Worth the hassle?

Implement some of these advanced features.




