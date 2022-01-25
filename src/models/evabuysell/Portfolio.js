
const portfolio = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define(
        'portfolio',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.STRING,
            },
            amount: {
                type: DataTypes.DOUBLE,
            },
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    )

    Portfolio.associate = models => {
        Portfolio.belongsTo(models.user, { foreignKey: "userId" })
    }



    Portfolio.sync()


   

    return Portfolio
}


export default portfolio;