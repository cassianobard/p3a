const db = require('../config/database');

var fornecedor = {

  getAll: function (callback) {
    return db.execute("SELECT * FROM FORNECEDOR", callback);
  },

  getByName: function (nome, callback) {
    return db.execute("SELECT * FROM FORNECEDOR WHERE NOME=?", [nome], callback);
  },

  add: function (fornecedor, callback) {
    return db.execute("INSERT INTO FORNECEDOR VALUES(?, ?)", [fornecedor.NOME, fornecedor.SITE_CHAMADO], callback);
  },

  update: function (nome, fornecedor, callback) {
    return db.execute("UPDATE FORNECEDOR SET NOME=?, SITE_CHAMADO=? WHERE NOME=?", [fornecedor.NOME, fornecedor.SITE_CHAMADO, nome], callback);
  },

  delete: function (nome, callback) {
    return db.execute("DELETE FROM FORNECEDOR WHERE NOME=?", [nome], callback);
  },

  count: function (callback) {
    return db.execute("SELECT COUNT(*) FROM FORNECEDOR", callback)
  }
};
module.exports = fornecedor;