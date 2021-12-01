import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IngredientCreate from './ingredient/IngredientCreate';
import IngredientEdit from './ingredient/IngredientEdit';
import IngredientDelete from './ingredient/IngredientDelete';
import IngredientList from './ingredient/IngredientList';
import IngredientShow from './ingredient/IngredientShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<IngredientList />} />
            <Route path="/ingredient/new" exact element={<IngredientCreate />} />
            <Route path="/ingredient/edit" exact element={<IngredientEdit />} />
            <Route path="/ingredient/delete" exact element={<IngredientDelete />} />
            <Route path="/ingredient/show" exact element={<IngredientShow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
