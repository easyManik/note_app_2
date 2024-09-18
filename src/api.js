const API_BASE_URL = "https://notes-api.dicoding.dev/v2";

export const getNotes = async () => {
  const response = await fetch(`${API_BASE_URL}/notes`);
  const result = await response.json();
  return result.data;
};

export const addNoteAPI = async (title, body) => {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  const result = await response.json();
  return result;
};

export const deleteNoteAPI = async (id) => {
  await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });
};
