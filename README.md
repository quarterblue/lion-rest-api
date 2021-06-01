<h1 align="center">
  <br>
  <img width=40% src="https://github.com/quarterblue/lion-rest-api/blob/main/images/epl_logo.jpg" alt="timeline">
  <br>
  Lion REST API
</h1>

<h4 align="center">English Premier League Unofficial RESTful API.</h4>

## Resource Routes
### Clubs

Method | Endpoints | Auth | Description
--- | --- | --- | ---
`GET` | /api/v1/clubs | No | Retrieve all 20 clubs in current season of English Premier League (EPL).
`GET` | /api/v1/clubs/:id | No | Retrieve single club in the current season of EPL by id.
`GET` | /api/v1/clubs/:id/stats | No | Retrieve statistics of the current season of the current [id] EPL club.
`GET` | /api/v1/clubs/:id/stats/:year | No | Retrieve statistics of the [year] season of the current [id] EPL club.
`GET` | /api/v1/clubs/:id/results | No | Retrieve match results of the current season of the current [id] EPL club.
`GET` | /api/v1/clubs/:id/results/:year | No | Retrieve match results of the [year] season of the current [id] EPL club.
`GET` | /api/v1/clubs/:id/players | No | Retrieve all players registered for the [id] club in the current season.
`GET` | /api/v1/clubs/:id/players/:playerId | No | Retrieve single player identified by [playerId] playing for the [id] club.

### Players

Method | Endpoints | Auth | Description
--- | --- | --- | ---
`GET` | /api/v1/players | No | Retrieve all players playing in the EPL in the current season.
`GET` | /api/v1/players/:playerId | No | Retrieve single player playing in the EPL in the current season identified by [playerId].
`GET` | /api/v1/players/:playerId/stats | No | Retrieve statistics of single player playing in the EPL in the current season identified by [playerId].

### Tables

Method | Endpoints | Auth | Description
--- | --- | --- | ---
`GET` | /api/v1/tables | No | Retrieve up to date competition table of the current season.
`GET` | /api/v1/tables/:yearId | No | Retrieve up to date competition table of the [yearId] season.


## Getting Started

## Development

First of all, [download](https://nodejs.org/en/) and install **Node.js**. Version `14.7.0 LTS` or higher is recommended.

**Clone directory:**
```bash
$ git clone git@github.com:quarterblue/lion-rest-api.git
```

**Frontend:**
```bash
# Change directory:
$ cd lion-rest-api/frontend/

# Installation:
$ npm install

# Start client server:
$ npm start
```

**Backend:**
```bash
# Change directory:
$ cd lion-rest-api/backend/

# Installation:
$ yarn install

# Start backend server:
$ yarn start
```

Then navigate to **[http://localhost:9001/](http://localhost:9001/)** on your browser.

## File Structure

```
lion-rest-api
├───.github
│   ├───ISSUE_TEMPLATE
│   └───workflows
├───backend
│   ├───config
│   ├───controllers
│   ├───helpers
│   ├───models
│   └───routes
└───frontend
```


## Documentation

## License
