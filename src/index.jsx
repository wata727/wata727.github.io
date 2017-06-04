import React from 'react';
import { render } from 'react-dom';

const Root = (
  <div>
    <p><a href="slides/jawsug-container_8">JAWS-UG コンテナ支部#8</a></p>
    <p><a href="slides/go-beginners-lt_2">Go言語LT大会</a></p>
  </div>
);

render(Root, document.querySelector('#root'));
