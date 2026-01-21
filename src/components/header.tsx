import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="bg-blue-100 shadow-md py-4 rounded-b-xl">
      <h1 className="text-2xl font-bold text-orange-600 text-center mb-4">
        Grandma's Recipe Book
      </h1>
      <Navigation />
    </header>
  );
}
