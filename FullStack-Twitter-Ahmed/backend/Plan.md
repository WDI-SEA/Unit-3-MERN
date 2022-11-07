# Steps for for setting up the plan

1. index.js -> Set up our server
<br>

2. Install the packeages:
    - express, mongoose ...
    
    <br>

3. Create a folder for Routes/Controllers/Config/Model
    
    <br>

4. Create the following files:
    - Model/Tweet.js
    - Controllers/tweet.js
    - routes/tweet.js
    - config/database.js
    - seeds.js
    - .env

    <br>

5. Code the basic skeleton for the files in this order:
    1. config/database.js -> Connect to DB
    2. models/Tweet.js
    3. seed.js -> insert sample data
    4. routes/tweet.js (and register in the index.js)
    5. controllers/tweet.js -> get All/get Detail

6. Introduce a Users model
    - Associate the User Model with the Tweet Model using referencing.
        - Create a new file -> models/User.js
        - Create a new User schema and model
    Add tweets property to reference the tweet model

    - 1 User has Many Tweets

7. Stories:
    - As a user, I want to create a new tweet
        - Create a User controller file & User Router file

        - POST /users ---> createUser

        - POST /users/tweets ---> createUserTweet

    - As a User, I want to see all the tweets for a particular user
        - GET /users/tweet route ---> getUserTweets


Implement Update and Delete for Users and Tweets