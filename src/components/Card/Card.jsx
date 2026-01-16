import styles from "./Card.module.css";

export default function Card({ produto, onSelect }) {
const freteGratis = produto.preco > 400;
const indisponivel = produto.estoque === 0;

return (
    <div className={styles.card} onClick={() => onSelect(produto.nome)}>
    {freteGratis && (
        <span className={styles.frete}>Frete Grátis</span>
    )}

    <img src={produto.imagem} alt={produto.nome} />

    <h3>{produto.nome}</h3>

    <p className={styles.preco}>
        R$ {produto.preco.toFixed(2).replace(".", ",")}
    </p>

    {indisponivel ? (
        <button className={styles.indisponivel} disabled>
            Indisponível
        </button>
    ) : (
        <button className={styles.comprar}>
            Comprar
        </button>
    )}
    </div>
);
}
