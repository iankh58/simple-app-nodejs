module.exports = (sequelize, Sequelize) => {
	const DbData = sequelize.define('db_data', {	
	id: {
            type: Sequelize.NUMERIC,
            primaryKey: true
      },
	content: {
			type: Sequelize.STRING
      },
      key: {
            type: Sequelize.STRING
      },
      updatedOn: {
            type: Sequelize.DATE,
            fieldName: 'updatedOn'
      }
	});
	
	return DbData;
}
