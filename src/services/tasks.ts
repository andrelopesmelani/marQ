export const getTasks = async () => {
  const response = await fetch("http://localhost:3000/tasks");
  return await response.json();
};

export const updateTaskStatus = async (id: number, newStatus: string) => {
  const updatedAt = new Date().toISOString();
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: newStatus, updatedAt }),
  });
  return await response.json();
};

export const createTask = async (title: string) => {
  const newTask = {
    title,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "Pendente",
  };
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  return await response.json();
};
