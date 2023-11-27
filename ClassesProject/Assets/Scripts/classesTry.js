const authorListArr = [];

class AuthorNameAndCourseCount {
  constructor(id, authorName) {
    (this.id = id), (this.author = authorName);
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
}

new AuthorNameAndCourseCount().addingAndFilteringAuthors();

console.log(authorListArr);