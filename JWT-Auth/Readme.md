# Authentication with JWTs

## Learning Objectives

- Describe JSON web tokens (JWTs)
- Identify parts of JWTs
- Add JWT authentication with Passport to a MERN app

## Intro - What is Authentication and Encryption?

### Authentication

Today, we are going to learn about making our API more secure. Authentication is about making sure the server knows the identity of the person accessing the API and the data that is stored.

Authentication should be used whenever you want to know exactly who is using your API. To know which user is currently logged-in, an API needs to store sensitive data - this data will, therefore, be *encrypted*.

### What is a JSON Web Token?

[Official definition](https://tools.ietf.org/html/rfc7519): compact, URL-safe means of representing claims to be transferred between two parties. 

In other words: A JSON web token is JSON-formatted data sent securely between the server and the browser via HTTP requests. 

### Authentication with JWTs

The problem that JWTs seek to overcome: HTTP is stateless, but we need a way to tell the server that a user is logged in.

When making requests or performing actions that are only for authorized users, there needs to be a way to keep track of whether a user is logged in, since that information isn't stored in HTTP by nature. 

For instance, when we implemented *devise* for user authentication, we used sessions to remind the server of "logged-in status" with every request made to the server. A session is a place to store data on the browser during one request which can be read during later requests. The session is a Ruby/JS object that allows us to keep track of this information. When a new user signs into an application, we create a new session in the server, and a cookie for this session is sent in a response back to the browser. In future HTTP requests from the browser, the client sends a session cookie to the server to retrieve the user from the database to then authenticate the authorized interaction with the database (e.g. saving a post, editing data).

Another approach to keeping track of a user being logged in is to use JWTs with Passport. With JWTs, the user info is embedded in a token. Upon initial log in, the server creates a JSON "token" to store the user info. These tokens are "signed" by the server, and only the server holds the private key to read the token.

#### How It Works

![JWT vs. Sessions Diagram](https://cdn-images-1.medium.com/max/1600/1*d6YcPvq7TeU0DTamj629xw.png)

1. Client browser makes a request sending user login credentials and password (only has to do this once)
2. Server validates the credentials and sends a JSON response to the client that encodes user login data
3. Client stores this JSON web token
4. When the client sends a request to a route that requires authentication, it will send this token to the API to present its authorization for access

#### Advantages of using JWTs:

- JWTs are self-contained
    - You have all the information about the user within the token. After inital request from browser, the server doesn't need to interact with the database to know who the user is. Using JWTs limit database lookups.
- JWTs are compact, and transmission through HTTP actions is fast.
- JWTs work the same for browser clients and native mobile apps.

### What does a JWT look like?

A string with three parts, each separated by dots (`.`):

    - header
    - payload
    - signature

#### Header

**Header** is a JSON object consisting of two parts: the type of token (typ) and the hashing algorithm being used on the token (alg).

> Example...
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

**Payload** is a JSON object containing claims. Claims refer to statements about an entity (e.g. user data). You can put as many claims into the payload as you want, though you want to be cognizant of keeping the JWT compact so as not to impact performance of HTTP actions.

> Example...
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "userId": "5z-9328477bz",
  "admin": true
}
```

There are three different types of claims: public claims, private claims, and registered claims.

Registered claims refer to claims that have predetermined key names - e.g. common fields like issuer ("iss"), subject ("sub"), and expiration time ("exp").

Public claims are claims that we create - e.g. "name", "userId", and "admin" above.

Private claims are used when JWTs are sent between two parties. Only these two parties know what the claims respresent.

#### Signature
**Signature** is encoded header and payload signed with a secret key.

The header is encoded, and the payload is encoded. They are joined together with a `.` in between. This string is then hashed with the server's secret key, using header's hashing algorithm. This produces a new string, which is added onto the `<header>.<payload>` string with another `.` between.

The signature allows the receiver to ensure that the JWT was sent from an authentic source (the holder of the secret key). This encoding does not serve to encrypt the data, but to transform the data.

> Note: [Refresher on difference between encoding, encrypting, and hashing.](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

#### Final Product

Encoded string vs. decoded JSON:

![JWT: encoded string vs. decoded JSON](https://cdn-images-1.medium.com/max/2000/1*LAo6s2tlszZdk2x-uE1lqA.png)

### Encryption

When we talk about passwords, the commonly used word is "encryption", although the way passwords are used, most of the time, it is a technique called "hashing". Hashing and Encryption are pretty similar in terms of the processes executed, but the main difference is that hashing is a one-way encryption, meaning that it's very difficult for someone with access to the raw data to reverse it.  


|     | Hashing |   Symmetric Encryption -|  
|-----|---------|-----------------------|
|     |One-way function | Reversible Operation |
|Invertible Operation? |    No, For modern hashing algorithms it is not easy to reverse the hash value to obtain the original input value | Yes, Symmetric encryption is designed to allow anyone with access to the encryption key to decrypt and obtain the original input value |


#### Bcrypt

Hashing is when a function is called on a variable - in this case a password - in order to produce a constant-sized output; it being a one-way function, there isn't a function to reverse or undo a hash and calling the function again - or reapplying the hash - isn't going to produce the same output again.

From another [stack post](http://stackoverflow.com/questions/1602776/what-is-password-hashing):

_"Hashing a password will take a clear text string and perform an algorithm on it (depending on the hash type) to get a completely different value. This value will be the same every time, so you can store the hashed password in a database and check the user's entered password against the hash."_

This prevents you from storing the clear-text passwords in the database (bad idea, _very bad_).

Bcrypt is recognized as one of the most secure ways of encrypting passwords because of the per-password salt. Even with it being slower than any other algorithms, a lot of companies still prefer to use bcrypt for security reasons.

#### But wait, what's a salt?

A salt is random data that can be added as additional input to a one-way function, in our case a one-way function that  hashes a password or passphrase. We use salts to defend against dictionary attacks, a technique for "cracking" an authentication mechanism by trying to determine the decryption key.

### Using JWTs with Passport in a MERN app

Passport allows you to store the user object in requests instead of in session cookies. Upon the log-in request, the server will create a token and pass it to the browser in the HTTP response. The token is saved to local storage in the browser.

When the user wants to access a route that requires authorization, the client will send a JWT with the request to the server. Since the server has the secret key to decode the JWT, it can (a) verify that the JWT has the right signature to ensure that the JWT originally came from that server, and (b) verify the user and then perform the action that needed authorization.

### Additional Resources on JWTs:
- https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec
- https://jwt.io/introduction/

## We Do: Implementing Authentication with JWT

Let's fork and clone the app. As we're going to be adding authentication on top of it. As we're going to be adding authentication on top of it.

### Convert your Backend Application to return JSON

```
res.json({"message": "User Created Successfully"})
```

### Create New Components for Signin and Signup
- Create new components for Signin and Signup in your react application. 
- Create the skeleton of react class component by rcc command.
```
import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>Signin</div>
    )
  }
}

