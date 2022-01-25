const user = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                unique: true
            },
            portfolioId: {
                type: DataTypes.INTEGER
            }
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    )
    User.associate = models => {
        User.hasOne(models.portfolio, { foreignKey: "userId" }) // If only one portfolio per user
        User.belongsToMany(models.share, { through: models.trade });
        User.hasMany(models.trade);

    }

    User.sync()

    return User
}

export default user;