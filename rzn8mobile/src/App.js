import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './pages/books'
import Audiobooks from './pages/audiobooks'
import Comicbooks from './pages/comicbooks'
import Merch from './pages/merch'
import Exclusive from './pages/exclusive'
import Contact from './pages/contact'
import Home from './pages/home'
import './assets/css/rzn8mobile.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
     <Switch>
     <Route exact path ='/' component ={Home}/>
            <Route path='/books' component={Books} />
            <Route path='/comicbooks' component={Comicbooks} />
            <Route path='/audiobooks' component={Audiobooks} />
            <Route path='/merch' component={Merch} />
            <Route path='/exclusive' component={Exclusive} />
            <Route path='/contact' component={Contact} />

     </Switch>
     </Router>
    </div>
  );
}

export default App;
