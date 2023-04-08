var a = 5;
function trung1() {
    var b = 6;
    function trung2() {
        var c = b + 7;
        console.log(c);
    }
    trung2();
    console.log(a);
}
trung1();
