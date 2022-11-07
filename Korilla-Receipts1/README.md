[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Korilla React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers
happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Prerequisites

- React

## Instructions

1. cd into the current folder 
1. Install dependencies (`npm i` or `npm install`).
1. Fulfill the listed requirements.

## Requirements

Follow the walkthrough and finish all parts. If you have extra time, finish the
bonus as well.

## Part 1: Sample Receipts

You'll be rendering some sample receipts:

```js
const initialState = [
  {
    id: 1,
    person: 'Billie',
    order: {
      main: 'Burrito',
      protein: 'Skirt Steak',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Thai Iced Tea',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Kareem',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Chicken',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Andrew',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];
```

- Add receipts state to the App with the useState hook and initialize the state by passing useState the initialState array that is in the App.js file.

Make a Receipt component that renders the following data from the first receipt:

- person
- order
  - main
  - protein
  - rice
  - sauce
  - drink
  - cost

**Optional:** render the toppings

Add the next two receipts to state and make two more `Receipt` components so
that you get a view like this. Some css has been implemented already for you,
take a look at class names in the various css files.

![korilla receipts rendered Mark](https://i.imgur.com/27V4KW8.png)

## Part 2: Conditionally render the receipts

Right now, all the receipts are not paid.

Modify App.js to only render a component if the receipt
has not been paid.

Then go into the receipt data and change a paid value to true, then verify that
the receipt disappears.

## Part 3: Add a click handler to update the data

Obviously we don't want to have to manually update the data to show that it is paid. Make a function that updates the paid property in state to be true when the receipt is clicked.

## Bonus

## Part 4: Searching for receipts

Implement a search field that allows you to search by person. The search should
automatically update as you type, hiding every receipt that doesn't match the
name you're spelling out.

Hint: Think about how the search will work. How do you make something happen
while typing? What needs to happen? What values are you searching and comparing?

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
