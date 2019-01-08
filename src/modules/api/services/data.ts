const generateMood = (index) => {
    return {
        value: Math.round(Math.random() * 2 + 1),
        date: Date.now() + index,
    }
};

const generateMoods = (count) => {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push(generateMood(i));
    }

    return result;
};

export const teamData = {
    teams: {
        '1': {
            id: '1',
            title: 'Tigers',
            employees: [1, 2, 3]
        },
        '2': {
            id: '2',
            title: 'Lions',
            employees: [1, 2]
        },
        '3': {
            id: '3',
            title: 'Bears',
            employees: [1]
        }
    },
    employees: {
        '1': {
            id: '1',
            firstName: 'John',
            surname: 'Doe',
            teamId: '1',
            moods: generateMoods(5)
        },
        '2': {
            id: '2',
            firstName: 'Michel',
            surname: 'Huk',
            teamId: '1',
            moods: generateMoods(5)
        },
        '3': {
            id: '3',
            firstName: 'Vanessa',
            surname: 'Collins',
            teamId: '1',
            moods: generateMoods(5)
        }
    },
};
