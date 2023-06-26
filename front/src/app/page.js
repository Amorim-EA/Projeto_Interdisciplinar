"use client"

import style from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("https://projeto-interdisciplinar-seven.vercel.app/produtos/", {
    cache: "no-cache",
  });

  const produtos = await req.json();

  return (
   <div className={style.containerP}>

        {produtos.map(item => (

          <div className={style.card} key={item.id}>

            <img src={`${item.imagem}`} className={style.imgC}/>
            <p className={style.tituloC}>{item.titulo}</p>
            <p className={style.dataC}>{item.data_cadastro}</p>
            <p className={style.precoC}>{item.preco}</p>

            <div className={style.botoes}>
              <Link href={`produto/${item.id}`} className={style.linkV}>ver mais</Link>
            </div>

          </div>
        ))}

      </div>
  )
}
