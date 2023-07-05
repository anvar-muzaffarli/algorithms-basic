// ajax
// https://jsonplaceholder.typicode.com/posts
// http
// const istek = new XMLHttpRequest()

// const url = "https://jsonplaceholder.typicode.com/posts"

// istek.open("GET", url)

// istek.onload= function() {
//     if(istek.status === 200) {
//         const cavab = JSON.parse(istek.responseText)
//         console.log(cavab)
//     }

//     else {
//         console.error("Istek ugursuz oldu"+ istek.status) //500 400
//     }
// }



// istek.onerror = function() {
//     console.error("Istek xeta bash verdi ") //500 400
// }

// istek.send()


// PROMISE 
const url ="https://jsonplaceholder.typicode.com/posts"

fetch(url)
        .then(cavab => {
            if(cavab.ok) {
              return cavab.json()  
            }
            else {
                throw new Error("Request ugursuz oldu")
            }
        })
        .then(melumat=>console.log(melumat))
        .catch(xeta=>console.log("Xeta bash verdi"+xeta))

