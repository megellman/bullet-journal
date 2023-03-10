const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Journal extends Model {}

Journal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        background: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "green",
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "journal",
    }
);

module.exports = Journal;