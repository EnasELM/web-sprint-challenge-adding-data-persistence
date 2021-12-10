const projects = [
    {project_name:"project1","project_description":null,"project_completed":false}
]

const resources = [
    {"resource_name":"foo","resource_description":null}
]

const tasks = [
    {"task_description":"baz","task_notes":null,"task_completed":false,project_id:1}
]

const project_resources = [
    {resource_id:1,project_id:1}
]

exports.seed = async function(knex){
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources ').insert(project_resources )
}