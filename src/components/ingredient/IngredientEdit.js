import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { updateIngredient, fetchIngredient } from '../../actions';
import ingredients from '../../api/ingredients';
import IngredientForm from './IngredientForm';

const IngredientEdit = (props) => {
  const { id } = useParams();
  const { fetchIngredient } = props;
  const navigate = useNavigate();

  useEffect(() => {
    async function getIngredient() {
      const response = await ingredients.get(`ingredients/${id}`);
      fetchIngredient(response.data);
    }

    getIngredient();
  }, [id, fetchIngredient]);

  const onSubmit = async (formValues) => {
    const response = await ingredients.put(`/ingredients/${id}`, { ...formValues });
    props.updateIngredient(response.data);
    navigate("/");
  }
  const ingredientTemp = useSelector((state) => state.ingredients[id]);

  return (
    <div>
      <h3>Actualizar</h3>
      <IngredientForm onSubmit={onSubmit} initialValues={_.pick(ingredientTemp, 'name', 'type', 'amount', 'unit', 'cost', 'provider')} buttonLabel="Cambiar"/>
    </div>
  );
};

export default connect(null, { fetchIngredient, updateIngredient })(IngredientEdit);
