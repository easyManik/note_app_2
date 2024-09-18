class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Untitled";
    const body = this.getAttribute("body") || "No content";

    this.shadowRoot.querySelector("h3").textContent = title;
    this.shadowRoot.querySelector("p").textContent = body;

    const deleteButton = this.shadowRoot.querySelector("#delete-btn");
    if (deleteButton) {
      deleteButton.addEventListener("click", this.handleDelete.bind(this));
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .note-item {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin-bottom: 16px;
            transition: box-shadow 0.3s ease;
          }

          .note-item:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }

          .delete-btn { 
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.9em;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .delete-btn:hover {
            background-color: #c82333;
          }

          h3 {
            font-size: 1.2em;
            font-weight: bold;
            color: #000000;
            margin-bottom: 8px;
          }

          p {
            font-size: 1em;
            color: #000000;
            margin-bottom: 12px;
          }
        </style>
        <div class="note-item">
            <h3></h3>
            <p></p>
            <button id="delete-btn" class="delete-btn">Delete</button>
        </div>
        `;
  }

  handleDelete() {
    const noteId = this.getAttribute("data-id");
    this.dispatchEvent(
      new CustomEvent("delete-note", {
        detail: { id: noteId },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("note-item", NoteItem);
