const authorList = document.getElementById("authors");
const coursesList = authorList.nextElementSibling;

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
  "https://i.pravatar.cc/150?img=19",
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

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

const authorsAdded = () => {
  data.forEach((article) => {
    const author = article.author;
    if (!encounteredAuthors.has(author)) {
      encounteredAuthors.add(author);
      pureAuthorArr.push({
        Name: author,
        Courses: 0,
      });
    }
  });

  for (const author in pureAuthorArr) {
    let courseCount = 0;
    for (const i in data) {
      if (pureAuthorArr[author].Name === data[i].author) {
        courseCount += 1;
      }
    }

    pureAuthorArr[author].Courses = courseCount;
    authorList.innerHTML += ` 
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
      <h5>Courses: <span class="badge bg-secondary">${
        pureAuthorArr[author].Courses
      }</span></h5>
      <div editable="rich">
        <p></p>
      </div>
    </div>
  </div>`;
    courseCount = 0;
  }
};

const coursesAdded = () => {
  for (const obj in data) {
    let courseName = data[obj].title;
    let courseDescr = data[obj].content;
    let courseComments = data[obj].comments;
    let courseDate = data[obj].timestamp;

    coursesList.innerHTML += `
   <div class="container mt-2 mb-2 col-md-6">
   <!-- Courses section -->
   <div class="container shadow-sm">
     <div class="text-center">
       <img
         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FFunny-Random-Wallpaper-1.jpg&f=1&nofb=1&ipt=c26e9fc128e917745d19e4a14e2fecd94ccc42f6c03f6c0b14b21bbaf2479cae&ipo=images"
         class="img-fluid"
         alt="..."
       />
     </div>
     <h2 class="text-center">${courseName}</h2>
     <p class="text-center">${courseDescr}</p>
     <div class="row">
       <div class="col-md-6 text-center">
         <button class="btn btn-primary rounded-pill px-3" type="button">
           ${"Comments"}
         </button>
       </div>
       <div class="col-md-6 text-center">
         <p>${Date(courseDate)}</p>
       </div>
     </div>
   </div>
   
   `;
  }
};

coursesAdded();
authorsAdded();
