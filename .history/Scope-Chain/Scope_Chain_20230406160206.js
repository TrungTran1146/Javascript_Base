let a = 5;
function trung1() {
    let b = a + 6;
    function trung2() {
        let f = 50
        console.log(a);
    }
    trung2();
    console.log(b);
    console.log(a);
}
trung1();
