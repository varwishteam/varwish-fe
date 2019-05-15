import React from 'react';
import { Field } from 'redux-form';

const renderSelect = ({
  input,
  label,
  options,
  selectedOption,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div>
      <select
        value={selectedOption}
        className={`form-control ${error && 'is-invalid'}`}
        {...input}
      >
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
 * Render a redux-form FormField with validation errors and warnings
 *
 * @param {Object} obj
 * @param {string} obj.name input name
 * @param {string} obj.type input type
 * @param {string} obj.label label
 * @param {Array} obj.options An array of options, each options must have an id and a name to be displayed,
 *                            each option must be an object with an id and name keys (name will be visible to users)
 * @param {*} obj.selectedOption Option to be selected on component mount, must be an id of one of the options passed in
 *
 * @example <FormField name="note" type="text" label="Item note" />
 */
export default function FormSelect({ name, label, options, selectedOption }) {
  return (
    <Field
      name={name}
      component={renderSelect}
      label={label}
      options={options}
      selectedOption={selectedOption}
    />
  );
}
