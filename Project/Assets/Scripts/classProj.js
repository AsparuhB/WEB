const authorListArr = [];
const pureAuthorArr = new Set();

class Component {
  constructor(id, title, content, authorName, timestamp, comments) {
    (this.id = id),
      (this.title = title),
      (this.content = content),
      (this.authorName = authorName),
      (this.timestamp = timestamp),
      (this.comments = comments);
  }

  renderAuthors() {}
}

for (const i of data) {
  const component = new Component(
    i.id,
    i.title,
    i.content,
    i.author,
    i.timestamp,
    i.comments
  );
  
}

console.log(authorListArr);