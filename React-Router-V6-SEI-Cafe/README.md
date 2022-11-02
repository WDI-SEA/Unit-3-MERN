<img src="https://i.imgur.com/wo2tk6A.jpg">

# Client-side Routing in React


| Students Will Be Able To: |
|---|
| Use React Router to define client-side `<Route>` components |
| Render "page" components using React Router |
| Use `<Link>` to create hyperlinks that route client-side |
| Access URL Parameters with React Router  |
| Change Routes Programmatically |

## Road Map

- Set Up
- Intro to React Router
- First Route
- Rendering "Page" Components
- The `Switch` Component
- Adding a `Link` to Change Routes
- Defining Routes with URL Parameters
- Routing Programmatically
- Summary
- Essential Questions

## Set Up

To get set up for this lesson:

- `cd` into the `student/sei-cafe` folder for this lesson.
- Open the project in VS Code: `$ code .`
- Open a terminal in VS Code (`ctrl + backtick`)
- Install the Node modules: `$ npm i`
- Start the React Dev Server: `$ npm start`

## Client Side Routing

Client side routing is a 25 dollar word for a 10-cent concept. To see what client-side routing is, check out our <a href="https://sei-cafe.herokuapp.com/">deployed sei-cafe app</a> and sign up/login, and then:

1. Click on "new order". It takes you to another "page". The url bar even changes.
2. Now click on "previous orders". It takes you another "page". Again, the url bar changes.

So, what gives? Isn't our react app entirely contained within a single index.html file?

The answer is yes. This feature is what is meant by "client side routing". We give the user the illusion of there being separate URLs -- even though everything is happening on one html page.

## Intro to React Router

