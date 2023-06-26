'use client'

import Image from 'next/image'
import style from '../page.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default async function VerMais({ params }){

  const router = useRouter();
  const id = { id: parseInt(params.id) }

  const idJson = JSON.stringify(id);

  const req = await fetch("https://projeto-interdisciplinar-seven.vercel.app/produtos/", {
      method: "POST",
      cache: "no-cache",
      headers: { 'content-type': 'application/json' },
      body: idJson
  })
  const produto = await req.json();


  const remover = () => {
      console.log(idJson)
      try {
          fetch("http://localhost:3003/produto", {
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
    <div className={header}>
    <h1 className={style.h1}>{produto.titulo}</h1>
    <nav className={style.navbar}>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.links} href="/cadastro">Cadastrar</Link>
    </nav>
    </div>

    <div className={style.containerV}>

        <div className={style.imgV}>
            <Image src={produto.imgV}></img>
        </div>

        <div className={style.informacao}>
            <h1 className={style.tituloV}>{produto.tituloV}</h1>
            <p className={style.dataV}>{produto.data_cadastro}</p>
            <p className={style.precoV}>R${produto.preco}</p>
            <p className={style.descricao}>{produto.descricao}</p>
      </div>
      </div>

      <div className={style.botoes}>
        <button onClick={e => e.preventDefault(remover())} className={style.botaoR}>Remover</button>
        <Link href='/' className={style.linkV}>Voltar</Link>
      </div>
  )
}
