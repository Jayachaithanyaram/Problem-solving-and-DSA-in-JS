function numberPyramid(a) {
    for (let i = 1; i <= a; i++) {
        let linecontent = "";
        for (let spaceline = 1; spaceline <= a - i; spaceline++) {
            linecontent = linecontent + " "
        }
        for (let count = 1; count <= i; count++) {
            linecontent = linecontent + count;

        }
        for (let reversecount = i - 1; reversecount >= 1; reversecount--) {
            linecontent = linecontent + reversecount
        }
        console.log(linecontent)
    }
}
numberPyramid(5)