module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {	
	  id: {
            type: Sequelize.NUMERIC,
            primaryKey: true
      },
	  username: {
			type: Sequelize.STRING
	  }
	});
	
	return User;
}
