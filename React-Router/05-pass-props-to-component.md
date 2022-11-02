## Pass props through React Router


#### App.js

1. Create a `proceduresArray` with an array of the hard coded procedures from `Prodecures.js`
1. Pass props to the Prodecures Component Route: `<Route path='/procedures' component={() => <Procedures procedures={proceduresArray} />} />`

```js
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Procedures from './Procedures';
import Contact from './Contact';

const proceduresArray = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals']

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/procedures">Procedures</Link>{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path='/procedures' component={() => <Procedures procedures={proceduresArray} />} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
```

<br>



#### Procedures.js

1. Pass props to the functional component
1. `.map` over the `props.procedures` array
1. Insert the new array into the return method

```js
import React from 'react';

export default function Procedures(props) {
  const proceduresEls = (
    props.procedures.map((el, index) => {
      return <li key={index}>{el}</li>
    })
  )

  return (
    <div>
      <h1>Procedures</h1>
      <p>Here at Dentist Office we provide a wide variety of procedures. We accept all sorts of insurance and have competitive uninsured payment plans. Find the service you need and visit our contact page to find out how to reach out to us to make the appointment you need!</p>
      <ul>
        {proceduresEls}
      </ul>
    </div>
  )
}
```

## Additional Resources

- [Pass props in React Router](https://learnwithparam.com/blog/how-to-pass-props-in-react-router/)
- [Map over props in stateless component](https://stackoverflow.com/questions/52745604/how-to-use-es6-map-function-in-react-stateless-component)
