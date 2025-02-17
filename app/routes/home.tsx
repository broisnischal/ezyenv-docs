import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ezyenv | easy env example" },
    {
      name: "description", content: "ezyenv, easy env example | Create a sample env file from your existing .env file,         Push env to github but using ezyenv which is tool to automatically generate sample env files from your existing .env files! making example env file, easy, intutive to share. This helps teams share environment variable templates without exposing actual credentials."
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Ezyenv" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (

    <div className="px-20 py-10 flex flex-col gap-2">
      <h1>ezyenv</h1>

      <p>
        Push env to github but using ezyenv which is tool to automatically generate sample env files from your existing .env files! making example env file, easy, intutive to share. This helps teams share environment variable templates without exposing actual credentials.
      </p>

      <h2>Quick Use - Installation</h2>

      <p>
        # npm
        npx ezyenv


      </p>

      # bun
      bunx ezyenv

      # yarn
      yarn global add ezyenv

      # pnpm
      pnpm add -g ezyenv


      <p><h1>
        Quick Install CLI

      </h1>
        curl -fsSL https://l.nischal.pro/env | sudo sh
        brew install ezyenv

      </p>


      <h1>Usage Guide</h1>
      ezyenv # creates `.example` files for each env

      ezyenv .env # specifies the file

      ezyenv rm # removes the example files

      ezyenv .env --sample sample # specifies the sample (sample|example|eg|default)


      🚀 Automatically generates .env.example from .env files
      🔒 Multiple environment variable support
      💡 Single file support ezyenv test.env
      ⚡️ Simple one-command operation
      🔒 Preserves structure while removing sensitive values
      🔒 Preserves single & Multi line comment
      ⚡️ Remove the example files, ezyenv rm
      🚀 add the example sample ext, ezyenv .env --sample (sample|example|eg|default)



    </div>

  );
}
