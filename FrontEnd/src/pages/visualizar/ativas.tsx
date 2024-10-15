import React, { useEffect, useState } from "react";
import "./style.css";

function Ativas() {

  type dataItem = {
    id: number,
    nome: string,
    status: number
  }

  const [data, setData] = useState<dataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch("http://localhost:5000/tarefas/");
    const jsonData: dataItem[] = await response.json();
    setData(jsonData);
    }

    fetchData();
  }, []);

  function CardSelector(item: dataItem) {
    if (item.status === 1){
      return  (<div className="Content" key={item.id}>
                <h3>{item.nome} - {item.id}</h3>
                <h3>Ativo</h3>
              </div>)
    }
  }

    return (
      <body>
        <div className="Navbar">

<div className="Nav-Item dropdown">
  Visualizar
  <div className="dropdown-content">
    <a href="/">
      <div>
        Todas
      </div>
    </a>
    <a href="/Ativas">
      <div>
        Ativas
      </div>
    </a>
    <a href="/Desativadas">
      <div>
        Desativadas
      </div>
    </a>
  </div>
</div>

<a href="/Cadastrar">
<div className="Nav-Item">
  Cadastrar
</div>
</a>
<a href="/Editar">
<div className="Nav-Item">
  Editar
</div>
</a>
<a href="/Deletar">
<div className="Nav-Item">
  Excluir
</div>
</a>
</div>

        <h1>Listagem das tarefas:</h1>

        <div className="Cont">
        {data.map((item) => (
            CardSelector(item)
          ))}
        </div>
      </body>
    );
  }
  
  export default Ativas;
  