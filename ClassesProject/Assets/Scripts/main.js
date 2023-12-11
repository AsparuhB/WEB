const data = [
      {
        "id": 1,
        "title": "Introduction to JSON",
        "content": "JSON (JavaScript Object Notation) is a lightweight data interchange format...",
        "author": "JohnDoe",
        "timestamp": "2023-08-28T10:00:00",
        "comments": [
          {
            "id": 1,
            "text": "Great introduction! Looking forward to learning more.",
            "author": "Alice",
            "timestamp": "2023-08-28T11:30:00"
          },
          {
            "id": 2,
            "text": "Thanks for the clear explanation.",
            "author": "Bob",
            "timestamp": "2023-08-28T12:15:00"
          }
        ]
      },
      {
        "id": 2,
        "title": "Working with Databases",
        "content": "Databases are essential for storing and managing structured...",
        "author": "JaneSmith",
        "timestamp": "2023-08-28T14:30:00",
        "comments": [
          {
            "id": 3,
            "text": "This is really helpful. I struggled with databases before.",
            "author": "Charlie",
            "timestamp": "2023-08-28T16:00:00"
          }
        ]
      },
      {
        "id": 3,
        "title": "Web Development Best Practices",
        "content": "When developing web applications, it's important to follow...",
        "author": "WebDevMaster",
        "timestamp": "2023-08-29T09:15:00",
        "comments": [
          {
            "id": 4,
            "text": "I appreciate the tips. These will come in handy.",
            "author": "Eve",
            "timestamp": "2023-08-29T11:30:00"
          },
          {
            "id": 5,
            "text": "Great article! Keep up the good work.",
            "author": "Frank",
            "timestamp": "2023-08-29T13:45:00"
          }
        ]
      },
      {
        "id": 4,
        "title": "Getting Started with React",
        "content": "React is a JavaScript library for building user interfaces...",
        "author": "ReactFan123",
        "timestamp": "2023-08-30T16:45:00",
        "comments": [
          {
            "id": 6,
            "text": "I've been wanting to learn React. Thanks for this!",
            "author": "Grace",
            "timestamp": "2023-08-30T18:30:00"
          }
        ]
      },
      {
        "id": 5,
        "title": "Python Programming Tips",
        "content": "Python is a versatile programming language that's great for beginners...",
        "author": "PyCoder2000",
        "timestamp": "2023-08-31T08:20:00",
        "comments": [
          {
            "id": 7,
            "text": "These tips are helping me a lot in my Python journey.",
            "author": "Helen",
            "timestamp": "2023-08-31T10:15:00"
          }
        ]
      },
      {
        "id": 6,
        "title": "Machine Learning Basics",
        "content": "Machine learning is a subset of artificial intelligence...",
        "author": "MLGeek",
        "timestamp": "2023-09-01T11:10:00",
        "comments": [
          {
            "id": 8,
            "text": "This is a fascinating field. Looking forward to more!",
            "author": "Ian",
            "timestamp": "2023-09-01T13:00:00"
          }
        ]
      },
      {
        "id": 7,
        "title": "The Power of CSS Grid",
        "content": "CSS Grid is a layout model that allows you to design complex...",
        "author": "CSSWizard",
        "timestamp": "2023-09-02T13:55:00",
        "comments": [
          {
            "id": 9,
            "text": "CSS Grid has changed the way I design layouts. Thanks!",
            "author": "Jack",
            "timestamp": "2023-09-02T15:30:00"
          }
        ]
      },
      {
        "id": 8,
        "title": "Navigating the Command Line",
        "content": "The command line or terminal is a powerful tool for interacting...",
        "author": "TerminalUser99",
        "timestamp": "2023-09-03T09:40:00",
        "comments": [
          {
            "id": 10,
            "text": "I've always been intimidated by the command line. Learning a lot!",
            "author": "Kelly",
            "timestamp": "2023-09-03T11:15:00"
          }
        ]
      },
      {
        "id": 9,
        "title": "Exploring Java Collections",
        "content": "Java provides a rich set of built-in collections classes...",
        "author": "JavaDevGuru",
        "timestamp": "2023-09-04T14:25:00",
        "comments": [
          {
            "id": 11,
            "text": "Java collections can be tricky, but your explanations are clear.",
            "author": "Liam",
            "timestamp": "2023-09-04T16:00:00"
          }
        ]
      },
      {
        "id": 10,
        "title": "Design Principles for Mobile Apps",
        "content": "Mobile app design requires attention to user experience...",
        "author": "MobileUXDesigner",
        "timestamp": "2023-09-05T10:30:00",
        "comments": [
          {
            "id": 12,
            "text": "As a designer, I find these principles very useful. Thanks!",
            "author": "Mia",
            "timestamp": "2023-09-05T12:00:00"
          }
        ]
      },
      {
        "id": 11,
        "title": "Database Management with SQL",
        "content": "Structured Query Language (SQL) is the standard language...",
        "author": "SQLMaster",
        "timestamp": "2023-09-06T12:15:00",
        "comments": [
          {
            "id": 13,
            "text": "SQL can be challenging, but your examples make it easier to understand.",
            "author": "Nathan",
            "timestamp": "2023-09-06T14:30:00"
          }
        ]
      },
      {
        "id": 12,
        "title": "Introduction to HTML5",
        "content": "HTML5 is the latest version of the Hypertext Markup Language...",
        "author": "HTMLDev123",
        "timestamp": "2023-09-07T15:00:00",
        "comments": [
          {
            "id": 14,
            "text": "HTML5 is opening up so many possibilities. Thanks for this!",
            "author": "Olivia",
            "timestamp": "2023-09-07T17:15:00"
          }
        ]
      },
      {
        "id": 13,
        "title": "JavaScript Functions and Scopes",
        "content": "Functions are a fundamental building block in JavaScript...",
        "author": "JSNinja",
        "timestamp": "2023-09-08T11:45:00",
        "comments": [
          {
            "id": 15,
            "text": "Functions were confusing for me, but your explanations cleared things up.",
            "author": "Peter",
            "timestamp": "2023-09-08T14:00:00"
          }
        ]
      },
      {
        "id": 14,
        "title": "Cybersecurity Tips for Beginners",
        "content": "Cybersecurity is important to protect your online presence...",
        "author": "SecureSurfer",
        "timestamp": "2023-09-09T09:20:00",
        "comments": [
          {
            "id": 16,
            "text": "I'm learning a lot about online safety. Keep these tips coming!",
            "author": "Quincy",
            "timestamp": "2023-09-09T11:30:00"
          }
        ]
      },
      {
        "id": 15,
        "title": "Getting Started with Node.js",
        "content": "Node.js is a JavaScript runtime that allows you to run...",
        "author": "NodeNerd",
        "timestamp": "2023-09-10T17:30:00",
        "comments": [
          {
            "id": 17,
            "text": "I've been curious about Node.js. Thanks for the beginner-friendly guide.",
            "author": "Rachel",
            "timestamp": "2023-09-10T19:00:00"
          }
        ]
      },
      {
        "id": 16,
        "title": "Responsive Web Design Techniques",
        "content": "Responsive design ensures your website looks and functions well...",
        "author": "AIFanatic",
        "timestamp": "2023-09-11T14:10:00",
        "comments": [
          {
            "id": 18,
            "text": "Responsive design has improved my sites' usability. Thanks!",
            "author": "Samuel",
            "timestamp": "2023-09-11T16:00:00"
          }
        ]
      },
      {
        "id": 17,
        "title": "Artificial Intelligence in Entertainment",
        "content": "AI is transforming the entertainment industry by enabling...",
        "author": "AIFanatic",
        "timestamp": "2023-09-12T12:05:00",
        "comments": [
          {
            "id": 19,
            "text": "AI's applications in entertainment are mind-blowing. Great article!",
            "author": "Tina",
            "timestamp": "2023-09-12T14:20:00"
          }
        ]
      },
      {
        "id": 18,
        "title": "Exploring Python Libraries",
        "content": "Python offers a wide range of libraries and modules...",
        "author": "PyLibraryExplorer",
        "timestamp": "2023-09-13T10:50:00",
        "comments": [
          {
            "id": 20,
            "text": "Python's libraries have made my projects more efficient. Thanks for the info!",
            "author": "Ulysses",
            "timestamp": "2023-09-13T13:00:00"
          }
        ]
      },
      {
        "id": 19,
        "title": "Getting Started with Git and Version Control",
        "content": "Version control is essential for collaborative software...",
        "author": "GitGuru",
        "timestamp": "2023-09-14T09:15:00",
        "comments": [
          {
            "id": 21,
            "text": "Git was confusing at first, but your guide made it easier.",
            "author": "Victoria",
            "timestamp": "2023-09-14T11:00:00"
          }
        ]
      },
      {
        "id": 20,
        "title": "Modern UI Design Trends",
        "content": "User interface design trends are constantly evolving...",
        "author": "UIDesignTrendsetter",
        "timestamp": "2023-09-15T16:00:00",
        "comments": [
          {
            "id": 22,
            "text": "I'm always excited to see what's new in UI design. Great insights!",
            "author": "William",
            "timestamp": "2023-09-15T18:15:00"
          }
        ]
      }
    ];
