import React from 'react';
import { Field } from 'redux-form';

const renderSelect = ({
  input,
  label,
  options,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div>
      <select className={`form-control ${error && 'is-invalid'}`} {...input}>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
);

/**
 * @param options An array of options, each options must have an id and a name to be displayed
 */
export default function FormSelect({ name, label, options }) {
  return (
    <Field
      name={name}
      component={renderSelect}
      label={label}
      options={options}
    />
  );
}
