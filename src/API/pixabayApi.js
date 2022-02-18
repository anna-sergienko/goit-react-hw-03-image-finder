
const KEY = "24347539-7a784c76778ec6b315780761f";

async function fetchPictures(name, page = 1) {
  const response = await fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  console.log(response)
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error(`Something went wrong. Try again.`)
  );
}

const Api = {
  fetchPictures
}

export default Api;