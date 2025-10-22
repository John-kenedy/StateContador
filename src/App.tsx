import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  let mensagem = null;
  if (count === 19) {
    mensagem = <p>Você conseguiu!</p>;
  }

  return (
    <div>
      <h1>Valor atual: {count}</h1>

      <button onClick={() => setCount(count + 3)}>Somar 3</button>
      <button onClick={() => setCount(count - 2)}>Diminuir 2</button>

      {/* Mostra a mensagem se count for 19 */}
      {mensagem}
    </div>
  );
}
