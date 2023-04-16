# Sport Events

#### <a href="https://sportevents-one.vercel.app/">Click to see Live Demo</a>

### `About the Assignment`

`Our app is a platform for sports enthusiasts to find and join sports events near them. With our app, users can browse a list of available events, view details about each event, and join the events they are interested in. The app allows users to create their own events and set a limit on the number of players, as well as view the list of players who have joined the event.`

<br />

### Backend API Reference

| Request            | Route     | Links   |
| :------------------- | :------- | :------------ |
| `POST`           | `To create an account(Role based)` | **https://sport-event-mdcf.onrender.com/user/signup**. |
| `POST`              | `To Login (Role based)`  | **https://sport-event-mdcf.onrender.com/user/login**. |
| `GET`        | `To get all the events` | **https://sport-event-mdcf.onrender.com/event**. |
| `POST` | `To create an event` | **https://sport-event-mdcf.onrender.com/event**. |
| `PUT` | `Player can join an event` | **https://sport-event-mdcf.onrender.com/event/:id**. |
| `GET` | `To search an event by keyword` | **https://sport-event-mdcf.onrender.com/event/search?keyword=${keyword}**. |

<br />

## Run Locally

Clone the project

```bash
  git clone https://github.com/Nitesh-Samaniya/sport-events.git
```

Go to the project directory

```bash
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