[React Router](https://reacttraining.com/react-router/web/guides/quick-start) is by far the most popular third-party library used to provide client-side routing features for React applications.

Early on in this unit we discussed that client-side routing is one of the core enablers of Single-Page Applications (SPAs)...

Enablers of modern-day SPAs built with React:

- Client-side Routing (React Router)
- AJAX (Fetch API, Axios library, etc.)
- Client-side Rendering (React itself)

There are two versions of React Router:

- Web (`react-router-dom`): This is what we will use with React
- Native (`react-router-native`): This is for use with React Native used to develop mobile apps.

#### Philosophy of Using React Router

First, **React Router is based on Components!**

You know how components render other components in React?

React Router follows this very same approach:

1. First, we will define `<Route>` components that are either rendered or not based upon the current URL in the address bar.

2. Then, we can declare which of our "page" components we want rendered when a particular `<Route>` component gets rendered.

In a typical React app, you define your client side routing hierarchy within the top-level `<App>` component.

## Step 0. Prep: Installing React Router

Since React Router is not part of the React library, it needs to be installed separately:

```
$ npm i react-router-dom@6
```

Not only is it a fairly large Node package, npm might list some vulnerability warnings as well. If so, the output says to run the following command to fix those that can be fixed. The command to fix it that you should run (which i won't run right now in case it breaks something) is:

```
$ npm audit fix
```

If npm audit fix causes an error, you may update the react-scripts package by doing this:
```
$ npm i react-scripts@latest
```

## Step 0.01 Prep: Importing React Router into `<App>`

The top-level component of React Router is the `<BrowserRouter>`.

Since it is a top-level component required for other router-related components to work, a best practice is to wrap `<App>` with `<BrowserRouter>` in the entry module (**index.js**).

`<BrowserRouter>` uses the HTML5 History API (`pushState()`, `replaceState()` and the `popstate` event) to keep the UI in sync with the URL in the address bar.

Before we can use `BrowserRouter`, we need to import it. Let's import it near the top of **index.js**:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the BrowserRouter and assign an alias
import { BrowserRouter as Router } from 'react-router-dom';
```

> Note the use of `as` to declare an _alias_ for `<BrowserRouter>` named `Router`. This allows the use of shorter names for longer named exports such `BrowserRouter`.

Now we can refactor and use `ReactDOM.render` to render `<Router>` which in turn renders `<App>`.

So apply this change as well:

```js
ReactDOM.render(
  <Router>
    <React.Strictmode>
      <App />
    </React.Strictmode>
  </Router>,
  document.getElementById('root')
);
```

SEI Cafe should still be running perfectly with the above refactor.

## Step 1: Defining a Route

With `<BrowserRouter>` now being rendered, we're free to use the `<Route>` component to define client-side routes.

`<Route>` components are commonly used in the `<App>` component to render "page" components.

However, you can use `<Route>` in any component which allows for complex nested routing scenarios.

In order to use the `<Route>` component, we must also wrap it in another component which will help manage all of our client-side routes. 

Open **App.js** and add the `Route`, and `Routes` named imports:

```js
// Add the Route named import
import { Route, Routes } from 'react-router-dom';
```

#### Adding a `<Route>` component

Now let's add a `<Route>` component within the `render` method.

Let's say we want an extra `<Logo>` to show when the URL has a certain path.

Use the `Route` component and the `render` prop that accepts a function to perform "inline" rendering. Change this:

```js
    ...etc...
<nav className="nav">
    <Logo />
    ...etc..
```

to this:

```js
  ...etc...
<nav className="nav">
  <Routes>
    <Route path='/extralogo' element={<Logo {...this.props}>}/>
  </Routes>
  <Logo />
  ...etc...
```
When the page refreshes, everything looks normal.

Now type `localhost:3000/extralogo` in the address bar and the extra logo appears!

The React Router docs say it best:

> You can think about a `<Route>` kind of like an `if` statement; if its `path` matches the current URL, it renders its `element`!

Note that the `{...props}` expression is pretty cool. It uses the spread operator to concisely pass **all**  `props` from the `Route` to `<Logo>`. You can do this anywhere too.


## Step 2: Rendering a "Page" Component

In your full-stack projects so far, you've had a nav bar with links used to access the application's main pages.

A full-stack React app can work the same way where links are used to route to "page"-level components.

Separating "page" components in your app that are then rendered by `<Route>` components is a great way to help organize the large amount of components that exist in a typical React app.

In this lesson, we are going to define a root route that renders the app as it currently exists.

Then, as a practice exercise you will define another route used to display another page.

### Organizing "Page" Components
### Refactor `<App>` and Create the `<NewOrderPage>` and `<OrderHistoryPage>` components

Next, we are going to refactor the project such that `<App>` will remain our top-level component and will:

- Define and render the appropriate `<Route>` components based upon the current path.

To help organize the components in the app, we'll create a dedicated folder that will hold "page" components:

```
$ mkdir src/pages
```

Our finished SEI Cafe app is going to have a few pages:
- **/orders/new**: (this is all our work so far - will be a "page" component called `<NewOrderPage>`)
- **/orders**: (this is a new page we will create to show the order history - ie., a "page" component called `<OrderHistoryPage>`)

The first "page" component we're going to put in there is the `<NewOrderPage>` component.

Let's refactor by creating an **src/pages/NewOrderPage** folder first:

```
$ mkdir src/pages/NewOrderPage
```

Withins this folder, make a file called **NewOrderPage.jsx**.

NewOrderPage.jsx will contain all of the stuff that that page needs, namely:
- all the state related to a new order
- it will render() all the components related to a new order

#### So, if it must contain state, what kind of component will <NewOrderPage> have to be?

Refactor now. Make sure **NewOrderPage.jsx** looks like this:

```js
import React from 'react'
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Logo from '../../components/Logo/Logo';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

class NewOrderPage extends React.Component {

    // initial state of the app when it first loads
    state = {
    name: "",
    email: "",
    currentOrderId: "---",
    isPaid: false,
    orderTotal: 0,
    menuCategories: ["Sandwiches", "Desserts", "Drinks"], // TEMPORARY: normally should be initialized to [] and populated from DB
    activeCategory: "Sandwiches",
    lineItems: [ // TEMPORARY: to test checkout. normally the initial cart is []
        {qty:2, item: {id:"0",name:"Hamburger", price:5.95, emoji:"🍔", category: "Sandwiches"}},
        {qty:2, item: {id:"1",name:"Ice Cream", price:1.95, emoji:"🍨",category: "Desserts"}},
    ],
    menuItems: [ // TEMPORARY: normally should be initialized to [] and populated from DB
        {id:"0",name:"Hamburger", price:5.95, emoji:"🍔", category: "Sandwiches"},
        {id:"1",name:"Ice Cream", price:1.95, emoji:"🍨",category: "Desserts"},
    ],
    }

    render() {
        return(
            <>
                <nav className="nav">
                    <Logo />
                    <CategoryList menuCategories={this.state.menuCategories} />
                    <UserLogOut name={this.state.name} email={this.state.email}/>
                </nav>
                <MenuList menuItems={this.state.menuItems} />
                <OrderDetail currentOrderId={this.state.currentOrderId} />
            </>
        );
    }
}

export default NewOrderPage;
```

As mentioned above, **App.js** will be our top-level component and will:

- Define and render the appropriate `<Route>` components based upon the current path.

So refactor **App.js** to look like this:

```js
import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Routes } from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewOrderPage />
      </div>
    );
  }
}

