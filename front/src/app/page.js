"use client"
import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3004/produtos", {
    cache: "no-cache",
    mode: 'no-cors',
  });

  const produtos = await req.json();

  return (
    <main className={style.main}>

    <h1 className={style.h1}>Produtos</h1>

    <div className={style.navbar}>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.text} href="/cadastro">cadastrar</Link>
    </div>

   <div className={style.container}>
    {produtos.map(item => (

      <div className={style.card} key={item.id}>

        <Image src={item.imagem} width={30}></Image>
        <p>{item.titulo}</p>
        <p>{item.data_cadastro}</p>
        <p>{item.preco}</p>
        
        <div className={style.botoes}>
          <Link href={`produto/${item.id}`}>ver mais</Link>
        </div>

      </div>
      ))} 
    </div>
    </main>
  )
}
