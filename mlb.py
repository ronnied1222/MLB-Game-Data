from __future__ import print_function
import mlbgame
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MLBGames')


month = mlbgame.games(2018, 4)
games = mlbgame.combine_games(month)

for game in games:
    if(game.game_status == "FINAL" and hasattr(game, 'w_team')):
        table.put_item(
            Item={
                'gameID': game.game_id,
                "Home Team": game.home_team,
                "Away Team": game.away_team,
                "Winning Team": game.w_team,
                "Losing Team": game.l_team,
                "Home Score": game.home_team_runs,
                "Home Hits": game.home_team_hits,
                "Away Runs": game.away_team_runs,
                "Away Hits": game.away_team_hits,
                "Winning Pitcher" : game.w_pitcher,
                "Losing Pitcher" : game.l_pitcher,
                "Saving Pitcher" : game.sv_pitcher,

            }
        )

