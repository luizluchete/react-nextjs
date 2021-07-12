import { useEffect, useState } from 'react';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import styles from '../../../styles/Jogo.module.css';

import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Jogo() {
  const router = useRouter();

  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const qtdePortas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    const qtdePortasValida = portas.length >= 3 && portas.length <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= qtdePortas;

    setValido(qtdePortasValida && temPresenteValido);
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const qtdePortas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(qtdePortas, temPresente));
  }, [router.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        ></Porta>
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
