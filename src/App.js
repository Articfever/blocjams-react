import React, { Component } from 'react';
<<<<<<< HEAD
=======
//import logo from './logo.svg';
>>>>>>> routing
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
<<<<<<< HEAD
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
        </main>
=======
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>

      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
      </main>
>>>>>>> routing
      </div>
    );
  }
}

export default App;
