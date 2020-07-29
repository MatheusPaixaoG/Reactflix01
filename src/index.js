import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';

/* O Switch serve como um If, o qual indicaria quando a gente teria o App e quando a gente teria a
página de Cadastro do vídeo, por exemplo. Nesse caso, o If usaria o URL da página */
/* O Route é como a gente vai declarar cada uma das páginas que a gente tem */

const Pagina404 = () => (<div>Página 404</div>)
//const Pagina404 = () => (<iframe src="https://editor.p5js.org/Mat009/embed/v5FsRYDki"></iframe>)

/* O objetivo é fazer um Single Page Application, isto é, uma página que não precisa recarregar. Dessa
forma, ao invés de recarregar a páginas, a gente está pegando esse Cadastro e, quando a gente clicar 
nisso, ao invés de carregar, ele só mostra X componente */
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);