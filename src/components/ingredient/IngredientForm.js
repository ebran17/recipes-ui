import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const IngredientForm = (props) => {

  const onSubmit = async (formValues) => {
    props.onSubmit(formValues);
  }

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="name" component={renderInput} label="Nombre" />
      <Field name="type" component={renderInput} label="Tipo" />
      <Field name="amount" component={renderInput} label="Cantidad" />
      <Field name="unit" component={renderInput} label="Unidad" />
      <Field name="cost" component={renderInput} label="Costo" />
      <Field name="provider" component={renderInput} label="Proveedor" />
      <button className="ui button primary" type="submit">{props.buttonLabel}</button>
    </form>
  );
};

const renderInput = (formProps) => {//can be destructured to: { input }
  const divClassError = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
  return (
    <div className={divClassError}>
      <label>{formProps.label}</label>
      <input {...formProps.input} autoComplete="off" />
    </div>
  );
};

const validate = (formValues) => {
  const error = {};
  if (!formValues.name) {
    error.name = "Nombre es requerido";
  }
  if (!formValues.type) {
    error.type = "Tipo es requerido";
  }
  if (!formValues.amount) {
    error.amount = "Cantidad es requerido";
  }
  if (!formValues.unit) {
    error.unit = "Unidad es requerido";
  }
  if (!formValues.cost) {
    error.cost = "Costo es requerido";
  }
  if (!formValues.provider) {
    error.provider = "Proveedor es requerido";
  }

  return error;
}

const formWrapped = reduxForm({
  form: 'streamForm',
  validate
})(IngredientForm);

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  };
};

export default connect(mapStateToProps, null)(formWrapped)
