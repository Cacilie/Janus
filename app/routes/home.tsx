import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Janus!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
