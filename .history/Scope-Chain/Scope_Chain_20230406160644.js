let a = 5;
function trung1() {
    var b = 6;
    function trung2() {
        var f = 50
        console.log(a);
    }
    trung2();
    console.log(b);
    console.log(f);
}
trung1();
console.log(a);