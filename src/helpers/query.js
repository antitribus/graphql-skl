import { Op } from "sequelize";

export const applyLikeFilter = (filter = {}) => {
    const keys = Object.keys(filter);

    return keys.reduce((acc, cur) => {
        const current = filter[cur];

        if (current.length) {
            return {
                ...acc,
                [cur]: { [Op.like]: `%${current}%` }
            }
        }
        return acc;
    }, {});
}