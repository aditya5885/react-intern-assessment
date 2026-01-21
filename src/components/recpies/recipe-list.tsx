import { useRecipeStore } from "@/store/recipes";
import RecipeInfo from "./recipe-info";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const archiveRecipe = useRecipeStore((state) => state.archiveRecipe);

  const [currentPage, setCurrentPage] = useState(1);

  // Active recipes only
  const activeRecipes = recipes.filter((r) => !r.isArchived);

  // Search filter
  const filteredRecipes = activeRecipes.filter((recipe) => {
    const q = searchQuery.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(q) ||
      recipe.description.toLowerCase().includes(q) ||
      recipe.ingredients.some((i) => i.name.toLowerCase().includes(q))
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-slate-50 py-6 border rounded-3xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-center text-orange-600">Search Recipes</h1>
        {/* Search */}
        <Input
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="h-12 rounded-xl text-base w-full max-w-xs mx-auto mb-3"
        />

        {/* Empty State */}
        {paginatedRecipes.length === 0 && (
          <p className="text-center text-slate-500 text-lg mt-10">
            No recipes found 🍽️
          </p>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Image with aspect ratio to prevent cropping */}
              <div className="w-full aspect-[3/2] bg-gray-200 overflow-hidden">
                <img
                  src={recipe.image || "https://via.placeholder.com/600x400"}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="font-semibold text-sm line-clamp-2">{recipe.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                  {recipe.description}
                </p>

                {/* Actions */}
                <div className="mt-auto flex flex-col gap-2 pt-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary" className="h-8">
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[75vh] overflow-auto">
                      <RecipeInfo id={recipe.id} />
                    </DialogContent>
                  </Dialog>

                <div className="flex gap-2">
                  {/* Archive Confirmation */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="h-8 flex-1 bg-slate-900 hover:bg-slate-800 text-white"
                      >
                        Archive
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm text-center">
                      <p className="mb-4 text-sm">
                        Are you sure you want to archive <strong>{recipe.title}</strong>?
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => archiveRecipe(recipe.id)}
                        >
                          Yes, Archive
                        </Button>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Delete Confirmation */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="destructive" className="h-8 flex-1">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm text-center">
                      <p className="mb-4 text-sm text-red-600">
                        Are you sure you want to delete <strong>{recipe.title}</strong>? This cannot be undone.
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteRecipe(recipe.id)}
                        >
                          Yes, Delete
                        </Button>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 pt-4 flex-wrap">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>

            <span className="text-sm text-slate-600">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
