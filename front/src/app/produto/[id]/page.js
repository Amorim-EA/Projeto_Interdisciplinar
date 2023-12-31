'use client'

import style from '../../page.module.css'
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
          fetch("https://projeto-interdisciplinar-seven.vercel.app/produtos", {
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
    <div className={style.containerV}>

          <div className={style.imgV}>
              <img src={produto.imagem}/>
          </div>

          <div className={style.informacao}>
              <h1 className={style.tituloV}>{produto.titulo}</h1>
              <p className={style.dataV}>{produto.data_cadastro}</p>
              <p className={style.precoV}>R${produto.preco}</p>
              <p className={style.descricao}>{produto.descricao}</p>
          </div>
      <div className={style.botoes}>
              <button onClick={e => e.preventDefault(remover())} className={style.botaoR}>Remover</button>
              <Link href='/' className={style.linkV}>Voltar</Link>
          </div>
    </div>
  )
}
