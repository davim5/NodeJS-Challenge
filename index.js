const express = require('express');

const server = express();

server.listen(3000);

server.use(express.json());

const taskList =[{'id':"0",'title':"Nova Task",'tasks':[]}]

//Rota que mostra a lista de projetos
server.get('/projects',(req,res)=>{
  return res.json(taskList);
});

//Rota de adicionar projetos
server.post('/projects',(req,res)=>{
  const { id } = req.body;

  const { title } = req.body;

  taskList.push({'id':id,'title':title,'tasks':[]})

  return res.json(taskList)

})

//Rota de alterar o título recebendo o id
server.put('/projects/:id',(req,res)=>{
  const { id } = req.params;
  const { title } = req.body;

  taskList[id].title = title;

  return res.json(taskList)
})

//Rota pra deletar o projeto pelo id
server.delete('/projects/:id',(req,res)=>{
  
  const { id } = req.params;

  taskList.splice(taskList.findIndex(x=> x.id === id),1);

  return res.json(taskList);

})

server.post('/projects/:id/tasks:',(req,res)=>{

});





// Rotas
// POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

// GET /projects: Rota que lista todos projetos e suas tarefas;

// PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

// DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

// POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

// Exemplo
// Se eu chamar a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, meu array de projetos deve ficar assim:

// [
//   {
//     id: "1",
//     title: "Novo projeto",
//     tasks: ["Nova tarefa"]
//   }
// ];