import axios from "axios";
import { wait } from "../../util/wait";
import { AuthRequiredError } from "../lib/exceptions";

interface PageProps {}

const session = null;

export default async function Page({}: PageProps) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  // await wait(3000);
  if (!session) throw new AuthRequiredError();

  return (
    <div>
      Dashboard page
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
