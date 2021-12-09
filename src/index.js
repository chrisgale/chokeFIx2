import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { DAppProvider, ChainId} from '@usedapp/core';



ReactDOM.render(
  <DAppProvider config={{supportedChains: [ChainId.Mainnet]}}>
    <App />
  </DAppProvider>,
  document.getElementById('root')
);
