const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Network response was not ok');
  const users = await response.json();
  const userId = parseInt(id, 10);
  const user = users.find((u) => u.id === userId);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

export const fetchTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchPhotos = async () => {
    const response = await fetch(`${BASE_URL}/photos`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchAlbums = async () => {
    const response = await fetch(`${BASE_URL}/albums`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchComments = async () => {
    const response = await fetch(`${BASE_URL}/comments`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
};


export const fetchPosts = async () => {
    const response = (await fetch(`${BASE_URL}/posts`));
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};
