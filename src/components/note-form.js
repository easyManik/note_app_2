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
                error.textContent = "Title cannot be empty!";
            } else {
                error.textContent = "";
            }
        });
    }
}
customElements.define("note-form", NoteForm);