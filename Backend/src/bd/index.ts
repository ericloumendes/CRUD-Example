import mysql from 'mysql2/promise';


async function CreateCon(){
  try
  {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tarefasClaudio"
      });
    
      console.log("Conectado!");

      return con;

    } catch (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
      throw err;
    }
}

async function GetTarefas(con) {

  let [rows, fields] = await con.execute(
    'SELECT * FROM tarefas');
  
  
    return rows
  
}

async function insertTarefas(con, id, nome, status) {
  // query database
  await con.execute(
    `INSERT INTO tarefas VALUES (${id}, '${nome}', ${status})`);

  console.log('Produto Inserido!')
}


async function updateTarefas(con, id, nome, status){
  await con.execute(
    `UPDATE tarefas SET nome='${nome}', status=${status}
    WHERE id = ${id};`
  )

  console.log('Produto atualizado!')
}

async function deleteTarefas(con, id){
  await con.execute(`
    DELETE FROM tarefas WHERE id = ${id}`)
}

export {CreateCon, GetTarefas, insertTarefas, updateTarefas, deleteTarefas}