const db = require("../db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      return await connect.query('SELECT * FROM produto');
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT * FROM produto WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      console.log("teste")
      const connect = await db.connect();
      const sql = 'INSERT INTO produto(titulo, data_cadastro, preco, imagem, descricao) VALUES ($1, $2, $3, $4, $5) RETURNING id, titulo, data_cadastro, preco, imagem, descricao;';
      const values = [data.titulo, data.data_cadastro, data.preco, data.imagem, data.descricao]; 
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = 'UPDATE produto SET titulo=$1, data_cadastro=$2, preco=$3 imagem=$4 descricao=$5 WHERE id=$6 RETURNING id, titulo, data_cadastro, preco, imagem, descricao;';
      const values = [data.titulo, data.data_cadastro, data.preco, data.imagem, data.descricao];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const connect = await db.connect();
      const sql = 'DELETE FROM produto WHERE id=$1 RETURNING id, titulo, data_cadastro, preco, imagem, descricao;;';
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produto;
