import React from 'react';
import { Field, reduxForm } from 'redux-form'

class IngredientCreate extends React.Component {
  renderInput = (formProps) => {//can be destructured to: { input }
    const divClassError = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return (
      <div className={divClassError}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>  
      </div>
    );
  }

  renderError = ({error, touched}) => {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="name" component={this.renderInput} label="Nombre"/>
        <Field name="type" component={this.renderInput} label="Tipo"/>
        <Field name="amount" component={this.renderInput} label="Cantidad"/>
        <Field name="unit" component={this.renderInput} label="Unidad"/>
        <Field name="cost" component={this.renderInput} label="Costo"/>
        <Field name="provider" component={this.renderInput} label="Proveedor"/>      
        <button className="ui button primary" type="submit">Agregar</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const error = {};
  if(!formValues.name){
    error.name = "Nombre es requerido";
  } 
  if(!formValues.type){
    error.type = "Tipo es requerido";
  }
  if(!formValues.amount){
    error.amount = "Cantidad es requerido";
  }
  if(!formValues.unit){
    error.unit = "Unidad es requerido";
  }
  if(!formValues.cost){
    error.cost = "Costo es requerido";
  }
  if(!formValues.provider){
    error.provider = "Proveedor es requerido";
  }

  return error;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(IngredientCreate);
