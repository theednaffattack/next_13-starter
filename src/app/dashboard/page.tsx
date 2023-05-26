import axios from "axios";

interface PageProps {}

export default async function Page({}: PageProps) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <div>
      Dashboard page
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
