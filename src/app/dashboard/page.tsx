import axios from "axios";
import { wait } from "../../util/wait";
import { AuthRequiredError } from "../../lib/exceptions";
import { Post } from "../sitemap";

interface PageProps {}

const session = "fake-sesh";

export default async function Page({}: PageProps) {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!session) throw new AuthRequiredError();

  return (
    <div>
      Dashboard page
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h1>
              <a
                href={`http://localhost:9090/post/${post.id}?title=${post.title}&body=${post.body}`}
              >
                {post.title}
              </a>
            </h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
