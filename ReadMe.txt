Local Deployment Instructions

Extract the zip file to your preferred location
Install dependencies:
bash
cd abihome
npm install
Run development server (for testing):
bash
npm run dev
This will start the development server at http://localhost:3000
Build for production (optimized build) :
bash
npm run build
Start production server:
bash
npm start
This will start the production server at http://localhost:3000



Heroku Deployment Instructions
Create a Heroku account if you don't have one already
Install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli
Login to Heroku:
bash
heroku login
Create a new Heroku app:
bash
heroku create abihome-website
Add a Procfile to your project root (create a file named Procfile with no extension) :
web: npm start
Update package.json to include the Heroku-specific start script:
json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p $PORT"
}
Initialize Git repository (if not already done):
bash
git init
git add .
git commit -m "Initial commit for Heroku deployment"
Add Heroku remote:
bash
heroku git:remote -a abihome-website
Set build environment:
bash
heroku config:set NODE_ENV=production
Deploy to Heroku:
bash
git push heroku main
Open your deployed application:
bash
heroku open
The optimized website should now be running on Heroku with all the performance improvements we've implemented. The URL will be something like https://abihome-website.herokuapp.com (depending on what name you chose when creating the Heroku app) .