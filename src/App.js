import React, {Component} from 'react';
import Header from './components/Header';
import Donations from './components/Donations';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){
    return(
      <div>
        <Header />
        <main>
          <Donations />
        </main>
      </div>
    );  
  }
}

export default App;
