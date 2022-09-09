import logo from './logo.svg';
import wall from './image/golf.jpg'
import './App.css';
import About from './About';
import { NavBar } from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Tournament from './Tournament';

function App() {
  return (

    <div className="App">
       <BrowserRouter>
      <NavBar />
      <Route  path='/tournament' exact component={Tournament}/>
      <Route  path='/about' exact component={About}/>
    
      </BrowserRouter>
      <header className="App-header">
        <img src={wall} className="App-logo" alt="logo" />
        <p className='p1'>
         
Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.
        </p>
       
      </header>
    </div>
  );
}

export default App;
