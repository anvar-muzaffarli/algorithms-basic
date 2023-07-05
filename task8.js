function calculateLetterGrade() {
    let istifadecininDaxilEtdiyiBal = parseInt(prompt("Qiymetinizi daxil edin"))
    let herfQiymeti //undefiend


    // switch case

    switch(true) {
        case istifadecininDaxilEtdiyiBal >=91 && istifadecininDaxilEtdiyiBal <=100:
            herfQiymeti="A"
            break;

        case istifadecininDaxilEtdiyiBal >=81 && istifadecininDaxilEtdiyiBal <=90:
                herfQiymeti="B"
                break;
    
        case istifadecininDaxilEtdiyiBal >=71 && istifadecininDaxilEtdiyiBal <=80:
                    herfQiymeti="C"
                    break;

        case istifadecininDaxilEtdiyiBal >=61 && istifadecininDaxilEtdiyiBal <=70:
                        herfQiymeti="D"
                        break;

        case istifadecininDaxilEtdiyiBal >=51 && istifadecininDaxilEtdiyiBal <=60:
                            herfQiymeti="E"
                            break;
        default:
            herfQiymeti="F"
        }

        console.log("Qiymetlendirme sistemi" , herfQiymeti)
}


calculateLetterGrade()
