import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './Header'
import MainSidebar from './MainSidebar'
import NoteList from './NoteList'
import ListData from './dummy-store';

function App() {
  return (
    <div className="App">
      <nav>
          <Header />
      </nav>
     <main>
       <Switch>
          <Route excat path='/' render={() => (
          <MainSidebar folders={ListData.folders} 
          />
          )} />
          <Route path='/' component={NoteList} />
       </Switch>
     </main>
    </div>
  );
}

export default App;
