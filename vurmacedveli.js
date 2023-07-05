function vurmaCedveliYarat() {
    let table=""
 

    for(let i=1; i<=10; i++) {
        for(let j=1; j<=10; j++) {
            let hasil = j*i

            table += j + "*" +i + "=" + hasil + "\t"
        }

        table +="\n" //new line


    }

    console.log(table)


}

vurmaCedveliYarat()