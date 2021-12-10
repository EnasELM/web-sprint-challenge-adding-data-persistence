
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table =>{
        table.increments('project_id')
        table.string('project_name', 200).notNullable()
        table.text('project_description', 200)
        table.boolean('project_completed')
        .defaultTo(false)
    })

    .createTable('resources', table =>{
        table.increments('resource_id')
        table.string('resource_name', 200).notNullable().unique()
        table.text('resource_description', 200)
    })

    .createTable('tasks', table =>{
        table.increments('task_id')
        table.text('task_description', 200).notNullable()
        table.text('task_notes', 200)
        table.boolean('task_completed')
        .defaultTo(false)
        table.integer('project_id').unsigned().notNullable()
          .references('project_id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')

    })

    .createTable('project_resources', table =>{
        table.increments('project_resources_id')
        table.integer('project_id').unsigned().notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
              table.integer('resource_id').unsigned().notNullable()
              .references('resource_id')
              .inTable('resources')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
    })



};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  
};
