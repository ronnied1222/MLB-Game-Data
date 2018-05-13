
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(e, ctx, callback){
    var params = {
            ProjectionExpression: "#winner",
            FilterExpression: '#winner = :team and #away = :team',
            TableName: "MLBGames",
            ExpressionAttributeNames: {
                "#winner" : "Losing Team",
                "#away": "Away Team"
            },
            ExpressionAttributeValues: {
                ':team' : e.teamName
            }
        };
    console.log(e);
   // callback(null, e.gameID);
    
    docClient.scan(params, function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(null, data["Count"]);
        }
    });
}