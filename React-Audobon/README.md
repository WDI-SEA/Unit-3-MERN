
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Audubon Society Website

Practice with useState, useEffect and React Router to build a website for the Audubon Society. [_Check out the completed project._](https://react-audubon-site.surge.sh/)

## Prerequisites

- React
- Components, props, and state
- React Router

## Instructions

This homework is due one week from today up through **step 7**. We suggest completing the whole lab though!

1. Fork and clone this repository.
1. Change into the new directory with `cd react-audubon-site`.
1. Install the project dependencies with `npm i` or `npm install`.
1. Checkout to a new dev branch with `git checkout -b dev` so that you can make a pull request to submit this assignment.
1. Fulfill the requirements below to complete the assignment.

## Requirements

The Audubon Society has asked you to build them a website where users can see an index of bird images and be able to click on any given bird to see more information about that single bird on their own dedicated show page.

### Step 1. Install React Router

To set up your project to use React Router, you'll need to install it, import the BrowserRouter component, and then use that component to wrap the App component in the index.js file exactly in the same way that we did it during the [lecture](https://git.generalassemb.ly/SEIR-1130/react-router/blob/master/README.md#importing-dependencies).

1. Use the npm command to install `react-router-dom`.
1. In the index.js file `import { BrowserRouter as Router } from 'react-router-dom'`.
1. Wrap the `<App />` component in the `<Router></Router>` component.
1. Start your server to make sure there are no errors.

> Make sure that your server is running on port 3000 (http://localhost:3000) for this assignment. If you have any other servers running shut them down and then restart the server for this assignment.

### Step 2. Create a Birds component

Create a basic component named Birds put some placeholder text into it so that we can make sure that it's loading. Import the Birds component into App.js and render it inside of the main tags inside of the App component.

Make sure that you can see the placeholder text being rendered in the browser before you move on to the next step.

### Step 3. Add state to the Birds component

We'll be loading some data into the Birds component that we can use once we've fetched it from an API. We'll need a variable in _state_ to hold our data, so create a state variable called `birds` and initialize it with an empty array. Recall that to create state in a component, you'll need to import the `useState` hook and then follow the _pattern_ for creating a state variable:

```js
// Destructure the array that
// is returned from useState
// into a variable to hold the
// data and another that is a
// function to change the data
const [variable, setVariable] = useState(); // <--Set the initial state here by passing it an empty array []
```

> Make sure that your state variable is inside the component but not inside the function's return statement!

Check the Components tab in the Chrome React Developer tools to make sure that there is an empty array for State in the hooks section when you click on Birds in the component tree.

![React Developer Tools showing an empty array in state](https://media.git.generalassemb.ly/user/17300/files/0536b880-12cd-11eb-8dc6-ead3dba1bb91)

### Step 4. Fetch the birds data and add it to state

We want to get some data from our API so we'll need to use the `useEffect` hook with fetch. First, we need to import `useEffect` by destructuring it alongside the `useState` hook at the top of the Birds.js file.

```js
import React, { useState, useEffect } from 'react';
```

Next, we'll need to add useEffect to the component's function. Make sure to add it inside the Bird component function before the `return`. The `useEffect` hook takes two arguments. The first is a callback function and the second is the dependency array. Scaffold the useEffect like this:

```js
useEffect(() => {}, []);
```

Now, you can add your fetch request inside the curly braces of the callback function. The url for our birds API is: https://audubon-api.herokuapp.com/api/birds. Use the pattern in the [AJAX & APIs](https://git.generalassemb.ly/SEIR-1130/APIs-Ajax#the-api-response) lecture for your fetch call:

```js
fetch(url) //<-- the url as a string
  // Wait for the response and convert it to json
  .then((res) => res.json())
  // Take the json and do something with it
  .then((json) => {
    // the json parameter holds the json data
    // so here's where you will need to
    // use the setBirds method put the json into state
  })
  // Catch and log any errors to the console
  .catch(console.error);
```

Leave the dependency array (the second argument) empty to signal to React that it should only run this useEffect one time when the component is mounted, so that we don't get an infinite loop of fetch requests.

Check the Components tab again in the browser and make sure
you are getting the data in the Bird component before moving on!

![React Developer Tools showing the bird data in state](https://media.git.generalassemb.ly/user/17300/files/85135180-12d2-11eb-8c4f-fc4a05426323)

### Step 5. Display the Birds

Now that we have data we can display the birds on the page. There are already some classes that are loaded in the index.css file that we'll use to style the page, so replace the placeholder text in the Bird component's return with some JSX that produces the following HTML.

First, just get your JSX to correctly output the HTML with hardcoded data:

```html
<section class="container">
  <div class="card">
    <div class="card-image">
      <img
        src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
        alt="Acadian Flycatcher"
      />
    </div>
    <div class="card-title">
      <h3>Acadian Flycatcher</h3>
    </div>
  </div>
</section>
```

Check the Elements tab in the browser's dev tools and make sure that the classes are being correctly applied and there are no errors in the console.

Your page should now be showing a single bird card like this:

![The rendered html in the browser displayings a single Acadian Flycatcher card](https://media.git.generalassemb.ly/user/17300/files/a4ab7980-12d4-11eb-9bcf-e30e19cd46a7)

If there are errors in the console, fix them before moving on to display multiple birds.

Your code should now look like this:

```jsx
return (
  <section className="container">
    <div className="card">
      <div className="card-image">
        <img
          src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
          alt="Acadian Flycatcher"
        />
      </div>
      <div className="card-title">
        <h3>Acadian Flycatcher</h3>
      </div>
    </div>
  </section>
);
```

To output a card for each bird, we'll need to map over the array of birds, so put curly braces inside the `section` element and add the map method inside it:

```jsx
return (
  <section className="container">
    {birds.map(bird => {
      return (

      )
    })}
    <div className="card">
      <div className="card-image">
        <img
          src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
          alt="Acadian Flycatcher"
        />
      </div>
      <div className="card-title">
        <h3>Acadian Flycatcher</h3>
      </div>
    </div>
  </section>
);
```

Next, take the entire `div` with the className of card and move it inside the return of the callback function:

```jsx
return (
  <section className="container">
    {birds.map((bird) => {
      return (
        <div className="card">
          <div className="card-image">
            <img
              src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
              alt="Acadian Flycatcher"
            />
          </div>
          <div className="card-title">
            <h3>Acadian Flycatcher</h3>
          </div>
        </div>
      );
    })}
  </section>
);
```

Now you can replace the hard-coded values for the `img`'s `src` and `alt` tags and the name of the bird that appears in the `h3` tag with the actual data. Remember when the map runs, it will iterate over the array. Each time it iterates, it passes a single bird object to the callback function. You can access the current bird object's properties by dotting into it (e.g., `bird.name` or `bird.genus`).

Once you have all of the birds displaying move on to the next step!

### Step 6: Display Birds on the home route

Now that our component is complete we can use React Router to make it display only when we're on the home (`/`) route!

Back in App.js, remove the `Birds` component from the `main` and add a `Route` component. Remember that the `Route` component must be imported from `react-router-dom`.

```js
import { Route } from 'react-router-dom';
```

The `Route` component compares the current url in the browser address bar with its `path` attribute and if it matches it will render the corresponding component that is defined in either its `render` attribute or `component` attribute. Let's use the component attribute:

```jsx
<main>
  <Route path="/"  element={ <Birds />} />
</main>
```

The browser should still display all of the birds. However, if you navigate to a different route, such as http://localhost:3000/details, the component no longer displays!

### Step 7: Create a new component to render a bird detail view

Create another component called `BirdDetails`. **Make sure to add a parameter called props.** Inside the component function add the following JSX as the return statement:

```jsx
return (
  <div className="details-container">
    <img
      src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
      alt="Acadian Flycatcher"
    />
    <div className="details">
      <h2>Acadian Flycatcher</h2>
      <h3>(Empidonax virescens)</h3>
      <h4>Conservation Status</h4>
      <p>
        Would be vulnerable to loss of habitat, but no significant decline noted
        so far. In some regions, Brown-headed Cowbirds often lay eggs in nests
        of this species.
      </p>
      <a
        href="https://www.audubon.org/field-guide/bird/acadian-flycatcher"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  </div>
);
```

Next, import the component into the App.js and add a second route:

```jsx
<main>
  <Route path="/"  element={ <Birds />} />
  <Route path="/details" element={ <BirdDetails /> } />
</main>
```

Now if you navigate to the details route in the browser by going to: http://localhost:3000/details, you should see the BirdDetails component display.

Cool, but what we really want is to have the user navigate to a details page for a specific bird based on which card they click on the home route.

### Step 8. Add a link to the Birds component

Back in the Birds component, let's import the Link component from React Router:

```jsx
import { Link } from 'react-router-dom';
```

When we're using React Router, we use the Link component any time we would normally use an anchor tag in HTML, except if we want to link to a page outside of our site (such as the "read more" anchor in the BirdDetails component).

To make each bird's card clickable, we'll wrap the entire div with the className of card that is inside the map method's return with the Link component. Then, we need to set its `to` attribute. This is like the `href` attribute for an anchor in HTML. Finally, we'll move the `key` prop from the div with the className of card to the Link component because the key prop always has to be on the first element in the return like this:

```jsx
{
  birds.map((bird) => (
    <Link to={`/details/${bird.id}`} key={bird.id}>
      <div className="card">
        <div className="card-image">
          <img src={bird.image} alt={bird.name} />
        </div>
        <div className="card-title">
          <h3>{bird.name}</h3>
        </div>
      </div>
    </Link>
  ));
}
```

We're using some JavaScript string interpolation here to set the value of the `to` property to `/details/${bird.id}`. This means that the url will be different for each bird. This is how we'll make it so that we can render the data for the specific bird that was clicked.

### Step 9. Add a dynamic segment to the Route

The dynamic segment of a route path is called a _"param"_ in React Router. It is a part of the url that is not matched to a specific string. It's just a named variable that will match any value that's in that segment of the url after a forward slash (`/`).

For example, the bird details routes will all start with `/details/` but after the last forward slash there will be a unique id for a specific bird. Since these are all unique and we could have hundreds or thousands of birds, we wouldn't want to have to create a Route component for each one! So we'll update our existing Route component's path to tell it to match any url in the address bar that starts with `/details` and is followed by a forward slash and then anything else.

```jsx
<Route path="/details/:id" element={ <BirdDetails /> } />
```

This will mean that if we try and navigate to http://localhost:3000/details now, it will no long match the route path because there's nothing after "details" in the URL. However, if we navigate to http://localhost:3000/details/a, it now matches the _pattern_ in the `path` attribute of one of the Route components!

Another thing that happens is that we now have the ability to get the value of the dynamic segment using its variable name. In this case, we used the variable name `id` for this param when we defined the route and wrote `:id`. The param variable's name is whatever we put after the colon.

Go to the home route by clicking on the site's title at the top of the page and then click on any of the birds. Notice that the link matches the pattern for the BirdDetails route and displays the static component data that's in BirdDetails right now.

Now, go to the Component tab in the browser and click on the BirdDetails component in the tree. Notice that there are now three new objects in props: `history`, `location`, and `match`! All of these objects are data that is passed to our component by the Route that renders it. Toggle open the `match` object and note that the params object inside it contains an `id` property with the id of the bird that you clicked!

![image](https://media.git.generalassemb.ly/user/17300/files/8a7e9500-12ee-11eb-88de-deb741d25fd1)

### Step 10. Use the params to render the corresponding bird details

Last step! Now we're going to use the id of the bird to make a fetch call for the details about our bird! Inside of the BirdDetails.js import both `useState` and `useEffect`.

Start by creating a variable called `bird` to hold the data that we get back from making an API call. This is going to be a state variable, so we need to follow the pattern that we did earlier (name your variables `bird` and `setBird`). In this case we can initialize the state with `null`.

```jsx
const [variable, setVariable] = useState(null);
```

Now, add in the `useEffect` hook:

```jsx
useEffect(() => {}, []);
```

Next, we need to add the fetch call into the useEffect callback just as we did earlier, except in this case the url is going to be: https://audubon-api.herokuapp.com/api/birds/ + the bird's id and instead of using `setBirds` to put the json data into state, we'll use the `setBird` method here.

How can we get the id of the bird? Dot into it through the props object (or you can be fancy and destructure out `match` in your function's parameters) and concatenate it to the end of the url's string! Use the Component tab to make sure that you're bird object is in state and then update the JSX so that the bird image, name, genus and conservationStatus are being displayed based on the data in state (in the `bird` object).

> ### Why Use Multiple API Calls?
>
> Maybe it seems like it's inefficient to make another call to the API. Most times it's not, and it also provides a better user experience! Using this approach means that users can bookmark a "page" or share a url via social media or email for a specific "page". Because every component is completely self-contained and responsible for getting its own data, everything works perfectly when the bookmarked or shared link is visited!

## Bonus:

Finished everything above and want to stretch your brain? Try adding a static create route.

**Create Page:** Users should be able to navigate to this page from the
homepage. It should have a form for adding a new bird with fields for:

- `name`: the bird's common name
- `genus`: the bird's scientific name
- `conservationStatus`: If there is a conservation status for the bird
- `image`: an image of the bird
- `homepage`: a link to the Audubon Field Guide page.

Make sure you add the functionality so that when the user submits the form, it will "add" the new bird to the "database" and will appear on the home as well as have its own show page. (Please note because there's no real database attached to your app, any newly added bird will disappear upon fully refreshing the page!)


**Create Page Mockup:**

![create page](https://media.git.generalassemb.ly/user/8618/files/25bc5570-cbb6-11e8-9912-eb843afec31c)

**Create Page Route:** `/create`

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.
