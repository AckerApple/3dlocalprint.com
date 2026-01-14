export let editingIndex = null;

export const toggleRowEdit = (index) => {
  editingIndex = editingIndex === index ? null : index;
};

export const setEditingIndex = (index) => {
  editingIndex = index;
};
