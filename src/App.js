import './App.css';
import { Switch ,BrowserRouter,Route} from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Header from './Components/Header/Header.js';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from './utils/firebase';
import { setuser } from "./Redux/actions";
import SingleProduct from './Pages/SingleProduct/SingleProduct';




function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/product/:id">
            <Header />
            <SingleProduct />
          </Route>
          <Route  path='/register'>
            <Register />    
          </Route>
          <Route  path='/login'>
            <Login />    
          </Route>
          <Route  path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
