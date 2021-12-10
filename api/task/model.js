// build your `Task` model here
// build your `Resource` model here

const db = require('../../data/dbConfig');

const getById = id => {
    return db('tasks')
    .where('task_id', '=' , id).first()
    .then((task) => {
        return{ ...task, task_completed: !!task.task_completed}
    })
  }

  async function getTasks() {
   const tasks = await db('tasks as t').leftJoin(
       "projects as p",
       "p.project_id",
       "t.project_id"
   )
   return tasks.map ((task) => {
       return {
           ...task,
           task_completed: !!task.task_completed,
           project_completed: !!task.project_completed
       }
   })
 }


async function createTasks(task) {
    const [id] = await db('tasks').insert(task)
    return getById(id)
}

module.exports = {
  getById ,
  getTasks,
  createTasks,
};