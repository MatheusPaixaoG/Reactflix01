/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button/index';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  /* Aqui, a gente tem 3 coisas que estamos colocando na tela (3 valores que estamos usando):
      O nome que estamos dando para a nossa categoria (nomeDaCategoria);
      setNomeDaCategoria, que é o que a gente vai usar para mudar;
      Esse "Valor Inicial" que tá dentro de useState vai ser o nosso valor inicial, por isso que ele já
      está aparecendo na tela */
  const filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

  const {
    handleChange, values, clearForm, errors, setErrors, touched, handleBlur,
  } = useForm({
    valoresIniciais,
    validate: function(values) {
      const errors = {};

      if (!filter_nome.test(values.nome)) {
        errors.nome = 'Por favor, digite apenas letras e acentos.';
      }

      // descricao: 'Please, insert a valid description',

      return errors;
    },
  });

  /* O useState retorna o nome da categoria e uma função */
  // "set" vai definir o nome da categoria
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://reactflix01.herokuapp.com/categorias';
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

        // validateValues(values)

        clearForm();
      }}
      >

        <FormField
          label="Nome Da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.nome && errors.nome && <span>{errors.nome}</span>}

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {errors.descricao && <span>{errors.descricao}</span>}

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
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
