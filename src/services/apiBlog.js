const BASE_URL = `http://localhost:3000/api/v1/blogs`;

export async function getPublishedBlogs(aliasUrl = '') {
  let reqUrl = BASE_URL;
  if (aliasUrl) reqUrl = `${BASE_URL}/${aliasUrl}`;

  try {
    const res = await fetch(reqUrl);
    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong in getting all blogs!');

    return data.data.blogs;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getBlog(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong in getting blog!');

    return data.data.blog;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createBlog(newBlog) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: newBlog,
      credentials: 'include',
    });

    const data = await res.json();
    if (!data.ok) throw new Error('Somthing went wrong in creating new blog!');

    return data.data.blog;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateBlog(id, blogData) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      body: blogData,
      credentials: 'include',
    });

    const data = await res.json();
    console.log(data);
    if (!data.ok) throw new Error('Somthing went wrong in updaing Blog!');

    return data.data.blog;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updatePublishing(id, publishData) {
  console.log(JSON.stringify(publishData));
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(publishData),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
    console.log(data);
    if (!data.ok) throw new Error('Somthing went wrong in publishing/hiding');

    return data.data.blog;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteBlog(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    const data = await res.json();
    console.log(data);
    if (!data.ok) throw new Error(data.message);

    return null;
  } catch (err) {
    throw new Error(err.message);
  }
}
