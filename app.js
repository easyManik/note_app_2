const notesData = [
  {
    id: "notes-jT-jjsyz61J8XKiI",
    title: "Welcome to Notes, Dimas!",
    body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
    createdAt: "2022-07-28T10:03:12.594Z",
    archived: false,
  },
  {
    id: "notes-aB-cdefg12345",
    title: "Meeting Agenda",
    body: "Discuss project updates and assign tasks for the upcoming week.",
    createdAt: "2022-08-05T15:30:00.000Z",
    archived: false,
  },
  {
    id: "notes-XyZ-789012345",
    title: "Shopping List",
    body: "Milk, eggs, bread, fruits, and vegetables.",
    createdAt: "2022-08-10T08:45:23.120Z",
    archived: false,
  },
  {
    id: "notes-1a-2b3c4d5e6f",
    title: "Personal Goals",
    body: "Read two books per month, exercise three times a week, learn a new language.",
    createdAt: "2022-08-15T18:12:55.789Z",
    archived: false,
  },
  {
    id: "notes-LMN-456789",
    title: "Recipe: Spaghetti Bolognese",
    body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
    createdAt: "2022-08-20T12:30:40.200Z",
    archived: false,
  },
  {
    id: "notes-QwErTyUiOp",
    title: "Workout Routine",
    body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
    createdAt: "2022-08-25T09:15:17.890Z",
    archived: false,
  },
  {
    id: "notes-abcdef-987654",
    title: "Book Recommendations",
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: "2022-09-01T14:20:05.321Z",
    archived: false,
  },
  {
    id: "notes-zyxwv-54321",
    title: "Daily Reflections",
    body: "Write down three positive things that happened today and one thing to improve tomorrow.",
    createdAt: "2022-09-07T20:40:30.150Z",
    archived: false,
  },
  {
    id: "notes-poiuyt-987654",
    title: "Travel Bucket List",
    body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
    createdAt: "2022-09-15T11:55:44.678Z",
    archived: false,
  },
  {
    id: "notes-asdfgh-123456",
    title: "Coding Projects",
    body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
    createdAt: "2022-09-20T17:10:12.987Z",
    archived: false,
  },
  {
    id: "notes-5678-abcd-efgh",
    title: "Project Deadline",
    body: "Complete project tasks by the deadline on October 1st.",
    createdAt: "2022-09-28T14:00:00.000Z",
    archived: false,
  },
  {
    id: "notes-9876-wxyz-1234",
    title: "Health Checkup",
    body: "Schedule a routine health checkup with the doctor.",
    createdAt: "2022-10-05T09:30:45.600Z",
    archived: false,
  },
  {
    id: "notes-qwerty-8765-4321",
    title: "Financial Goals",
    body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
    createdAt: "2022-10-12T12:15:30.890Z",
    archived: false,
  },
  {
    id: "notes-98765-54321-12345",
    title: "Holiday Plans",
    body: "Research and plan for the upcoming holiday destination.",
    createdAt: "2022-10-20T16:45:00.000Z",
    archived: false,
  },
  {
    id: "notes-1234-abcd-5678",
    title: "Language Learning",
    body: "Practice Spanish vocabulary for 30 minutes every day.",
    createdAt: "2022-10-28T08:00:20.120Z",
    archived: false,
  },
];

class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ["title", "body"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .note-item {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin-bottom: 16px;
          }
          .note-title {
            font-size: 1.2em;
            margin-bottom: 8px;
          }
          .note-body {
            font-size: 1em;
          }
        </style>
        <div class="note-item">
          <div class="note-title">${this.getAttribute("title")}</div>
          <div class="note-body">${this.getAttribute("body")}</div>
        </div>
      `;
  }
}

class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .note-form {
            margin-bottom: 24px;
          }
          .note-form input, .note-form textarea, .note-form button {
            display: block;
            width: 100%;
            margin-bottom: 8px;
          }
          .note-form textarea {
            resize: vertical;
          }
          .error-message {
            color: red;
            font-size: 0.9em;
          }
        </style>
        <form id="note-form" class="note-form">
          <input type="text" id="title" placeholder="Title" required />
          <textarea id="body" placeholder="Body" rows="4" required></textarea>
          <button type="submit">Add Note</button>
          <div id="form-error" class="error-message"></div>
        </form>
      `;

    this.shadowRoot
      .getElementById("note-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const title = this.shadowRoot.getElementById("title").value;
        const body = this.shadowRoot.getElementById("body").value;

        if (title.trim() === "" || body.trim() === "") {
          this.shadowRoot.getElementById("form-error").textContent =
            "All fields are required.";
          return;
        }

        this.dispatchEvent(
          new CustomEvent("add-note", {
            detail: { title, body },
            bubbles: true,
            composed: true,
          })
        );

        this.shadowRoot.getElementById("note-form").reset();
        this.shadowRoot.getElementById("form-error").textContent = "";
      });

    this.shadowRoot.getElementById("title").addEventListener("input", (e) => {
      const title = e.target.value;
      const error = this.shadowRoot.getElementById("form-error");
      if (title.trim() === "") {
        error.textContent = "Title cannot be empty";
      } else {
        error.textContent = "";
      }
    });
  }
}

class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector("note-form")
      .addEventListener("add-note", (e) => {
        this.addNoteToList(e.detail.title, e.detail.body);
      });

    this.displayNotes(notesData);
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            max-width: 800px;
            margin: 0 auto;
            padding: 16px;
          }
          .notes-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
        </style>
        <note-form></note-form>
        <div class="notes-container" id="notes-container"></div>
      `;
  }

  addNoteToList(title, body) {
    const notesContainer = this.shadowRoot.getElementById("notes-container");
    const noteItem = document.createElement("note-item");
    noteItem.setAttribute("title", title);
    noteItem.setAttribute("body", body);
    notesContainer.appendChild(noteItem);
  }

  displayNotes(notes) {
    const notesContainer = this.shadowRoot.getElementById("notes-container");
    notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.setAttribute("title", note.title);
      noteItem.setAttribute("body", note.body);
      notesContainer.appendChild(noteItem);
    });
  }
}

customElements.define("note-item", NoteItem);
customElements.define("note-form", NoteForm);
customElements.define("app-root", AppRoot);
