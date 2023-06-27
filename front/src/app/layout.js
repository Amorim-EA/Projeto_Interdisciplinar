import style from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Cadastra Games',
  description: 'Ciração site de cadastro de games',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={style.main}>
      <div className={style.header}>
      <h1 className={style.h1}>Produtos</h1>

      <div className={style.navbar}>
        <Link className={style.links} href="/cadastro">cadastrar</Link>
      </div>
      
    </div>

      {children}

      <div className={style.footer}>
        <p>copzright: eder da silva amorim e erick da silva amorim</p>
      </div>
      </body>

    </html>
  )
}
