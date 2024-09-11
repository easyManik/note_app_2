import { getNotes, addNoteAPI, deleteNoteAPI } from "../api.js";
import "./note-form.js";
import "./note-item.js";

class AppRoot extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render();
        this.showLoading(true);
        try {
            const notes = await getNotes();
            this.showLoading(false);
            this.displayNotes(notes);

            this.shadowRoot
                .getElementById("notes-container")
                .addEventListener("delete-note", async(e) => {
                    const noteId = e.detail.id;
                    try {
                        await deleteNoteAPI(noteId);
                        const noteItem = this.shadowRoot.querySelector(
                            `note-item[data-id='${noteId}']`
                        );
                        if (noteItem) {
                            noteItem.remove();
                        }
                    } catch (error) {
                        alert(`Failed to delete note. ${error}`);
                    }
                });

            this.shadowRoot
                .querySelector("note-form")
                .addEventListener("add-note", async(e) => {
                    const { title, body } = e.detail;

                    this.showLoading(true);
                    try {
                        const newNote = await addNoteAPI(title, body);
                        this.showLoading(false);
                        this.addNoteToList(
                            newNote.data.title,
                            newNote.data.body,
                            newNote.data.id
                        );
                    } catch (error) {
                        alert(`Failed to add note. ${error}`);
                        this.showLoading(false);
                    }
                });
        } catch (error) {
            this.showLoading(false);
        }
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
          #loading {
            display: none;
            text-align: center;
            margin: 20px 0;
          }
          #loading.active {
            display: block;
          }
        </style>
        <div id="loading">Loading...</div>
        <note-form></note-form>
        <div class="notes-container" id="notes-container"></div>
      `;
    }

    addNoteToList(title, body, id) {
        const notesContainer = this.shadowRoot.getElementById("notes-container");
        const noteItem = document.createElement("note-item");
        noteItem.setAttribute("title", title);
        noteItem.setAttribute("body", body);
        noteItem.setAttribute("data-id", id);
        notesContainer.appendChild(noteItem);

        noteItem.addEventListener("delete-note", async(e) => {
            try {
                await deleteNoteAPI(e.detail.id);
                noteItem.remove();
            } catch (error) {
                alert(`Failed to delete ${e.detail.title}`);
            }
        });
    }

    displayNotes(notes) {
        const notesContainer = this.shadowRoot.getElementById("notes-container");

        notes.forEach((note) => {
            const noteItem = document.createElement("note-item");
            noteItem.setAttribute("title", note.title);
            noteItem.setAttribute("body", note.body);
            noteItem.setAttribute("data-id", note.id);
            notesContainer.appendChild(noteItem);
        });
    }

    showLoading(isLoading) {
        const loadingElement = this.shadowRoot.getElementById("loading");
        if (isLoading) {
            loadingElement.classList.add("active");
        } else {
            loadingElement.classList.remove("active");
        }
    }
}
customElements.define("app-root", AppRoot);