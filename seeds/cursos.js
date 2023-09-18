/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cursos').del()
  await knex('cursos').insert([
    { id: 1, nome: "Sistemas de Informação", tipo:"Graduação", valor: 25000.00 },
    { id: 2, nome: "Engenharia Civil", tipo:"Graduação", valor: 35000.00 },
    { id: 3, nome: "Sistemas Distribuídos", tipo:"Pós Graduação", valor: 45000.00 },
    { id: 4, nome: "Biologia Vegetal", tipo:"Doutorado", valor: 65000.00 },
    { id: 5, nome: "Ciência da Computação", tipo:"Mestrado", valor: 55000.00 },
  ]);
};
