/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const filter_nome = /^([a-zA-Zà-úÀ-Ú0-9]|\s+)+$/;
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, errors, touched, handleBlur,
  } = useForm({
    valoresIniciais,
    validate: function(values) {
      const errors = {};
      const botao_cadastro = document.getElementById("botao_cadastro_video");
      const botao_escondido = document.getElementById("botao_escondido");

      if (filter_nome.test(values.titulo) && categoryTitles.includes(values.categoria)) {
        botao_cadastro.style.display = "inline-block";
        botao_escondido.style.display = "none";
      } 

      if (!filter_nome.test(values.titulo)) {
        errors.titulo = 'Por favor, use apenas letras, acentos e números para o título do vídeo.';
        botao_cadastro.style.display = "none";
        botao_escondido.style.display = "inline-block";
      }

      if (!categoryTitles.includes(values.categoria)) {
        errors.categoria = 'Por favor, insira uma categoria existente.';
        botao_cadastro.style.display = "none";
        botao_escondido.style.display = "inline-block";
      }

      // descricao: 'Please, insert a valid description',

      return errors;
    },
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit=
        {(event) => {
          event.preventDefault();
          // alert('Vídeo cadastrado com sucesso!!');

          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
            // só depois é que a gente faz o redirect
              history.push('/');
            });
        }}
      >
        <FormField
          label="Título do Vídeo: "
          name="titulo"
          value={values.titulo}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.titulo && errors.titulo && <span>{errors.titulo}</span>}


        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onBlur={handleBlur}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        {touched.categoria && errors.categoria && <span>{errors.categoria}</span>}
        <br />

        <Button id="botao_escondido" type="button">
          Cadastrar
        </Button>
        <Button id="botao_cadastro_video" type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
