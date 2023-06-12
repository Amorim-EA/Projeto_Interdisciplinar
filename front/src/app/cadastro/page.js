'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import style from '../page.module.css'

export default function Cadastro() {

    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_Cadastro] = useState();
    const [preco, setPreco] = useState();
    const [imagem, setImagem] = useState();
    const [descricao, setDescricao] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            imagem: imagem,
            descricao: descricao,
        }

        const produtoJson = JSON.stringify(produto);

        fetch("", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div>
            <form action='' onSubmit={cadastrar} className={style.formulario}>
                <h1 className={styles.titulo_cad}>
                    Cadastrar
                </h1>
                <input placeholder='Informe o nome do nome do produto' nome="titulo" type="text" className={style.input_padrao}
                    onChange={e => setTitulo(e.target.value)}></input><br/>

                <input placeholder='Informe a data de cadastro' nome="data_cadastro" type="text" className={style.input_padrao}
                    onChange={e => setData_Cadastro(e.target.value)}></input><br/>

                <input placeholder='Informe o preço' nome="preco" type="number" className={style.input_padrao}
                    onChange={e => setPreco(e.target.value)}></input><br/>

                <input placeholder='Informe o URL da imagem' nome="imagem" type="number" className={style.input_padrao}
                    onChange={e => setImagem(e.target.value)}></input><br/>

                <input placeholder='Faça uma breve descrição do produto' nome="descricao" type="number" className={style.input_padrao}
                    onChange={e => setDescricao(e.target.value)}></input><br/>

                <div className={style.botoes}>
                <button type='submit' className={style.botao}>Cadastrar</button>
                <a href='/'>Voltar</a>
              </div>
            </form>
        </div>
    );

}