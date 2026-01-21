import RecipeList from "@/components/recpies/recipe-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        <RecipeList />
      </div>
    </div>
  );
}
