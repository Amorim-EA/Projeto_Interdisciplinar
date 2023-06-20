"use client"
import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3004/produto", {
    cache: "no-cache",
    mode: 'no-cors',
  });

  const produtos = await req.json();

  return (
 <main className={style.main}>

<div className={style.header}>
    <h1 className={style.h1}>Produtos</h1>

    <div className={style.navbar}>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.links} href="/cadastro">cadastrar</Link>
    </div>
 </div>

   <div className={style.container}>
    {produtos.map(item => (

      <div className={style.card} key={item.id}>

        <Image src={item.imgC} width={30}></Image>
        <p className={style.titulozc}>{item.titulo}</p>
        <p className={style.dataC}>{item.data_cadastro}</p>
        <p className={style.precoC}>{item.preco}</p>
        
        <div className={style.botoes}>
          <Link href={`produto/${item.id}`} className={style.links}>ver mais</Link>
        </div>

      </div>
      ))} 
    </div>
     <div className="footer">
                <p>copzright: eder da silva amorim e erick da silva amorim</p>
            </div>
    </main>
  )
}
