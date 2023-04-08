let trung = [
    {
        name: 'trung',
        age: 9,
        email: 'trung@gamil.com',
    },
    {
        name: 'cuong',
        age: 10,
        email: 'cuong@gamil.com',
    },
    {
        name: 'nhung',
        age: 11,
        email: 'nhung@gamil.com',
    },
    {
        name: 'hung',
        age: 12,
        email: 'hung@gamil.com',
    },

]

// function ham(couse) {
//     return {
//         name: `Tên là: ${couse.name}`,
//         age: `Tuổi là: ${couse.age}`,
//         email: `Email là: ${couse.email}`,
//     }
// }
const mapne = trung.map(function (c, i, o) {
    return {
        name: `Tên là: ${c.name}`,
        age: `Tuổi là: ${c.age}`,
        email: `Email là: ${c.email}`,
        i: i,
        o: o
    }
});

console.log(mapne);