let num = 5;
for (let i = 1; i <= num; i++) {
    let line = "";
    for (let s = 1; s <= num - i; s++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += j + "";
    }


    console.log(line)
}
for (let i = num - 1; i >= 1; i--) {
    let line = "";
    for (let s = 1; s <= num - i; s++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += j + "";
    }


    console.log(line)
}

