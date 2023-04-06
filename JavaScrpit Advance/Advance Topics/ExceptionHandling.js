var a = 9;
var b = 0;

try {
    if (b == 0) {
        throw ("Can't divide by Zero");
    } else {
        console.log(a / b);
    }
} catch (error) {
    console.log(error);
} finally {

}