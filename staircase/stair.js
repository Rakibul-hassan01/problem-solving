


function makeDolors (n) {
    let dolors = ''
    for(let i = 1; i <= n; i++) {
        dolors += " "
    }
    return dolors;
}

function staircase (n) {
    let stars = "";
    for(let i = n; i >= 1; i--) {
        let spaces = makeDolors(i)
         stars += "*"
        console.log(stars + spaces);
    }
}

staircase(5);