const user = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
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

    User.sync()
    return User
}

export default user;