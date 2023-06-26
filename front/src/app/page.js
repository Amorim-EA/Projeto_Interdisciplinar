"use client"
import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("https://projeto-interdisciplinar-seven.vercel.app/produtos/", {
    cache: "no-cache",
  });

  const produtos = await req.json();

  return (
<div className={style.header}>
    <h1 className={style.h1}>Produtos</h1>

    <div className={style.navbar}>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.links} href="/cadastro">cadastrar</Link>
    </div>
 </div>

   <div className={style.containerP}>
    {produtos.map(item => (

      <div className={style.card} key={item.id}>

        <img src={item.imgC}></img>
        <p className={style.tituloC}>{item.titulo}</p>
        <p className={style.dataC}>{item.data_cadastro}</p>
        <p className={style.precoC}>{item.preco}</p>
        
        <div className={style.botoes}>
          <Link href={`produtos/${item.id}`} className={style.linkV}>ver mais</Link>
        </div>

      </div>
      ))} 
    </div>
  )
}
