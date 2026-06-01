const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function isStrongPassword(password) {
    // Conditions
    const minLength = password.length >= 6;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
}
rl.question("enter password: ", input => {
    console.log(isStrongPassword(input));
    rl.close()
})