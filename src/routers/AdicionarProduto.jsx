import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';

export default function AdicionarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const produtoAdicionado = ListaProdutos.find((produto) => produto.id === id);
  
  const [produto, setProduto] = useState({
    id: produtoAdicionado ? produtoAdicionado.id : '',
    desc: '',
    preco: '',
    img: '',
  });

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    const existingProductIndex = ListaProdutos.findIndex((p) => p.id === produto.id);

    if (existingProductIndex !== -1) {
      
      ListaProdutos[existingProductIndex] = produto;
    } else {
      
      ListaProdutos.push(produto);
    }

    
    navigate('/lista-de-produtos'); 
    
    setProduto({
      id: '',
      nome: '',
      desc: '',
      preco: '',
      img: '',
    });
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            name="desc"
            value={produto.desc}
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="text"
            name="img"
            value={produto.img}
            onChange={handleChangeValue}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
