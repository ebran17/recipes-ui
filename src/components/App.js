import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IngredientCreate from './ingredient/IngredientCreate';
import IngredientEdit from './ingredient/IngredientEdit';
import IngredientDelete from './ingredient/IngredientDelete';
import IngredientList from './ingredient/IngredientList';
import IngredientShow from './ingredient/IngredientShow';
import LoginPage from './login/LoginPage';
import Header from './Header';

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const renderApp = () => {
    if(isSignedIn){
      return (
        <div className="ui container">
          <BrowserRouter>
            <div>
              <Header />
              <Routes>
                <Route path="/recipes" exact element={<IngredientList />} />
                <Route path="/" exact element={<IngredientList />} />
                <Route path="/ingredients/new" exact element={<IngredientCreate />} />
                <Route path="/ingredients/edit/:id" exact element={<IngredientEdit />} />
                <Route path="/ingredients/delete" exact element={<IngredientDelete />} />
                <Route path="/ingredients/show" exact element={<IngredientShow />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <LoginPage />
        </div>
      )
    }
  }

  return (
    renderApp()
  );
};

export default App;
