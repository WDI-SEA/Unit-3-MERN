Project/Group Setup: <br>

Team Lead will create a repository<br>
Every member will Fork and Clone the repository

Step 1:
Ensure you are in the correct folder<br>

Set up upstream:<br>
(ONLY ONCE) 

```
    git remote add upstream <url of upstream>
```

Step 2: 

(EVERYDAY) Make sure you are up to date. <br> 
Command: 
```
    git pull upstream main
```
    
Fix any merge conflicts

Step 3: 
Create a new branch<br>

Command: 
```
    git checkout -b <your branch name>
```
Step 4: 
Work on the feature
Make changes
Code

Step 5: 
Once you are done, push your changes

```
    git add .
    git commit -m "your message"
    git push origin <your branch name>
```

CREATE A PULL REQUEST ONLINE 

Step 6: 
Delete your branch from your terminal

```
    git checkout main
    git branch -D ```<your branch name>```
```
Step 7: 

(Repeat steps 2-7 for every feature)








