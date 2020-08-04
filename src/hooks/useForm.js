import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais); // Isso daqui é um objeto
  /* Como os colchetes estão antes do "=" (na declaração da variável), a gente tá abrindo o que tá vindo
    de depois do "=", ou seja, se depois está vindo um array, a gente está abrindo um array */

  // chave é um valor variável. Ele pode ser: nome, descricao, cor, bla bla bla
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // entre colchetes para virar um valor dinâmico // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // De novo, aqui estamos abrindo o que vem depois do "="
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
    // Do jeito que está, a nossa função recebe o nome e o value dinamicamente
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;