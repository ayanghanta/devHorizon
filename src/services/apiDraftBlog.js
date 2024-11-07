const BASE_URL = `http://localhost:3000/api/v1/blogs/draft`;

export async function getDarftBlogs() {
  try {
    const res = await fetch(BASE_URL, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong in getting Drft blogs!');

    return data.data.blogs;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function saveDraftBlog(newBlog) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: newBlog,
      credentials: 'include',
    });

    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong in saving darft blog!');

    return data.data.blog;
  } catch (err) {
    throw new Error(err.message);
  }
}
