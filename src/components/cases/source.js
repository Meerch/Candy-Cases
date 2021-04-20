const rarity = [
    {
        index: 1,
        rarity: 'normal',
        color: '#52F275'
    },
    {
        index: 2,
        rarity: 'rare',
        color: '#5275F2'
    },
    {
        index: 3,
        rarity: 'epic',
        color: '#DC52F2'
    },
    {
        index: 4,
        rarity: 'legendary',
        color: '#F2E252'
    },
]
const srcPrizes = 'assets/prizes'

const prizes = [
    {
        id: 1,
        name: 'croissant',
        image: `${srcPrizes}/${rarity[0].rarity}/croissant.png`,
        price: 1,
        rare: rarity[0],
    },
    {
        id: 2,
        name: 'lollipop',
        image: `${srcPrizes}/${rarity[0].rarity}/lollipop-1.png`,
        price: 1,
        rare: rarity[0],
    },
    {
        id: 3,
        name: 'lollipop',
        image: `${srcPrizes}/${rarity[0].rarity}/lollipop-4.png`,
        price: 2,
        rare: rarity[0],
    },
    {
        id: 4,
        name: 'candy',
        image: `${srcPrizes}/${rarity[0].rarity}/candy-2.png`,
        price: 4,
        rare: rarity[0],
    },
    {
        id: 5,
        name: 'pudding',
        image: `${srcPrizes}/${rarity[0].rarity}/pudding-2.png`,
        price: 5,
        rare: rarity[0],
    },
    {
        id: 6,
        name: 'strawberry',
        image: `${srcPrizes}/${rarity[0].rarity}/strawberry.png`,
        price: 5,
        rare: rarity[0],
    },
    {
        id: 7,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[0].rarity}/ice-cream-1.png`,
        price: 7,
        rare: rarity[0],
    },
    {
        id: 8,
        name: 'lollipop',
        image: `${srcPrizes}/${rarity[0].rarity}/lollipop-2.png`,
        price: 11,
        rare: rarity[0],
    },
    {
        id: 9,
        name: 'lollipop',
        image: `${srcPrizes}/${rarity[0].rarity}/lollipop-3.png`,
        price: 14,
        rare: rarity[0],
    },
    {
        id: 10,
        name: 'marshmallow',
        image: `${srcPrizes}/${rarity[0].rarity}/marshmallow-2.png`,
        price: 17,
        rare: rarity[0],
    },
    {
        id: 11,
        name: 'cake',
        image: `${srcPrizes}/${rarity[0].rarity}/cake-1.png`,
        price: 20,
        rare: rarity[0],
    },
    {
        id: 12,
        name: 'cake',
        image: `${srcPrizes}/${rarity[0].rarity}/cake-3.png`,
        price: 24,
        rare: rarity[0],
    },
    {
        id: 13,
        name: 'pancakes',
        image: `${srcPrizes}/${rarity[0].rarity}/pancakes.png`,
        price: 25,
        rare: rarity[0],
    },
    {
        id: 14,
        name: 'candy',
        image: `${srcPrizes}/${rarity[1].rarity}/candy.png`,
        price: 5,
        rare: rarity[1],
    },
    {
        id: 15,
        name: 'pudding',
        image: `${srcPrizes}/${rarity[1].rarity}/pudding-3.png`,
        price: 15,
        rare: rarity[1],
    },
    {
        id: 16,
        name: 'cookies',
        image: `${srcPrizes}/${rarity[1].rarity}/cookies.png`,
        price: 9,
        rare: rarity[1],
    },
    {
        id: 17,
        name: 'pudding',
        image: `${srcPrizes}/${rarity[1].rarity}/pudding-1.png`,
        price: 30,
        rare: rarity[1],
    },
    {
        id: 18,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[1].rarity}/ice-cream-4.png`,
        price: 40,
        rare: rarity[1],
    },
    {
        id: 19,
        name: 'cup-cake',
        image: `${srcPrizes}/${rarity[1].rarity}/cup-cake-2.png`,
        price: 34,
        rare: rarity[1],
    },
    {
        id: 20,
        name: 'cup-cake',
        image: `${srcPrizes}/${rarity[1].rarity}/cup-cake-3.png`,
        price: 42,
        rare: rarity[1],
    },
    {
        id: 21,
        name: 'cake',
        image: `${srcPrizes}/${rarity[1].rarity}/cake-2.png`,
        price: 46,
        rare: rarity[1],
    },
    {
        id: 22,
        name: 'chocolate',
        image: `${srcPrizes}/${rarity[1].rarity}/chocolate-1.png`,
        price: 55,
        rare: rarity[1],
    },
    {
        id: 23,
        name: 'ice-cream-stick',
        image: `${srcPrizes}/${rarity[1].rarity}/ice-cream-stick.png`,
        price: 60,
        rare: rarity[1],
    },
    {
        id: 24,
        name: 'honey',
        image: `${srcPrizes}/${rarity[1].rarity}/honey.png`,
        price: 70,
        rare: rarity[1],
    },
    {
        id: 25,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[1].rarity}/ice-cream-6.png`,
        price: 75,
        rare: rarity[1],
    },
    {
        id: 26,
        name: 'chocolate',
        image: `${srcPrizes}/${rarity[2].rarity}/chocolate-2.png`,
        price: 80,
        rare: rarity[2],
    },
    {
        id: 27,
        name: 'marshmallow',
        image: `${srcPrizes}/${rarity[2].rarity}/marshmallow-1.png`,
        price: 35,
        rare: rarity[2],
    },
    {
        id: 28,
        name: 'rainbow',
        image: `${srcPrizes}/${rarity[2].rarity}/rainbow.png`,
        price: 80,
        rare: rarity[2],
    },
    {
        id: 29,
        name: 'candies',
        image: `${srcPrizes}/${rarity[2].rarity}/candies.png`,
        price: 90,
        rare: rarity[2],
    },
    {
        id: 30,
        name: 'chocolate-cake',
        image: `${srcPrizes}/${rarity[2].rarity}/chocolate-cake.png`,
        price: 97,
        rare: rarity[2],
    },
    {
        id: 31,
        name: 'candy-machine',
        image: `${srcPrizes}/${rarity[2].rarity}/candy-machine.png`,
        price: 104,
        rare: rarity[2],
    },
    {
        id: 32,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[2].rarity}/ice-cream-3.png`,
        price: 122,
        rare: rarity[2],
    },
    {
        id: 33,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[3].rarity}/ice-cream-2.png`,
        price: 140,
        rare: rarity[3],
    },
    {
        id: 34,
        name: 'ice-cream',
        image: `${srcPrizes}/${rarity[3].rarity}/ice-cream-5.png`,
        price: 161,
        rare: rarity[3],
    },
    {
        id: 35,
        name: 'candies',
        image: `${srcPrizes}/${rarity[3].rarity}/candies-3.png`,
        price: 149,
        rare: rarity[3],
    },
    {
        id: 36,
        name: 'cup-cake',
        image: `${srcPrizes}/${rarity[3].rarity}/cup-cake-1.png`,
        price: 182,
        rare: rarity[3],
    },
    {
        id: 37,
        name: 'jam',
        image: `${srcPrizes}/${rarity[3].rarity}/jam.png`,
        price: 202,
        rare: rarity[3],
    },
    {
        id: 38,
        name: 'peanut-butter',
        image: `${srcPrizes}/${rarity[3].rarity}/peanut-butter.png`,
        price: 310,
        rare: rarity[3],
    },
    {
        id: 39,
        name: 'donut',
        image: `${srcPrizes}/${rarity[3].rarity}/donut.png`,
        price: 485,
        rare: rarity[3],
    },
    {
        id: 40,
        name: 'gummy-bear',
        image: `${srcPrizes}/${rarity[3].rarity}/gummy-bear.png`,
        price: 524,
        rare: rarity[3],
    },

]
export const cases = [
    {
        id: 1,
        image: "assets/cases/case-1.png",
        price: 10,
        prizes: [
            {
                chance: 6,
                prize: prizes[0],
            },
            {
                chance: 6,
                prize: prizes[2],
            },
            {
                chance: 6,
                prize: prizes[3],
            },
            {
                chance: 5,
                prize: prizes[4],
            },
            {
                chance: 6,
                prize: prizes[5],
            },
            {
                chance: 6,
                prize: prizes[6],
            },
            {
                chance: 6,
                prize: prizes[7],
            },
            {
                chance: 6,
                prize: prizes[8],
            },
            {
                chance: 6,
                prize: prizes[9],
            },
            {
                chance: 6,
                prize: prizes[10],
            },
            {
                chance: 7,
                prize: prizes[11],
            },
            {
                chance: 7,
                prize: prizes[12],
            },
            {
                chance: 7,
                prize: prizes[13],
            },
            {
                chance: 7,
                prize: prizes[18],
            },
            {
                chance: 7,
                prize: prizes[19],
            },
            {
                chance: 3,
                prize: prizes[29],
            },
            {
                chance: 3,
                prize: prizes[25],
            },
        ]
    },
    {
        id: 2,
        image: "assets/cases/case-2.png",
        price: 32,
        prizes: [
            {
                chance: 13,
                prize: prizes[8],
            },
            {
                chance: 12,
                prize: prizes[15],
            },
            {
                chance: 12,
                prize: prizes[16],
            },
            {
                chance: 11,
                prize: prizes[17],
            },
            {
                chance: 10,
                prize: prizes[18],
            },
            {
                chance: 9,
                prize: prizes[19],
            },
            {
                chance: 8,
                prize: prizes[20],
            },
            {
                chance: 8,
                prize: prizes[21],
            },
            {
                chance: 8,
                prize: prizes[24],
            },
            {
                chance: 8,
                prize: prizes[30],
            },
            {
                chance: 1,
                prize: prizes[38],
            },
        ]
    },
    {
        id: 3,
        image: "assets/cases/case-3.png",
        price: 64,
        prizes: [
            {
                chance: 13,
                prize: prizes[17],
            },
            {
                chance: 13,
                prize: prizes[20],
            },
            {
                chance: 12,
                prize: prizes[21],
            },
            {
                chance: 10,
                prize: prizes[26],
            },
            {
                chance: 10,
                prize: prizes[25],
            },
            {
                chance: 10,
                prize: prizes[19],
            },
            {
                chance: 5,
                prize: prizes[20],
            },
            {
                chance: 3,
                prize: prizes[21],
            },
            {
                chance: 9,
                prize: prizes[24],
            },
            {
                chance: 7,
                prize: prizes[31],
            },
            {
                chance: 5,
                prize: prizes[34],
            },
            {
                chance: 2,
                prize: prizes[37],
            },
            {
                chance: 1,
                prize: prizes[39],
            },
        ]
    },
    {
        id: 4,
        image: "assets/cases/case-4.png",
        price: 104,
        prizes: [
            {
                chance: 9,
                prize: prizes[15],
            },
            {
                chance: 7,
                prize: prizes[17],
            },
            {
                chance: 9,
                prize: prizes[18],
            },
            {
                chance: 9,
                prize: prizes[23],
            },
            {
                chance: 8,
                prize: prizes[25],
            },
            {
                chance: 8,
                prize: prizes[27],
            },
            {
                chance: 8,
                prize: prizes[31],
            },
            {
                chance: 7,
                prize: prizes[32],
            },
            {
                chance: 9,
                prize: prizes[33],
            },
            {
                chance: 9,
                prize: prizes[34],
            },
            {
                chance: 7,
                prize: prizes[35],
            },
            {
                chance: 5,
                prize: prizes[37],
            },
            {
                chance: 3,
                prize: prizes[38],
            },
            {
                chance: 2,
                prize: prizes[39],
            },
        ]
    },
    {
        id: 5,
        image: "assets/cases/case-5.png",
        price: 220,
        prizes: [
            {
                chance: 25,
                prize: prizes[29],
            },
            {
                chance: 25,
                prize: prizes[32],
            },
            {
                chance: 23,
                prize: prizes[36],
            },
            {
                chance: 22,
                prize: prizes[38],
            },
            {
                chance: 5,
                prize: prizes[39],
            },

        ]
    },
    {
        id: 6,
        image: "assets/cases/case-6.png",
        price: 30,
        prizes: [
            {
                chance: 95,
                prize: prizes[5],
            },
            {
                chance: 5,
                prize: prizes[39],
            },
        ]
    },
    {
        id: 7,
        image: 'assets/cases/free.png',
        price: 0,
        prizes: [
            {
                chance: 60,
                prize: prizes[7],
            },
            {
                chance: 10,
                prize: prizes[8],
            },
            {
                chance: 10,
                prize: prizes[9],
            },
            {
                chance: 10,
                prize: prizes[13],
            },
            {
                chance: 5,
                prize: prizes[18],
            },
            {
                chance: 5,
                prize: prizes[24],
            },
        ]
    },
]