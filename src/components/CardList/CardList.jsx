import Card from "../Card/Card";
import styles from "./CardList.module.css";

export default function CardList({ produtos }) {
  const handleSelect = (nomeProduto) => {
    console.log("Produto selecionado:", nomeProduto);
  };

  return (
    <div className={styles["cardList-wrapper"]}>
      {produtos.map((produto) => (
        <Card key={produto.id} produto={produto} onSelect={handleSelect} />
      ))}
    </div>
  );
}
