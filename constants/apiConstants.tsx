export const baseURL = 'https://jsonplaceholder.typicode.com';
export const getAllUsersURL = baseURL + '/users';
export const getAllPostsURL = baseURL + '/posts';
export const getPostByIdURL = baseURL + '/posts/';
export const getAllCommentsByPostURL = (id: number) => { return (baseURL + `/posts/${id}/comments`) }
export const getAllCommentsURL = baseURL + '/comments'