import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
      <div>Signin</div>
    )
  }
}
```

### Create form for Signup Component
```
  <Form.Label>First Name</Form.Label>
  <Form.Control name="firstName" onChange={this.changeHandler}/>

    <Form.Label>Last Name</Form.Label>
  <Form.Control name="lastName" onChange={this.changeHandler}/>

    <Form.Label>Email Address</Form.Label>
  <Form.Control name="emailAddress" onChange={this.changeHandler}/>

    <Form.Label>Password</Form.Label>
  <Form.Control name="password" type="password" onChange={this.changeHandler}/>

```

### Create form for Signin Component
```
    <Form.Label>Email Address</Form.Label>
  <Form.Control name="emailAddress" onChange={this.changeHandler}/>

    <Form.Label>Password</Form.Label>
  <Form.Control name="password" type="password" onChange={this.changeHandler}/>

```

### Navigation with React Router DOM
```
    <Link to="/">Home</Link> {"  "}
    <Link to="/signup">Signup</Link> {"  "}
    <Link to="/signin">Signin</Link> {"  "}

    <Routes>
    <Route path="/" element={<AuthorList />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/signin" element={<Signin />}></Route>
    </Routes>
```

### Decoding JWT 
- You will be needing jwt-decode library to decode the token.
- You need to install the library first.
```
npm i jwt-decode
```
- Decode token
```
      localStorage.setItem("token", response.data.token);
      let user = jwt_decode(response.data.token);
```


### Sending JWT in Authorization header
```
headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
```


### Additional Resources on using JWTs in MERN apps

- https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
- https://hptechblogs.com/using-json-web-token-react/
- https://blog.jscrambler.com/implementing-jwt-using-passport/
- [FAQs: Authentication with tokens (vs cookies)](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/#token-oauth)
- [Using bcrypt](https://jonathas.com/token-based-authentication-in-nodejs-with-passport-jwt-and-bcrypt/)
