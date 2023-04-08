
// Arguments

// for (const iterator of object) { lam vs mang

// }

function write() {
    var myString = '';
    for (const param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
write('trung', 'trung1', 'trung2');