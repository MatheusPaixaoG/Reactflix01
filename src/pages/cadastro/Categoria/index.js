import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  /* Aqui, a gente tem 3 coisas que estamos colocando na tela ()3 valores que estamos usando):
      O nome que estamos dando para a nossa categoria (nomeDaCategoria);
      setNomeDaCategoria, que é o que a gente vai usar para mudar;
      Esse "Valor Inicial" que tá dentro de useState vai ser o nosso valor inicial, por isso que ele já
      está aparecendo na tela */
  const [values, setValues] = useState(valoresIniciais); // Isso daqui é um objeto
  /* Como os colchetes estão antes do "=" (na declaração da variável), a gente tá abrindo o que tá vindo
  de depois do "=", ou seja, se depois está vindo um array, a gente está abrindo um array */
  /* O useState retorna o nome da categoria e uma função */
  // "set" vai definir o nome da categoria
  const [categorias, setCategorias] = useState([]);

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

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json(); // Dessa forma, eu espero a resposta do servidor
        // (await) e a converto para um arquivo .json
        setCategorias([
          ...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria bacanudassa',
          cor: 'cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Outra categoria bacanudassa',
          cor: 'cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues({ valoresIniciais });
      }}
      >

        <FormField
          label="Nome Da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.nome}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
