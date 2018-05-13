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

Create DynamoDB table called 'MLBGames' with schema:<br />
	{<br />
    	"Table": {<br />
        	"AttributeDefinitions": [<br />
            	{<br />
                	"AttributeName": "gameID",<br />
                	"AttributeType": "S"<br />
            	}<br />
        	],<br />
        	"TableName": "MLBGames",<br />
        	"KeySchema": [<br />
            	{<br />
               		"AttributeName": "gameID",<br />
                	"KeyType": "HASH"<br />
            	}<br />
        	],<br />
        	"TableStatus": "ACTIVE",<br />
        	"CreationDateTime": 1523836695.374,<br />
        	"ProvisionedThroughput": {<br />
            	"NumberOfDecreasesToday": 0,<br />
            	"ReadCapacityUnits": 10,<br />
            	"WriteCapacityUnits": 10<br />
        	},<br />
    	}<br />

