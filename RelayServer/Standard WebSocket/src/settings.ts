/*
Server (RelayServer):
    - IP: The IP of the server, with ws:// infront
    - Port: The port of the server

TA:
    - IP: The IP of the TA server, with ws:// infront
    - Port: The port of the TA server
    - Password: The password of the TA server, leave blank if there is no password

Gamemode: VERSUS / BR
    - VERSUS is the normal 1v1, 2v2 version, which is mostly controlled by the webpanel (Pick's'Ban's, Add user to overlay + show current map, etc.)
    - BR is the Battle Royale version. Current map is controlled by the server directly. Webpanel is used for picking who's being spectated, dead/alive/score 
*/
export default {
    Server: {
        ip: 'ws://localhost',
        port: 2223
    },
    TA: {
        ip: 'dev.tournamentassistant.net',
        port: '8676',
        token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY2MTZCMTZDOEE2NjNBRkU2REI3NjY0OEExQ0UyNTc2NDFFM0IyMDciLCJ4NXQiOiJaaGF4YklwbU92NXR0MlpJb2M0bGRrSGpzZ2MiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOiIxNzI0NDcwMDc1IiwiZXhwIjoiMTcyNDkwMjA3NSIsInRhOmRpc2NvcmRfaWQiOiIyMjk0MDg0NjU3ODc5NDQ5NzAiLCJ0YTpkaXNjb3JkX25hbWUiOiJtYXRyaWttb29uIiwidGE6ZGlzY29yZF9hdmF0YXIiOiJhX2ZkOWExNTFjZTcwNWQzYWE0Nzk3MzE5MDI3ZmFkYmI5IiwiaXNzIjoidGFfc2VydmVyIiwiYXVkIjoidGFfdXNlcnMifQ.flTQOD9OazKMT9IX90h3sPmBOaqp-zbRQVCc4eL1GA_4qPl5jyZRbz6F4eu1dCR5amQIZ-S66bwp0_4Vl2K1-UB4srMVCeN4RklkPh5yv2JgQMgE1zge4FdpIobVk7IHvkY23xwfsetU37UxQ6FXOr0cSTZ2aHwk8DYqu_0RqrZUotO7CjVZbnstx1GYUQmK2dd8AMRi0vO-Rt2GTZI72DKuXyWnQIg1kGOl3uo1DworEZVw98Mm9lJm79LMUMqltdO4OsjAAoDb8A9E3I1D0Sbq6n-_ftl97JuycikjjDv0I4vVBXtSTjMPYT9qIGTj2mi6YXxVxjaYpfdQ4FA2gw',
        tourneyName: 'Moon\'s Test Tourney'
    },
    Gamemode: "VERSUS",
    // Modals: false,
};
