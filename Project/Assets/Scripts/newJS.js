const authorlist = document.getElementById("authors");

pictures = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=19"
]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(parseInt(getRandomArbitrary(0, 19)))


// authorArr = [];

// data.forEach((obj) => {
//     authorArr.push({
//     Author: obj.author,
//     Courses: 0
//   });
// });

// console.log(authorArr);
  
  const encounteredAuthors = new Set();
  const pureAuthorArr = [];
  
  data.forEach(article => {
    const author = article.author;
    if (!encounteredAuthors.has(author)) {
      encounteredAuthors.add(author);
      pureAuthorArr.push({
        "Name": author,
        "Courses": 0
      });
    }
  });

  for(const author in pureAuthorArr) {
    let courseCount = 0;
    for (const i in data) {
      if (pureAuthorArr[author].Name === data[i].author) {
        courseCount+= 1;
      } 
    }
    
    pureAuthorArr[author].Courses = courseCount
    authorlist.innerHTML += ` 
     <div class="container mt-2 mb-2 shadow-sm">
        <div class="lc-block">
      <img
        alt="image"
        class="rounded-circle float-start me-4"
        src="${pictures[parseInt(getRandomArbitrary(0, 19))]}"
        style="width: 5vh"
        loading="lazy"
      />
      <div editable="rich">
        <h4><strong>${pureAuthorArr[author].Name}</strong></h4>
      </div>
      <h5>Courses: <span class="badge bg-secondary">${pureAuthorArr[author].Courses}</span></h5>
      <div editable="rich">
        <p></p>
      </div>
    </div>
  </div>`;
    courseCount = 0
    console.log(pureAuthorArr[author])

  }


  
  // console.log("Unique authors:");
  // console.log(pureAuthorArr);
  
  
