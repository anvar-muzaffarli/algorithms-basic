function calculateFunction() {
    let x = parseInt(prompt("X-i daxil edin"))
    let y = parseInt(prompt("Y-i daxil edin"))

    let result

    if(x>0 && y<0) {
        result = 4*x + 2*y +4
    }

  

    else if(x>0 && y===0) {
        result = 2*x-y+3
    }

    else if(x<0 && y>0) {
        result = 3*x+4*y+3
    }

    else {
        console.log("Verilenler shertler xaricindedir")
        return
    }

    console.log("f(x,y)"+ result)
}


calculateFunction()