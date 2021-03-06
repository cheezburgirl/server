module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Character', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      realm: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE, // this is actually DATETIME
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      lastSeenAt: {
        type: DataTypes.DATE, // this is actually DATETIME
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    }).then(result => Promise.all([
      queryInterface.addIndex('Character', ['region', 'realm', 'name']),
    ]));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Character');
  },
};
