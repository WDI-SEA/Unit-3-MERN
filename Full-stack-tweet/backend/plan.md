1. index.js -> set up our server

2. install packages:
    - express,mongoose ..

3. Create a folder for the Routes/Controllers/Config/Model

4. Create the following files:
    - models/Tweet.js
    - controllers/tweets.js
    - routes/tweets.js
    - config/database.js
    - seeds.js
    - .env

5. Code the basic skeleton for the files in this order:
    1. config/database.js -> Connect to DB
    2. models/Tweet.js
    3. seeds.js-> insert sample data
    4. routes/tweets.js (and register route in index.js)
    5. controllers/tweet.js -> get All/get Detail

6. Introduce a User model
    - Associate the User model with the Tweet model using referencing
        - Create a new file -> models/User.js
        - Create a new User schema and model
        - Add tweets property to reference the Tweet model
    - 1 User has Many Tweets.

   Stories:
    - As a User, I want to create a new tweet
        - Create a User Controller file & User Router file

        - POST /users ---> createUser 

        - POST /users/tweets ---> createUserTweet
    - As a User, I want to see all the tweets for a particular user
        - GET /users/tweets route ---> getUserTweets
    

    --Implement Update and Delete functionality for both the Users and Tweets Models