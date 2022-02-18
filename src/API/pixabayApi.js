
const KEY = "24347539-7a784c76778ec6b315780761f";

async function fetchPictures(name, page = 1) {
  const response = await fetch(`?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error(`Something went wrong. Try again.`)
  );
}

const Api = {
  fetchPictures
}

export default Api;