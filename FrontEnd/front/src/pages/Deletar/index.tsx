import React, { ReactEventHandler, useEffect, useState } from "react";
import './style.css'
function Deletar(){
 
        const [data, setData] = useState({
          id: '',
        });

      const MudancaField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
        [e.target.id]: e.target.value

        });
      }

      const EnvioData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
          const response = await fetch(`http://localhost:5000/tarefas/${data.id}`, {
            method: 'Delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          const result = await response.json();
          console.log('Form submitted successfully:', result);
          setData({
            id: ''
          });
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

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

        <h1>Excluir tarefa:</h1>

        <form onSubmit={EnvioData}>
      <div>
        <label htmlFor="id">id:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={data.id}
          onChange={MudancaField}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
        
    </body>
      )
    };

export default Deletar