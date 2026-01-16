import styles from "./Card.module.css";

export default function Card({ produto, onSelect }) {
  const freteGratis = produto.preco > 400;
  const indisponivel = produto.estoque === 0;

  return (
    <div
      className={styles["card-wrapper"]}
      onClick={() => onSelect(produto.nome)}
    >
      <div className={styles["image-wrapper"]}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className={styles["card-image"]}
        />

        {freteGratis && <span className={styles.badge}>Frete Grátis</span>}
      </div>

      <div className={styles["text-wrapper"]}>
        <h3 className={styles["card-title"]}>{produto.nome}</h3>

        <span className={styles["card-stock"]}>
          {indisponivel ? "Sem estoque" : `Estoque: ${produto.estoque}`}
        </span>

        <span className={styles["card-price"]}>
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </span>
      </div>

      {indisponivel ? (
        <button disabled>Indisponível</button>
      ) : (
        <button>Comprar</button>
      )}
    </div>
  );
}
