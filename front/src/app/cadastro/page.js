'use client'

import { useState } from 'react'
import style from '../page.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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

        fetch("http://localhost:3004/produto/", {
            method: "POST",
            mode: 'no-cors',
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <main className={style.main}>
            <div className={style.header}>
            <h1 className={style.h1}>Cadastrar</h1>

            <nav className={style.navbar}>
              <Link className={style.links} href="/">Home</Link>
              <Link className={style.links} href="/cadastro">Cadastrar</Link>
            </nav>
            </div>

            <form action='' onSubmit={cadastrar} className={style.formulario}>
                <input placeholder='Informe o nome do produto' nome="titulo" type="text" className={style.input_padrao}
                    onChange={e => setTitulo(e.target.value)}></input><br/>

                <input placeholder='Informe a data de cadastro' nome="data_cadastro" type="date" className={style.input_padrao}
                    onChange={e => setData_Cadastro(e.target.value)}></input><br/>

                <input placeholder='Informe o preço' nome="preco" type="text" className={style.input_padrao}
                    onChange={e => setPreco(e.target.value)}></input><br/>

                <input placeholder='Informe o URL da imagem' nome="imagem" type="text" className={style.input_padrao}
                    onChange={e => setImagem(e.target.value)}></input><br/>

                <textarea placeholder='Faça uma breve descrição do produto' nome="descricao" type="text" className={style.text_area}
                    onChange={e => setDescricao(e.target.value)}
                    rows="5" cols="30"></textarea><br/>

                <div className={style.botoes}>
                    <button type='submit' className={style.botao}>Cadastrar</button>
                    <a href='/' className={style.LinkV}>Voltar</a>
                </div>
            </form>
        </main>
    );

}