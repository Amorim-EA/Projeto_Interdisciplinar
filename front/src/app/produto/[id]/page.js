'use client'

import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default async function VerMais({ params }){

  const router = useRouter();
  const id = { id: parseInt(params.id) }

  const idJson = JSON.stringify(id);

  const req = await fetch("http://localhost:3004/produtos", {
      method: "POST",
      cache: "no-cache",
      headers: { 'content-type': 'application/json' },
      body: idJson
  })
  const produto = await req.json();


  const remover = () => {
      console.log(idJson)
      try {
          fetch("http://localhost:3004/produtos", {
              method: "DELETE",
              headers: { 'content-type': 'application/json' },
              body: idJson
          })
          router.push("/");
      } catch (error) {
          alert("Ocorreu um erro" + error)
      }
  }

  return (
  
    <div>
    <h1 className={style.titulo}></h1>

    <nav className={style.barra_nav}>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.links} href="/cadastro">Cadastrar</Link>
    </nav>

    <main className={style.container}>

      <div className={style.verDiv} key={item.id}>

        <div className={style.verImg}>
            <Image src={produto.imagem}></Image>
        </div>

        <div className={style.verInfo}>
            <h1>{produto.titulo}</h1>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
      </div>
      </div>

      <div className={style.botoes}>
        <button onClick={e => e.preventDefault(remover())}>Remover</button>
        <a href='/'>Voltar</a>
      </div>
 
    </main>
    </div>
  )
}