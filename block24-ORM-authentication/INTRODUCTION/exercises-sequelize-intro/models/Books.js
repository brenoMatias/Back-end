// MODEL: 

// Os models são a essência do Sequelize. Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui (e seus tipos de dados). O model pode ser definido de duas formas:

// Chamando pela função sequelize.define(modelName, attributes, options)
// Estendendo Model como uma classe e chamando init(attributes, options)


const Books = (sequelize, DataTypes) => {
    const Books = sequelize.define("Books", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
    });
  
    return Books;
  };
  
  module.exports = Books;