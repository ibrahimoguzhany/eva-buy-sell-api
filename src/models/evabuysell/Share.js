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
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    )

    Share.sync()
    return Share
}

export default share;