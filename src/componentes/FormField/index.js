import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57%;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-8px) translateX(-8px);    
  }

  /* Pesquisar sobre tag de template string */
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-8px) translateX(-8px);
    } /* mdn curto circuito --> pesquisar */
  `
}
}
`;

function FormField({
  label, type, name, value, onBlur, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}

        </Label.Text>
        {
          hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
            suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>

            ))
          }
          </datalist>
          )
        }

      </Label>

    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onBlur: () => {},
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired, /* label é obrigatória, então eu coloquei o isRequired */
  type: PropTypes.string, /* Como o tipo não é obrigatório, então a gente vai falar que ele é uma string,
  mas não é obrigatório, de forma que a gente vai ter que tirar o proptype dele, usando defaultProps */
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string), // a gente tá forçando que vai ser um array de string
};

export default FormField;
