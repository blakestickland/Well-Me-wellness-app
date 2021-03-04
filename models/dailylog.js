/* eslint-disable prettier/prettier */
/* eslint-disable indent */
module.exports = function(sequelize, DataTypes) {
    const Dailylog = sequelize.define("Dailylog", {
        calories: {
            type: DataTypes.INTEGER,
            alowNull: false,
            validate: {
                max: 10,
                min: 0
            },
        },
        exercise: {
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
                max: 100,
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



