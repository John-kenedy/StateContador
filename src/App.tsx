import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 99,
    cpf: "xxx.xxx.xxx-xx",
  });

  const [tempName, setTempName] = useState("");
  const [tempAge, setTempAge] = useState(0);
  const [tempCpf, setTempCpf] = useState("");

  function updateName() {
    setUser({ ...user, name: tempName });
    setTempName("");
  }

  function updateAge() {
    setUser({ ...user, age: tempAge });
    setTempAge(0);
  }

  function updateCpf() {
    setUser({ ...user, cpf: tempCpf });
    setTempCpf("");
  }

  function aumentarIdade() {
    setUser({ ...user, age: user.age + 1 });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Informações do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Idade:</strong> {user.age}</p>
      <p><strong>CPF:</strong> {user.cpf}</p>

      <button onClick={aumentarIdade}>Aumentar idade +1</button>

      <hr />

      {/* Nome */}
      <div>
        <input
          type="text"
          placeholder="Novo nome"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />
        <button onClick={updateName}>Alterar Nome</button>
      </div>

      {/* Idade */}
      <div>
        <input
          type="number"
          placeholder="Nova idade"
          value={tempAge}
          onChange={(e) => setTempAge(Number(e.target.value))}
        />
        <button onClick={updateAge}>Alterar Idade</button>
      </div>

      {/* CPF */}
      <div>
        <input
          type="text"
          placeholder="Novo CPF"
          value={tempCpf}
          onChange={(e) => setTempCpf(e.target.value)}
        />
        <button onClick={updateCpf}>Alterar CPF</button>
      </div>
    </div>
  );
}
