<h1 align=center>
  CRUD-Example
</h1>

<p align=center>
  CRUD example made in typescript, expressjs, mysql2/promisse and react
</p>

--- 

# 🔎 About the project 🔎
This project provides a concise and straightforward example of how a database-connected API operates with a separate backend. It demonstrates how Express.js routes are structured to interact with the database, retrieving and displaying data. Additionally, it shows how to seamlessly send and receive data between the frontend and backend using forms in React, offering a clear illustration of full-stack data flow.

# 📋 Requirements 📋
- Node.js
- Typescript
- mysql

# ⌨️ Running the project ⌨️
## Running the backend:
### Configuring mysql database:
In cloned repository file open Backend\src\bd\index.ts file and change the following parameters in the function CreateCon():
```ts
async function CreateCon(){
  try
  {
    var con = mysql.createConnection({
        host: "DatabaseIp",
        user: "Database_user",
        password: "Database_password",
        database: "Schema_name"
      });

...
```

Now at the previously defined Schema, execute the following sql script:
```sql
create table if not exists tarefas (id int primary key, 
nome varchar(30),
status bool);
```

If it is your first time running the Backend, run in Backend/ folder:
```node
npm install
```

Now in Backend/ folder, execute the following command in the command prompt:
```node
npm start
```

## Running the Frontend
If it is your first time running the Frontend, run in Frontend/ folder:
```node
npm install
```

In cloned repository folder, open Frontend/ folder. Then open the command prompt and run this command:
```node
npm start
```

