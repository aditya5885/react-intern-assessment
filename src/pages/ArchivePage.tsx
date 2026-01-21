import { useRecipeStore } from "@/store/recipes"
import RecipeInfo from "@/components/recpies/recipe-info"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
export default function ArchivePage() {
  const recipes = useRecipeStore((state) => state.recipes)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const unarchiveRecipe = useRecipeStore((state) => state.unarchiveRecipe)
  const archivedRecipes = recipes.filter((r) => r.isArchived)

  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 bg-slate-50 py-6 border rounded-3xl">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">Archived Recipes</h1>

        {/* EMPTY STATE */}
        {archivedRecipes.length === 0 && (
          <p className="text-center text-slate-500 text-lg mt-10">
            No archived recipes 🍽️
          </p>
        )}

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {archivedRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-40 bg-slate-200">
                <img
                  src={recipe.image || "https://via.placeholder.com/300x200"}
                  alt={recipe.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="font-semibold text-sm line-clamp-2">{recipe.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">{recipe.description}</p>

                {/* ACTIONS */}
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
                    {/* Unarchive Confirmation */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="h-8 flex-1 bg-slate-900 hover:bg-slate-800 text-white">
                          Unarchive
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm text-center">
                        <p className="mb-4 text-sm">
                          Are you sure you want to unarchive <strong>{recipe.title}</strong>?
                        </p>
                        <div className="flex justify-center gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => unarchiveRecipe(recipe.id)}
                          >
                            Yes, Unarchive
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
                          Are you sure you want to permanently delete <strong>{recipe.title}</strong>? This cannot be undone.
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
      </div>
    </div>
  )
}
