### This project is composed by a FrontEnd and a BackEnd project. Steps to run it are:
- Clone the git repostory:
```
git clone https://github.com/alecventura/acm_icpc_scoreboard.git destFolder
```

Inside the destination folder will have 2 folders, one for FrontEnd project and one for BackEnd.

### For BackEnd:
- Install the dependencies: 'npm install'
- Run the server: 'npm run prod' - This will start the server on port 3002
	- The 'npm run dev' will run with nodemon.
- To run the tests use the command 'npm run test'

### For FrontEnd: 
##### (The BackEnd server needs to be running on port 3002 so the FrontEnd can access it).
- A production version will be available inside dist/ folder, just open the index.html inside that folder if you just want to use it.
- But if you want to developer, build or run the tests a 'npm install' command is needed.
	- Then to run the webpack-dev-server use the command: 'npm run dev' -> this will start it on port 3003.
- To run the tests type 'npm run test'