export default App;
```

> IMPORTANT: It makes sense to name our "page" components by suffixing them with `Page`.


The app should be back up and running now:

<img src="https://user-images.githubusercontent.com/24878576/114872810-a90aa800-9dc8-11eb-9bb9-129a02a133fa.png">

## Step 2 again: Making a second page: <OrderHistoryPage>

To complete our demo, we want to render an `<OrderHistoryPage>` component responsible for rendering the history of all our orders.


Time to stub up `<OrderHistoryPage>`:

```
$ mkdir src/pages/OrderHistoryPage
```

Now create **src/pages/OrderHistoryPage/OrderHistoryPage.jsx**:

```
touch src/pages/OrderHistoryPage/OrderHistoryPage.jsx
```

And let's just make OrderHistoryPage a basic functional component for now.

In **OrderHistoryPage.jsx** do this:
```js
export default function OrderHistoryPage(props) {
    return (
        <div>
            OrderHistoryPage
        </div>
    )
}
```

And import the file into **App.js**.
```js
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
```

And make it show up in **App.js**:
```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewOrderPage />
        {/** add this in without a route for now */}
        <OrderHistoryPage />
        ...etc...
```

Finally, we can give each component its own route:

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />}/>
          <Route path='/orders' element={<OrderHistoryPage />}/>
        </Routes>
      </div>
    );
  }
}
```

Hooray! We have now tied each page to a different client side route. But what if our user doesn't navigate to any of these routes? What if they type in a different URL in their address bar? We need a way to catch any other client-side routes, and make sure we're sending the user back somewhere. We can accomplish this using the `Navigate` Component. This will allow us to redirect the user to the route and matching Components/Page that we want them to see.


First, we'll need to import it:

```js
...
// change:
import { Route, Routes } from 'react-router-dom';
// to:
import { Route, Routes, Navigate } from 'react-router-dom';
...
```
and then down inside of our `<Routes>` Component (usually at the end of all of our defined `<Route>`s):
```js
<Route path="*" element={<Navigate to="/orders" replace />}/>
```

This one route, will act as a catch-all, and regardless of what the user has put into the address bar, if it doesn't match any of our other routes, we will just navigate them to `/orders`, and render our `<OrderHistoryComponent />` (The `replace` is to make our History Stack nice and clean, more on that in a bit)



## The Power of `<Routes />`

In a typical backend routing scenario, what happens when we have multiple identical routes?

```js
  <Route path="/orders" element={<OrderHistoryPage />} />
  <Route path="/orders" element={<Logo />} />
```

In React Router, instead of finding the first matching route, our Router will look for the best matching route. This includes checking any constraints we set up (such as `caseSensitive`). This usually ends up being whichever route is defined first. 

We can also 'nest' routes. This allows for better organization of our routes, in a slightly more intuitive way:

```js
  <Route path="tasks" element={<TasksDashboard />} >
    <Route path="completed" element={<CompletedTasks />} >
  </Route>
  <Route path="profile" element={<Profile />} />
```

In this example, we have a component `<TasksDashboard />` being rendered at the route "/tasks". If we were to browse to "/tasks/completed", we would be rendering the `<CompletedTasks />` component/page. 


## Adding a `Link` to Change Routes

