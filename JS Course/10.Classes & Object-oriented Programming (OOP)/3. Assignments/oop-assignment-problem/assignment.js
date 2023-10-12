class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  set correctPrice(price) {
    this.price = price;
    if (price < 0) {
      alert("Please enter a positive value");
      console.log("Hello");
      return;
    }
  }

correctPrice = this.price

  get correctPrice() {
    return (this.correctPrice = `\$${this.correctPrice}`);
  }

  courseOverview() {
    return `This course is a ${this.title}. You will get ${this.length} minutes of quality content for the mere price of ${this.correctPrice}.`;
  }

  sumCalculate() {
    let sum = this.length / this.price;
    return (
      `You get ${sum.toFixed(2)} minutes per dollar paid of the ${
        this.title
      }.` + this.courseOverview()
    );
  }
}

const course1 = new Course("Hentai Course", 18, 19.99);
const course2 = new Course("JavaScript Course", 49, 79.99);

console.log(course1, course2);
console.log(course1.sumCalculate());
console.log(course2.sumCalculate());

class PracticalCourse extends Course {
  constructor(title, length, price, numOFExercises) {
    super(title, length, price);
    this.numOFExercises = numOFExercises;
  }

  render() {
    return (
      this.sumCalculate() + ` You also get ${this.numOFExercises} exercises.`
    );
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  render() {
    return this.sumCalculate();
  }
  publish() {
    console.log("Print something to the console.");
  }
}

const pracCourse = new PracticalCourse("CSS Course", 25, 38.99, 5);
const theorCourse = new TheoreticalCourse("Python Course", 112, 190, 45);

console.log(pracCourse.render());
console.log(theorCourse.render());
theorCourse.publish();
