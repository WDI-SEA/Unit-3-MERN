# Salad King Pepper Chart SPA

## Background

Salad King is a famous Toronto restaurant with a famous <a href="https://saladking.com/">Spice Chart</a> (scroll down to "Spicy Scale"). The chart looks something like this:

<img src="https://hollyedejer.files.wordpress.com/2013/12/00spicyscale.jpg">

## Purpose

More practice with props, state

## Task

We're going to make an app to display the spice level status messages interactively as your user clicks the buttons. Your finished product may look something like this:

http://saladking.alexanderghose.repl.co/

(But you can make it look better if you'd like!)

## Use Builtin components

I recommend you do this all in one big "App" component with no other user-defined components, just builtin components (way easier - follow the updating state lesson).
The <App> component might be broken up into builtins in this manner for example:

<img src="https://user-images.githubusercontent.com/24878576/114344825-83fb0880-9b2e-11eb-8dbf-63cb5c3d5818.png">

## Hints / Questions to ask yourself: 
1. How can I visually break this app down into components? (done for you above) 
2. How can I create a new react project - use Create-React-App!
3. How can I create an <App> component that contains four builtin JSX components:
    - a `<button>` for "add some heat" 
    - a `<button>` for "cool it off" 
    - somewhere to show the spice level, eg., an `<h2>` JSX tag
    - somewhere to show the spice message, eg., another `<h2>` JSX tag?
4. State: How can I initialize/add "state" to `<App>`? What things are changing that i need to actually put in my state object? 
5. State: How can I access the initial "state" to give my builtin components their initial values? 
6. Updating State: How can I write a method that calls setState to update state? 
7. UpdatingState: How can I use an onClick on my buttons to trigger an update of state?

## Bonus/Optional

- Try to make this work with a <ButtonPanel> userdefined component that contains the two buttons, and a <StatusPanel> userdefined component that contains the two status messages.
- Try to make this work using Hooks.
