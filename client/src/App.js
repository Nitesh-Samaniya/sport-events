import { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

export const CreateEventContext = createContext();

function App() {
const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(true);

  return (
    <div className="App">
      <CreateEventContext.Provider value={{isOrganizerLoggedIn, setIsOrganizerLoggedIn}}>
        <Navbar/>
      </CreateEventContext.Provider>
    </div>
  );
}

export default App;
