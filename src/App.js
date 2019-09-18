import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Tasks from './components/Tasks';
// import NewListForm from './components/ListForm';
// import ListHeader from './components/ListHeader';
import Dashboard from './components/dashboard/Dashboard';
import ListDetails from './components/lists/ListDetails';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import NewList from './components/lists/NewList'
// import ThemeContextProvider from './contexts/ThemeContext';
// import ListContextProvider from './contexts/ListContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <ThemeContextProvider>
            <ListContextProvider> */}
              <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/list/:id' component={ListDetails} />
                <Route path='/log-in' component={LogIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/new-list' component={NewList} />
              </Switch>
                {/* <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="collection with-header">
                        <ListHeader />
                        <Tasks />
                        <NewListForm />
                      </ul>
                    </div>
                  </div>
                </div> */}
              {/* </ListContextProvider>
            </ThemeContextProvider> */}
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
