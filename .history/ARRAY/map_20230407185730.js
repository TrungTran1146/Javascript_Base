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

const mapne = trung.map(function (couse) {
    return {
        name: `Tên là: ${couse.name}`,
    }
});