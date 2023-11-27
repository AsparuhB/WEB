const authorListArr = [];
const courseId = []

class AuthorNameAndCourseCount {
  constructor(id, author,) {
    (this.id = id), (this.authorName = author); 
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
      }
    }
  }

  addingCourseCount() {
    this.addingAndFilteringAuthors();
    for (const author of authorListArr) {
      console.log(author.authorName);
      console.log(author.id)
      let courseCount = 0;
      for (const i in data) {
        if (author.authorName === data[i].author) {
          courseCount += 1;
          console.log(author.authorName === data[i].author);
          courseId.push(data[i].id);
        };
      }
    }
  }
}

new AuthorNameAndCourseCount().addingCourseCount();
console.log(authorListArr);
console.log(courseId);