import { type LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async (args) => {
  const url = new URL(args.request.url)
  const filepath = url.searchParams.get('filepath')

  const mod = await import(`/app${filepath}?ts=${Math.floor(Math.random()*1e6)}`);

  return mod
};

export default function Preview() {
  const { default: Component } = useLoaderData();

  return <Component />
}