1. index.js -> setup our server
2. Install packages:
    - express
    - mongoose
    - ...
3. Create a folder for the routes/controllers/config/model
4. Create the following files:
    - Model/Tweet.js
    - Controllers/tweets.js
    - routes/tweets.js
    - config/database.js
    - seeds.js
    - .env
5. Code the basic skeleton for the files in this order:
    - Config/database.js -> Connect to our DB
    - Models/tweet.js
    - seeds.js -> insert sample data
    - routes/tweets/js (& register  routes in index.js)
    - Controllers/tweets.js -> get All/get Detail
6. introduce a Users model
    - Associate the Users model with the Tweet model using referencing
        - create a new file -> models/User.js
        - create a new User schema and model
        - add tweets property to reference the Tweet model
    - 1 user has many tweets
7. Stories:
    - As a user I want to create a new tweet
        - create a users controller file & users router file
        - POST / users -> createUser
        - GET /users/tweets route -> getUserTweets
    - As a user I want to see all the tweets written for a particular user
        - GET /users/tweets route -> getUserTweets
8. Implement update & delete for users & tweets
