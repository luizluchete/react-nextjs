import styles from '../styles/Cartao.module.css';

interface CartaoProps {
  bgColor?: string;
  children?: JSX.Element;
}

export default function Cartao(props: CartaoProps) {
  return (
    <div
      className={styles.cartao}
      style={{
        backgroundColor: props.bgColor ?? '#fff',
      }}
    >
      {props.children}
    </div>
  );
}
