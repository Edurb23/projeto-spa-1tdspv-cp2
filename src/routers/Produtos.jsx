import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import { useNavigate } from "react-router-dom";

export default function Produtos() {
    const navigate = useNavigate();

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>LISTA DE PRODUTOS</h1>
            <button className={classes.adicionar} onClick={() => navigate('/produtos/adicionar')}>Adicionar Produto</button>

            <table className={classes.tableStyle}>
                <thead>
                    <tr className={classes.tableHeaderStyle}>
                        <th className={classes.tableHeaderStyle}>ID</th>
                        <th className={classes.tableHeaderStyle}>Nome</th>
                        <th className={classes.tableHeaderStyle}>Descrição</th>
                        <th className={classes.tableHeaderStyle}>Preço</th>
                        <th className={classes.tableHeaderStyle}>Imagem</th>
                        <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos.map((produto, index) => (
                        <tr key={index} className={classes.tableLineStyle}>
                            <td className={classes.tableDataStyle}>{produto.id}</td>
                            <td className={classes.tableDataStyle}>{produto.nome}</td>
                            <td className={classes.tableDataStyle}>{produto.desc}</td>
                            <td className={classes.tableDataStyle}>{produto.preco}</td>
                            <td className={classes.tableDataStyle}><img className={classes.tableDataImgStyle} src={produto.img} alt={produto.desc} /></td>
                            <td className={classes.tableDataButtonStyle}>
                                <Link to={`/produtos/editar/${produto.id}`}>
                                    <FaEdit size={24} color="green" />
                                </Link>
                                <Link to={`/produtos/excluir/${produto.id}`}>
                                    <FaTrash size={24} color="red" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='5' className={classes.tableDataStyle}>
                            <strong>Total de produtos:</strong>
                            {ListaProdutos.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </main>
    )
}