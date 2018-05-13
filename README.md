# MLB Game Data

CMSC389L Final Project 
Ronald Davis

## Overview

This application allows users to find out current year up-to-date statistics on their favorite or other MLB teams.
It will gather information on all MLB games daily and update the database.
When the user enters the team it wants to see, the database is queried through an API and Lamdba functions and the resulting data is displayed.

## Services Used

- EC2
- Route 53 hosted [here](www.ronalddavis.tech)
- DynamoDB
- API Gateway
- Lambda

## Youtube Video Demo

[Video Demo](www.youtube.com)

## Architecture Diagram

![Screenshot](cloudcraft.png)

### API Overview

/awaylosses/{teamName}	<br />
/awaywins/{teamName}<br />
/gameslost/{teamName}<br />
/gameswon/{teamName}<br />
/homelosses/{teamName}<br />
/homewins/{teamName}<br />
/winsgreater/{teamName}{runs}<br />
/lossesgreater/{teamName}{runs}<br />
/winslesseq/{teamName}{runs}<br />
/losseslesseq/{teamName}{runs}<br />
	
### How to Run It

1. Create DynamoDB table called 'MLBGames' 
2. All Lamdba function in the lambda function folder
3. Create API Gateway using the API Overview section
4. Deploy API and change URL variable in MainPage.html
5. Run mlb.py to generate data
6. Run MainPage.html to see results.
