import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIngredients } from '../../actions'

const IngredientList = (props) => {
  const { fetchIngredients } = props;
  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  const renderTable = () => {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Costo</th>
            <th>Provedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderTableRow()}</tbody>
      </table>
    );
  }

  const renderTableRow = () => {
    return props.ingredients.map(ingredient => {
      return (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.type}</td>
          <td>{ingredient.amount}</td>
          <td>{ingredient.unit}</td>
          <td>{ingredient.cost}</td>
          <td>{ingredient.provider}</td>
          <td>{renderAdmin(ingredient)}</td>
        </tr>
      );
    });
  }

  const renderAdmin = (ingredient) => {
    return (
      <div className="floated content">
        <Link to={`/ingredients/edit/${ingredient.id}`} className="ui button primary">EDIT</Link>
        <Link to={`/ingredients/delete/${ingredient.id}`} className="ui button negative">DELETE</Link>
      </div>
    );
  }

  const render = () => {
    if (props.isSignedIn) {
      return (
        <div>
          <div className="ui grid">
            <div className="eight wide column">
              <h2>Ingredientes</h2>
            </div>
            <div className="eight wide column">
              <div style={{ textAlign: "right" }}>
                <Link to="/ingredients/new" className="ui button primary">AGREGAR</Link>
              </div>
            </div>
          </div>
          {renderTable()}
        </div>
      );
    }
  }

  return (
    <div>
      {render()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: Object.values(state.ingredients),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchIngredients })(IngredientList);
