# Wildfire Survivor Management System

This is the development repository for two apps (Survivor Application and Survivor Dashboard) which together create the Wildfire Survivor Management System (WSMS).

## Project Roadmap

- [x] Initial Kickoff + Gather Requirements
- [x] Initial Mockups (<a href="https://sketch.cloud/s/8Az7w">Sketch files</a>)
- [ ] Initial Functional Survivor Application
- [ ] Initial Functional Survivor Dashboard
- [ ] Initial Production Release for Survivor Application
- [ ] Initial Production Release for Survivor Dashboard

## Project Overview

The project is split into two apps: a Survivor Application (in this case application == "form") and a Survivor Dashboard. Each user has one Application and the Dashboard shows all users' Application data along with some internal admin-related data (financial assistance details, application status, etc.)

<img src="./public/images/WSMS.svg" />

## Survivor Application

### Core Functionality

- Allows users (wildfire survivors) to :
  - Create an account (Email link sign-in is preferred method)
  - Fill out, preview and submit an application
  - Modify their application data
  - View the status of their application
  
## Survivor Dashboard

### Core Functionality:

- Allows users (staff members) to:
  - View and update demographic information
  - View and update application status
  - View and update financial assistance data
 <hr>
 
## Installation

1. Download the repo
2. Navigate to the `CallForCode` directory
3. `npm install` inside the `CallForCode` directory
4. `npm start` will start the development server on `localhost:3000`
5. `npm run cypress:open` will run the cypress integration tests

## Contributions

Thank you for choosing to contribute to this project!

0. Join our Slack channel (invite link if it works).

1. We hold bi-weekly phone calls with 2-3 client contacts. Meeting minutes will be located in <a href="https://drive.google.com/drive/folders/10XQV-3Z71ZYGFno3BFoPAunxVdZGDOM5?usp=sharing">this folder</a>.

2. Please review the <a href="./docs">project documentation</a>. This will help you understand the motivation behind the existing code and areas of improvement (there are many).

3. Please first look through the (Projects link). If a task is listed as OPEN in either the TO DO or IN PROGRESS columns, please add your name the card and start working on it! Once you're ready for a code review, open a PR by following our (link to PR template).

4. We highly recommend that you read through the latest Meeting Minutes and attend the next call to stay up to speed with the latest and greatest.

5. Please add to the documentation! Please don't hesitate to create or add to the documentation of this project by opening a PR by following our (link to PR template). Correcting even the smallest typo helps. 

6. Reach out in Slack (link) if you're not sure how to contribute, want to collaborate, or have any questions on something you are working on.
