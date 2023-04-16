import { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import axios from 'axios'

export const CreateEventContext = createContext();
export const GetEventContext = createContext();

function App() {
const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(false);
const [eventList, setEventList] = useState([]);

const getEventList = async()=>{
  await axios.get("https://sport-event-mdcf.onrender.com/event")
    .then((res)=>{
      console.log("check")
      setEventList(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
}

  return (
    <div className="App">
      <GetEventContext.Provider value={{eventList, getEventList}}>
        <CreateEventContext.Provider value={{isOrganizerLoggedIn, setIsOrganizerLoggedIn}}>
          <Navbar/>
        </CreateEventContext.Provider>
        <Home />
      </GetEventContext.Provider>
    </div>
  );
}

export default App;
