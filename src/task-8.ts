import axios from "axios";

const API_KEY = '50307425-541b949c038afe75b2e77934f'; 
const BASE_URL = 'https://task-8-api.com/';

interface Post {
  id: number;
  title: string;
  body: string;
}


async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});