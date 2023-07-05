function calculateAvarage() {
    let num1 = parseInt(prompt("Birinci ededi daxil edin")) 
    let num2 = parseInt(prompt("Ikinci ededi daxil edin"))
    
     let num3 = parseInt(prompt("Ucuncu ededi daxil edin"))
     
     let average = (num1+num2+num3)/3
     
     console.log(`Ededlerin ortalamasi  ${average}`)
}

calculateAvarage()
