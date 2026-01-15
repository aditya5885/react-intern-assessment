import { useRecipeStore, type RecipeType } from "@/store/recipes"
import RecipieCard from "./recipe-card"
import RecipeInfo from "./recipe-info"
import { Dialog, DialogTrigger } from "../ui/dialog"

export default function RecipeList() {

    const recipes: RecipeType[] = useRecipeStore(state => state.recipes)

    return <div className="flex gap-3 flex-col">
        {recipes.map(recipe => (<>
            <Dialog key={recipe.id}>
                <DialogTrigger asChild>
                    <div>
                        <RecipieCard index={recipe.id} title={recipe.title} description={recipe.description} />
                    </div>
                </DialogTrigger>
                <RecipeInfo id={recipe.id} />
            </Dialog>
        </>
        ))}
    </div>
}