const authorListArr = [];
const componentArray = [];

let CURRENT_COURSE_ID = 0;

class CourseComponent {
  constructor(
    id,
    courseTitle,
    courseContent,
    courseAuthor,
    timeStamp,
    courseComments,
    courseCount
  ) {
    (this.id = id),
      (this.courseTitle = courseTitle),
      (this.courseContent = courseContent),
      (this.courseAuthor = courseAuthor),
      (this.timeStamp = timeStamp),
      (this.courseComments = courseComments);
    this.courseCount = courseCount;
  }

  createEL() {
    for (const el of data) {
      const component = new CourseComponent(
        el.id,
        el.title,
        el.content,
        el.author,
        el.timestamp,
        el.comments
      );
      componentArray.push(component);
    }
  }
}

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

class AuthorNameAndCourseCount extends CourseComponent {
  constructor(id, author, courseCount) {
    super(id, author);
    (this.id = id),
      (this.authorName = author),
      (this.courseCount = courseCount);
  }

  addingAndFilteringAuthors() {
    this.createEL();
    const encounteredAuthors = new Set();
    for (const dataItem of data) {
      const authorComponent = new CourseComponent(
        dataItem.id,
        dataItem.content,
        dataItem.content,
        dataItem.author,
        this.courseCount
      );
      if (!encounteredAuthors.has(dataItem.author)) {
        encounteredAuthors.add(dataItem.author);
        authorListArr.push(authorComponent);
      }
    }
  }

  calculatingCourses() {
    this.addingAndFilteringAuthors();
    for (const author of authorListArr) {
      author.courseCount = 0;
      for (const dataEl in data) {
        if (author.courseAuthor === data[dataEl].author) {
          author.courseCount += 1;
        }
      }
    }
  }

  authorRender() {
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
         <h4><strong>${author.courseAuthor}</strong></h4>
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

// various things with the courses... turned out, not the way I want it...
class CourseSection extends CourseComponent {
  constructor() {
    super();
  }

  coursesRender() {
    const coursesList = document.getElementById('courses-section');
    const courseEl = document.createElement('div');
    courseEl.className = 'course-list-element';
    for (const courseComponent of componentArray) {
      // console.log(courseComponent.courseComments);
      // COMMENT_COUNT = courseComponent.courseComments.length;
      courseEl.innerHTML += `
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
       <h2 class="text-center">${courseComponent.courseTitle}</h2>
       <p class="text-center">${courseComponent.courseContent}</p>
       <div class="row">
         <div class="col-md-6 text-center">
           <button id="${
             courseComponent.id
           }" name="comments" class="btn btn-primary rounded-pill px-3" type="button " data-bs-toggle="modal" data-bs-target="#comment-modal">
             Comments: ${courseComponent.courseComments.length}
           </button>
         </div>
         <div class="col-md-6 text-center">
           <p>${Date(courseComponent.timeStamp)}</p>
         </div>
       </div>
     </div>
     `;
    }
    coursesList.append(courseEl);
  }

  commentsRender() {
    const commentSection = document.getElementsByName('comments');
    const modalHeader = document.getElementById('header-modal');
    const modalBody = document.getElementById('header-body');
    commentSection.forEach((buttonEl) => {
      buttonEl.addEventListener('click', (event) => {
        const buttonId = +event.target.id;
        CURRENT_COURSE_ID = +buttonId;

        console.log(`Button Id: ${buttonId}`);
        modalBody.innerHTML = '';
        for (const authorComp of componentArray) {
          for (const comment of authorComp.courseComments) {
            if (buttonId === authorComp.id) {
              modalHeader.innerHTML = `
              <h1 class="modal-title fs-5" id="comment-modal-Label">
              Comments for "${authorComp.courseTitle}"
            </h1>
              `;
              modalBody.innerHTML += `
            <div class="container mt-2 mb-2 shadow-sm">
               <div class="lc-block">
             <div editable="rich">
               <h4><strong>${comment.author}</strong></h4>
             </div>
             <h5>${comment.text}</h5>
             <div editable="rich">
               <p></p>
             </div>
           </div>
         </div>`;
            }
          }
        }
      });
    });
  }

  addingComments() {
    const commentAuthorName = document.getElementById('comment-username-input');
    const commentText = document.getElementById('comment-input');

    const usernameCommentInputValue = commentAuthorName.value;
    const commentInputValue = commentText.value;
    let commentId =
      componentArray[CURRENT_COURSE_ID - 1].courseComments[
        componentArray[CURRENT_COURSE_ID - 1].courseComments.length - 1
      ].id;

    const newComment = {
      id: commentId + 1,
      text: commentInputValue,
      author: usernameCommentInputValue,
      timestamp: Date(Date.now().toString()),
    };
    componentArray[CURRENT_COURSE_ID - 1].courseComments.push(newComment);
    // console.log(componentArray[CURRENT_COURSE_ID - 1].courseComments);
    commentAuthorName.value = '';
    commentText.value = '';

    const commentButton = document.getElementsByName('comments');
    if (commentButton[CURRENT_COURSE_ID - 1].id == CURRENT_COURSE_ID) {
      commentButton[CURRENT_COURSE_ID - 1].innerHTML = `Comments: ${
        componentArray[CURRENT_COURSE_ID - 1].courseComments.length
      }`;
    }
  }

  addedCommentRender() {
    const commentInputButton = document.getElementById('comment-input-button');
    commentInputButton.addEventListener('click', this.addingComments);
  }

  allRender() {
    this.coursesRender();
    this.commentsRender();
    this.addedCommentRender();
  }
}

class ShowingAllCourses {
  allAuthorsAndCoursesRender() {
    const allAuthorsLength = document.getElementById('allAuthors');
    const allCoursesLength = allAuthorsLength.nextElementSibling;
    allAuthorsLength.innerHTML = `
    <p class="container" id="allAuthors">Authors: ${authorListArr.length}</p>`;
    allCoursesLength.innerHTML = `
    <p class="container">Courses:${data.length}</p>
    `;
  }

  renderingAllCourses() {
    this.allAuthorsAndCoursesRender();
    const allCoursesButton = document.getElementById('myButton');
    allCoursesButton.addEventListener('click', this.coursesRender);
  }
}



new AuthorNameAndCourseCount().authorRender();
new CourseSection().allRender();
new ShowingAllCourses().renderingAllCourses();
console.log(componentArray);


