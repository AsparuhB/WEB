const authorListArr = [];

pictures = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
  'https://i.pravatar.cc/150?img=7',
  'https://i.pravatar.cc/150?img=8',
  'https://i.pravatar.cc/150?img=9',
  'https://i.pravatar.cc/150?img=10',
  'https://i.pravatar.cc/150?img=11',
  'https://i.pravatar.cc/150?img=12',
  'https://i.pravatar.cc/150?img=13',
  'https://i.pravatar.cc/150?img=14',
  'https://i.pravatar.cc/150?img=15',
  'https://i.pravatar.cc/150?img=16',
  'https://i.pravatar.cc/150?img=17',
  'https://i.pravatar.cc/150?img=18',
  'https://i.pravatar.cc/150?img=19',
];

function getRandomPicture(min, max) {
  return Math.random() * (max - min) + min;
}

class AuthorNameAndCourseCount {
  constructor(id, author, courseCount) {
    (this.id = id),
      (this.authorName = author),
      (this.courseCount = courseCount);
  }

  addingAndFilteringAuthors() {
    const encounteredAuthors = new Set();
    for (const dataItem of data) {
      const authorComponent = new AuthorNameAndCourseCount(
        dataItem.id,
        dataItem.author
      );
      if (!encounteredAuthors.has(dataItem.author)) {
        encounteredAuthors.add(dataItem.author);
        authorListArr.push(authorComponent);
        authorComponent.courseCount = 0;
      }
    }
  }

  calculatingCourses() {
    this.addingAndFilteringAuthors();

  }

  render() {
    this.calculatingCourses();
    const authorSection = document.getElementById('authors');
    const authorListEl = document.createElement('div');
    authorListEl.className = 'author-list-element';
    for (const author of authorListArr) {
      const authorEl = document.createElement('div');
      authorEl.className = 'authorLEl';
      authorEl.innerHTML = `
      <div id="${
        author.id
      }" name="authorElements" class="container mt-2 mb-2 shadow-sm">
         <div class="lc-block">
       <img
         alt="image"
         class="rounded-circle float-start me-4"
         src="${pictures[parseInt(getRandomPicture(0, 19))]}"
         style="width: 5vh"
         loading="lazy"
       />
       <div editable="rich">
         <h4><strong>${author.authorName}</strong></h4>
       </div>
       <h5>Courses: <span class="badge bg-secondary">${
         author.courseCount
       }</span></h5>
       <div editable="rich">
         <p></p>
       </div>
     </div>
   </div>`;
      // courseCount = 0;
      authorListEl.append(authorEl);
    }
    authorSection.append(authorListEl);
  }
}

new AuthorNameAndCourseCount().render();
console.log(authorListArr);
