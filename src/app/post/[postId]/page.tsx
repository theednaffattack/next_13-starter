interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export default function Page(props: PageProps) {
  return (
    <div>
      Post page
      <p>{JSON.stringify(props, null, 2)}</p>
      <h1>POST ID: {props.params.postId}</h1>
    </div>
  );
}
