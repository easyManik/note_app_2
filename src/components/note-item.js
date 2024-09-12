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

        const deleteButton = this.shadowRoot.querySelector("#delete-button");
        if (deleteButton) {
            deleteButton.addEventListener("click", this.handleDelete.bind(this));
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="note-item">
                <h3></h3>
                <p></p>
                <button id="delete-button">Delete</button>
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