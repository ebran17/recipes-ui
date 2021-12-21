import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createIngredient } from '../../actions';
import ingredients from '../../api/ingredients';
import IngredientForm from './IngredientForm';


const IngredientCreate = (props) => {
  const navigate = useNavigate();

  const onSubmit = async (formValues) => {
    const userId = props.userId;
    const response = await ingredients.post('/ingredients', { ...formValues, userId });
    props.createIngredient(response.data);
    navigate("/");
  }

  return (
    <div>
      <h3>Agregar</h3>
      <IngredientForm onSubmit={onSubmit} buttonLabel="Agregar"/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  };
};

export default connect(mapStateToProps, { createIngredient })(IngredientCreate)
