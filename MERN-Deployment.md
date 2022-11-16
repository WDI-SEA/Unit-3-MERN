# MERN Deployment to Heroku

### GOAL

To Deploy a MERN stack application to Heroku.

#### Setup

1. Structure the app with a main project folder holding two subdirectories: backend and frontend.
    - The backend is the express app, constructed either by hand or by express-generator.
    - The frontend is the react app, constructed by create-react-app.
2. Connect your application to a cloud database, such as Atlas.
3. Make sure your app is in a working state.

#### Steps

1. Setup two terminals. One terminal should be in the frontend and the other should be in the backend. These two terminals will now be referred to as "frontend terminal" and "backend terminal".

2. Inside your frontend ```package.json``` file, add the following "scripts" command under the "build" line: ```"postbuild": "mv build ../backend/",```

3. Inside your frontend terminal, run the command ```npm run build```. You should see a "build" folder created in your backend directory. 
    - The command built an ```index.html``` that will be used in deployment, then the "postbuild" command was triggered and sent the folder into your backend, ready to be pushed to heroku. This index.html contains all of the magic of React.js that you've built inside the frontend.

4. In your ```server.js```, add the following catch-all route-handler under your mounted api routes.

```js
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

5. In your ```server.js```, add the following lines in your middleware. Replace the old static line with public to the one with build. 

```js
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
```

6.  Run your backend inside the backend terminal using ```nodemon server``` to make sure your app is up and running on your backend port. 
    - For example, if my backend is listening to port 4000, then navigating to ```http://localhost:4000``` should have my app in all its glory. 
    - We're only going to deploy this backend build to Heroku.

7. Cancel the backend server using ```Ctrl-C```. While still in the backend terminal, create a Procfile inside the backend's root by running the command ```touch Procfile```. Add the following line inside the Procfile and save: ```web: node server.js```.
    - The command will ensure the container/dyno on Heroku runs our app from a specfic entry point (server.js).

8. In the backend terminal, login to Heroku: ```heroku login```.

9. In the backend terminal, create a new heroku project: ```heroku create <projectName>```. 

10. Go into the Heroku dashboard and add all of your config variables from your ```.env``` file.

11. Make sure you have access to your heroku remote ```git remote -v```. You should see a remote called ```heroku```. Now follow the normal git flow, by commiting your work and pushing it up to the heroku remote.

## Congrats! You should now have your app completely deployed and ready to go!

