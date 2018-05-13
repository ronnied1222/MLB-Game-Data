const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(e, ctx, callback){
    var params = {
            ProjectionExpression: "#winner",
            FilterExpression: '#winner = :team and #away = :team and #awayRuns > :runs or #winner = :team and #home = :team and #homeRuns > :runs',
            TableName: "MLBGames",
            ExpressionAttributeNames: {
                "#winner" : "Losing Team",
                "#away" : "Away Team",
                "#awayRuns" : "Away Runs",
                "#home" : "Home Team",
                "#homeRuns" : "Home Score"
                
            },
            ExpressionAttributeValues: {
                ':team' : e.teamName,
                ':runs' : Number(e.runs)
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