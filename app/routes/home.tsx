import Hero from "~/components/hero";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "npx ezyenv | brew install ezyenv" },
    {
      name: "description",
      content:
        "ezyenv, easy env example | Create a sample env file from your existing .env file,         Push env to github but using ezyenv which is tool to automatically generate sample env files from your existing .env files! making example env file, easy, intutive to share. This helps teams share environment variable templates without exposing actual credentials.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Ezyenv" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Hero />;
}
