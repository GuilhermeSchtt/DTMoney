import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento DTmoney',
          amount: 11250,
          type: 'deposit',
          category: 'Licenciamento de Software',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Fast Food Park',
          amount: 250,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Monitoramento Infraestrutura ',
          amount: 1000,
          type: 'deposit',
          category: 'Monitoramento de Infra/Software',
          createdAt: new Date(),
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
