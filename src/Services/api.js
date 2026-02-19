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
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
};


export const fetchPosts = async () => {
    const response = (await fetch(`${BASE_URL}/posts`));
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchMyPosts = async (userId) => {
    if (!userId || typeof userId !== 'number' || userId <= 0) {
        throw new Error('userId must be a positive number');
    }

    const response = (await fetch(`${BASE_URL}/posts?userId=${userId}`));
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchPostById = async (id) => {
    if (!id || typeof id !== 'number' || id <= 0) {
        throw new Error('id must be a positive number');
    }

    const response = (await fetch(`${BASE_URL}/posts/${id}`));
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchCommentsByPostId = async (postId) => {
    if (!postId || typeof postId !== 'number' || postId <= 0) {
        throw new Error('postId must be a positive number');
    }
        const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
};

export const createPost = async (postData) => {
    if (!postData || typeof postData !== 'object') {
        throw new Error('postData must be an object');
    }
    const { title, body, userId } = postData;
    if (typeof title !== 'string' || title.trim() === '') {
        throw new Error('Title is required and must be a non-empty string');
    }
    if (typeof body !== 'string' || body.trim() === '') {
        throw new Error('Body is required and must be a non-empty string');
    }
    if (typeof userId !== 'number' || userId <= 0) {
        throw new Error('userId must be a positive number');
    }


    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}