React Router comes with a [`<Link>`](https://reactrouter.com/docs/en/v6/components/link) component that we must use instead of regular `<a>` tags to allow the user to navigate to different routes by clicking.

Using a regular `<a>` tag will result in a full-page refresh.

> There's also a [`<NavLink>`](https://reactrouter.com/docs/en/v6/components/nav-link) that makes it easy to add/remove styling based upon if the link's URL matches the current URL.

Since the lab is about implementing a few Page features, let's add a `<Link>` to **OrderHistoryPAge.jsx** and **NewOrderPage.jsx** that you can use to move between routes.

First let's import it into both **OrderHistoryPage.jsx** and **NewOrderPage.jsx**:

```js
import { Link } from 'react-router-dom';
```

Now let's add the `<Link>` from the `<OrderHistoryPage>` to `<NewOrderPage>`.

Change **OrderHistoryPage.jsx** to look like this:

```js
import { Link } from 'react-router-dom';

export default function OrderHistoryPage(props) {
    return (
        <div>
            OrderHistoryPage<br />
            <Link to='/orders/new'>New Order</Link>
        </div>
    )
}
```

The `to` prop specifies what URL path to route to if the link is clicked.

Try it out!

To link in the other direction, let's add this line to the nav in **NewOrderPage.jsx**:

```js
<nav className="nav">
  <Logo />
  <CategoryList menuCategories={this.state.menuCategories} />
  {/* Add this line!! */}
  <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
  <UserLogOut name={this.state.name} email={this.state.email}/>
```


## Bonus content: Routing Programmatically (redirects)

**Routing programmatically** is when you change routes in code vs. when a user clicks a link.

For example, let's say a user just added a movie by clicking a button and you submitted the data via AJAX. Now what?

In a traditional web app, the server would have responded with a redirect to the index or details page.

That's not going to happen in a SPA. Instead, you've got to change the route programmatically (using code) which is done using by effecting the History Stack. The History stack is something that exists in the browser moreso than inside of React Router. If you click and hold on your 'back' button in your browser, you'll be able to see the history stack!

React Router gives us access through that, through a `useNavigate` hook (we'll learn more about hooks later this week). This is a very quick and painless process. 

We do need to make some concessions here, since we are using a Hook. Hooks are only available to us in functional components, so if we want to use them in our app, we need to make sure that either:
1. The component we are trying to use to re-route programmatically is defined as a function or
2. We wrap our class-based function in another functional component, call in our props, and then render our component. This could look something like this:
  ```js
  import { useNavigate } from 'react-router-dom';

  function WrappedComponent(props) {
    const navigate = useNavigate()
    return <Component navigate={navigate}/>
  }
  ```
Regardless of how we gain access to our `useNavigate` hook, it will serve us the same purpose. `useNavigate` returns a function that will allow us to send our user to a new page.

## 💪 Practice Exercise - Add a Route and a Link (15 min)

1. Create a `<LoginPage>` component as a Function Component and be sure to follow the conventions for folders, etc.

2. Code `<LoginPage>` so that it returns `<h1>Login Page</h1>` as its UI.

3. Add a new `<Route>` below the existing `<Route>` for the `<OrderHistory>` component (but stay inside of the `</Routes>`).

4. The new route should have a path of `/login` and should render the `<LoginPage>` component.

5. Browsing to `localhost:3000/login` should result in the loginpage displaying.

6. Create a link from the `<LoginPage>` component to both `<OrderHistoryPage>` and `<NewOrderPage>`


## More Bonus content: Time-permitting: Defining Routes with URL Parameters

Surely you remember routes we defined in Express and Django that included URL parameters similar to these...

In Express:

```js
router.get('/movies/:id', moviesCtrl.show);
```

and Django:

```python
path('movies/<int:id>/', views.movies_detail, name='movies_detail'),
```

We typically used such routes to view the show/details page for a single row/document in the database.

When you have similar functionality in a React app, we can define routes with named URL parameters like this:

```js
<Route path="/movies/:id" element={<Movie {...props}/>} />
```

As you can see, it uses the same `/:param` syntax that we used in Express.

#### Accessing the Values Corresponding to the URL's Parameters

Just like the rest of React Router v6, everything is handled with Hooks. So if we wanted to gain access to our params inside of a function-defined component, we would just need to import and call on the `useParams` hook. The `useParams` Hook will return to us and object with a key:value pair for each URL parameter.

For example, assuming the following route (same as defined above):

```js
<Route path="/movies/:id" element={<Movie {...props}/>} />
```

Browsing to `localhost:3000/movies/123`, would result in the following `<Movie>` component:

```js
import { useParams } from 'react-router-dom';
function Movie(props) {
  const params = useParams()
  return(
    <h1>Movie id is: {params.id}</h1>
  )
}
```

Rendering this output:

<h1>Movie id is: 123</h1>



## Summary

Using React Router to perform client-side routing is straightforward.

It's enormously flexible with the ability to declare routing for even the most complex of scenarios.

We'll see more of React Routers capabilities in the authentication lesson later in the week.

## ❓ Essential Questions

Take a moment to review the following questions:

1. **True or False: The `<Route>` component is _rendered_ when its `path` matches that of the URL's.**

2. **What's wrong with the following component?**

	```js
	const Movie = props => (
	  <div>
	    <a href="/movies">View All Movies</a>
	    <h1>{props.title}</h1>
	  </div>
	);
	```
	

## References

- [React Router - Web](https://reacttraining.com/react-router/web/guides/quick-start)







