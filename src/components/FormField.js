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

/**
 * Render a redux-form FormField with validation errors and warnings
 *
 * @param {Object} obj
 * @param {string} obj.name input name
 * @param {string} obj.type input type
 * @param {string} obj.label label
 *
 * @example <FormField name="note" type="text" label="Item note" />
 */
export default function FormField({ name, type, label }) {
  return (
    <Field name={name} component={renderField} type={type} label={label} />
  );
}
