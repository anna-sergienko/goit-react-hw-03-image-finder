
const API_KEY = "24347539-7a784c76778ec6b315780761f";

async function fetchPictures(name, page = 1) {
  const response = await fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error(`Oops( We have some problems( Try again!`)
  );
}

const Api = {
  fetchPictures
}

export default Api;