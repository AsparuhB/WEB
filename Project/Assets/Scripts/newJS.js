const authorList = document.getElementById("authors");
const coursesList = authorList.nextElementSibling;
const totalAuthorsAndComments = coursesList.nextElementSibling;
const modalHeader = document.getElementById("header-modal");
const modalBody = document.getElementById("header-body");
const pAuthors = document.getElementById("pAuthors");
const pCourses = pAuthors.nextElementSibling;
const commentSelect = document.getElementsByName("comments");
const authorSelectionElement = document.getElementsByName("authorElements");
const allCoursesButton = document.getElementById("myButton");
const authorName = document.getElementById("comment-username-input");
const commentText = document.getElementById("comment-input");
const commentInputButton = document.getElementById("comment-input-button");

let CURRENT_COURSE_ID = 0;

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

// filtering duplicate authors

const encounteredAuthors = new Set();
const pureAuthorArr = [];

data.forEach((article) => {
  const author = article.author;
  if (!encounteredAuthors.has(author)) {
    encounteredAuthors.add(author);
    pureAuthorArr.push({
      Name: author,
      Courses: 0,
      coursesId: [],
    });
  }
});

for (const author in pureAuthorArr) {
  let courseCount = 0;
  for (const i in data) {
    if (pureAuthorArr[author].Name === data[i].author) {
      courseCount += 1;
      pureAuthorArr[author].coursesId.push(data[i].id);
    }
  }

  pureAuthorArr[author].Courses = courseCount;
  authorList.innerHTML += ` 
     <div id="${
       pureAuthorArr[author].Name
     }" name="authorElements" class="container mt-2 mb-2 shadow-sm">
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

// Adding comments.
const addingCourseComments = () => {
  const usernameCommentInputValue = authorName.value;
  const commentInputValue = commentText.value;
  let commentId = data[CURRENT_COURSE_ID - 1].comments[data[CURRENT_COURSE_ID -1].comments.length - 1].id;
  if (
    commentInputValue.trim() === "" ||
    usernameCommentInputValue.trim() === ""
  ) {
    alert("Please enter a valid input!");
  } else {
    const newComment = {
      id: commentId + 1,
      text: commentInputValue,
      author: usernameCommentInputValue,
      timestamp: Date(Date.now().toString()),
    };
    data[CURRENT_COURSE_ID - 1].comments.push(newComment);
    console.log(CURRENT_COURSE_ID);
    console.log(data[CURRENT_COURSE_ID -1].comments[data[CURRENT_COURSE_ID -1].comments.length - 1].id);
    console.log(data[CURRENT_COURSE_ID -1].comments);
    authorName.value = "";
    commentText.value = "";
  }
  showingAllCourses();
};

// Showing the comments logic
const showingComments = () => {
  commentSelect.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonId = event.target.id;
      console.log("Button ID:", buttonId);
      CURRENT_COURSE_ID = +buttonId;
      console.log(CURRENT_COURSE_ID);
      for (const i in data) {
        if (data[i].id === +buttonId) {
          modalHeader.innerHTML = `
          <h1 class="modal-title fs-5" id="comment-modal-Label">
          Comments for "${data[i].title}"
        </h1>
          `;
          modalBody.innerHTML = "";
          for (c in data[i].comments) {
            modalBody.innerHTML += ` 
            <div class="container mt-2 mb-2 shadow-sm">
               <div class="lc-block">
             <div editable="rich">
               <h4><strong>${data[i].comments[c].author}</strong></h4>
             </div>
             <h5>${data[i].comments[c].text}</h5>
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
};

 // showing the courses.
const courseData = () => {
  coursesList.innerHTML = "";
  for (const obj in data) {
    let courseName = data[obj].title;
    let courseDescription = data[obj].content;
    let courseComments = data[obj].comments;
    let courseDate = data[obj].timestamp;
    let courseId = data[obj].id;

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
       <p class="text-center">${courseDescription}</p>
       <div class="row">
         <div class="col-md-6 text-center">
           <button id="${courseId}" name="comments" class="btn btn-primary rounded-pill px-3" type="button " data-bs-toggle="modal" data-bs-target="#comment-modal">
             Comments: ${courseComments.length}
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

pAuthors.innerHTML = `
  <p id="pAuthors">Authors: ${pureAuthorArr.length}</p>
  `;
pCourses.innerHTML = `
  <p>Courses: ${data.length}</p>

  `;

// showing specific author.

const showingSpecificAuthor = () => {
  authorSelectionElement.forEach((element) => {
    element.addEventListener("click", () => {
      for (const i in data) {
        if (element.id === data[i].author) {
          coursesList.innerHTML = "";
          data.forEach((course) => {
            if (course.author === element.id) {
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
                <h2 class="text-center">${course.title}</h2>
                <p class="text-center">${course.content}</p>
                <div class="row">
                  <div class="col-md-6 text-center">
                    <button id="${
                      course.id
                    }" name="comments" class="btn btn-primary rounded-pill px-3" type="button " data-bs-toggle="modal" data-bs-target="#comment-modal">
                      Comments: ${course.comments.length}
                    </button>
                  </div>
                  <div class="col-md-6 text-center">
                    <p>${Date(course.timestamp)}</p>
                  </div>
                </div>
              </div>
              `;
            }
          });
        }
      }
      showingComments();
    });
  });
};

const showingAllCourses = () => {
  courseData();
  showingComments();
};



courseData();
showingSpecificAuthor();
showingComments();

commentInputButton.addEventListener("click", addingCourseComments);
allCoursesButton.addEventListener("click", showingAllCourses);
