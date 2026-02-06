const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
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
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const fetchPosts = async () => {
  const response = (await fetch(`${BASE_URL}/posts`));
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
