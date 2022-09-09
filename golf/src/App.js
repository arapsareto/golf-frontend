import logo from './logo.svg';
import wall from './image/golf.jpg'
import './App.css';
import Course from './Course';
import About from './About';
import { NavBar } from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Tournament from './Tournament';

function App() {
  return (

    <div className="App">
       <BrowserRouter>
      <NavBar />
      <Route  path='/about' exact component={About}/>
      <Route  path='/course' exact component={Course}/>
      <Route  path='/tournament' exact component={Tournament}/>
      
    
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={wall} className="App-logo" alt="logo" />
       
       
      </header> */}
    </div>
  );
}

export default App;
