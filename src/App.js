import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListContextProvider from './contexts/ListContext';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import NewListForm from './components/ListForm';
import ListHeader from './components/ListHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ListContextProvider>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="collection with-header">
                  <ListHeader />
                  <Tasks />
                  <NewListForm />
                </ul>
              </div>
            </div>
          </div>
        </ListContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
