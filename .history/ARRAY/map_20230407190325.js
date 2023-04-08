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
const mapne = trung.map(function (couse, index) {
    return {
        name: `Tên là: ${couse.name}`,
        age: `Tuổi là: ${couse.age}`,
        email: `Email là: ${couse.email}`,
        index: index
    }
});

console.log(mapne);