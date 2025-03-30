import type { Route } from "./+types/home";
import Manav from "~/components/manav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Manav />
      <p>hello tous</p>
    </div>
  );
}
