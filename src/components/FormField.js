import React from 'react';
import { Field } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input
        className={`form-control ${error && 'is-invalid'}`}
        {...input}
        // placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
);

export default function FormField(props) {
  const { name, type, label } = props;
  return (
    <Field name={name} component={renderField} type={type} label={label} />
  );
}
