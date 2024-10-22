const BASE_URL = `http://localhost:3000/api/v1/blogs`;

export async function getAllBlogs() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong !');

    return data.data.blogs;
  } catch (err) {
    console.log(err);
  }
}

export async function getBlog(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong !');

    return data.data.blog;
  } catch (err) {
    console.log(err);
  }
}

export async function createBlog(newBlog) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: newBlog,
    });

    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong !');

    return data.data.blog;
  } catch (err) {
    console.log(err);
  }
}
