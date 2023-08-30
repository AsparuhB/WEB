const authorlist = document.getElementById("authors");


authorArr = [];

data.forEach( (d) => {  
    authorArr.push({
        "Author": d.author,
        "Courses": 0
    })
})

console.log(authorArr)

