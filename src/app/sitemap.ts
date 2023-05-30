export interface Post {
  id: string;
  title: string;
  body: string;
}

export async function sitemap() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts = await res.json();

  const posts = allPosts.map((post: Post) => {
    return {
      url: `https://localhost:9090/post/${post.id}`,
      lastModified: new Date().toISOString(),
    };
  });

  const routes = [].map((route) => {
    return {
      url: `https://localhost:9090/${route}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...routes, ...posts];
}
