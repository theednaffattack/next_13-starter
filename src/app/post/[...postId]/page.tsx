import type { Post } from "@/app/sitemap";
import axios from "axios";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  return { title: data.title };
}

export default async function Page(props: PageProps) {
  return (
    <div>
      <h1>{props.searchParams.title}</h1>
      <p>{props.searchParams.body}</p>
    </div>
  );
}
