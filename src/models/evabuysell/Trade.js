const trade = (sequelize, DataTypes) => {
    const Trade = sequelize.define(
        'trade',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.STRING,
            },
            shareId: {
                type: DataTypes.STRING,
            },
            sharePrice: {
                type: DataTypes.DOUBLE,
            },
            type: {
                type: DataTypes.STRING,
            },
            shareQuantity: {
                type: DataTypes.DOUBLE,
            },
            tradeDate: {
                type: DataTypes.DATE,
            },
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    )
    Trade.associate = models => {
        Trade.belongsTo(models.user);
        Trade.belongsTo(models.share);
    }



    Trade.sync()
    return Trade
}

export default trade;