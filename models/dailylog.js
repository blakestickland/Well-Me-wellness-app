/* eslint-disable prettier/prettier */
/* eslint-disable indent */
module.exports = (sequelize, DataTypes) => {
    const Dailylog = sequelize.define("dailylog", {
        calories: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
        excercise: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
        // eslint-disable-next-line camelcase
        water_intake: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
        sleep: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
        // eslint-disable-next-line camelcase
        daily_score: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
    });

    // Dailylog.associate = (models) => {
    //     Dailylog.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false,
    //         },
    //     });
    // };
    return Dailylog;

};



