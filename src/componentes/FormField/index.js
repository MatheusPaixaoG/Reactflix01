import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
      </label>

      <br />

      <Input
        as={tag}
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired, /* label é obrigatória, então eu coloquei o isRequired */
  type: PropTypes.string, /* Como o tipo não é obrigatório, então a gente vai falar que ele é uma string,
  mas não é obrigatório, de forma que a gente vai ter que tirar o proptype dele, usando defaultProps */
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};

export default FormField;
