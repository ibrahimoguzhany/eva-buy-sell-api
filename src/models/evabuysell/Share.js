const share = (sequelize, DataTypes) => {
    const Share = sequelize.define(
        'share',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                unique: true
            },
            currentPrice: {
                type: DataTypes.DOUBLE,
            }
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    )
    Share.associate = models => {
        Share.belongsToMany(models.user, { through: models.trade });
        Share.hasMany(models.trade);

    }


    Share.sync()
    return Share
}

export default share;