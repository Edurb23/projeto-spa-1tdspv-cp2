import { ListaProdutos } from "../components/ListaProdutos";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {

    document.title = "Lista de Produtos";









    const [exemplo, setExemplo] = useState([{}]);


    const [count, setCont] = useState(0);

    useEffect(()=>{
      console.log("Use-Effect que será sempre renderizado!");

    });


    useEffect(()=>{
      console.log("Use-Effect que será renderizado apenas uma (1)  vez");

      setExemplo(ListaProdutos);

    },[]);

    
    useEffect(()=>{
      
      console.log("Use-Effect que será renderizado o obj ou componente ou elemento");
  
    },[count]);
  
   


    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>
        <div>
          <button onClick={()=> setCont(count + 1)}>count- {count}</button>
        </div>

        <div>
          <table className={classes.tableStyle}>
            <thead>
              <tr className={classes.tableHeaderStyle}>
                <th className={classes.tableHeaderStyle}>ID</th>
                <th className={classes.tableHeaderStyle}>Nome</th>
                <th className={classes.tableHeaderStyle}>Descrição</th>
                <th className={classes.tableHeaderStyle}>Preço</th>
                <th className={classes.tableHeaderStyle}>imagem</th>
                <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {exemplo.map((produto, index) => (
                <tr key={index} className={classes.tableLineStyle}>
                  <td className={classes.tableDataStyle}>{produto.id}</td>
                  <td className={classes.tableDataStyle}>{produto.nome}</td>
                  <td className={classes.tableDataStyle}>{produto.desc}</td>
                  <td className={classes.tableDataStyle}>{produto.preco}</td>
                  <td className={classes.tableDataStyle}><img src={produto.img} alt={produto.desc} /></td>
                  <td className={classes.tableDataStyle}><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))} 
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className={classes.tableDataStyle}>Total de Produtos: {ListaProdutos.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }
  