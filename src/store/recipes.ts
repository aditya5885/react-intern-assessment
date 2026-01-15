import { dummyData } from '@/data';
import { create } from 'zustand'


export type IngredientType = {
    name: string;
    unit: "mg" | "l" | "ml" | "nos"
    quantity: number
}

export type RecipeType = {
    id: string
    title: string
    description: string
    ingredients: IngredientType[]
}

interface RecipeState {
    recipes: RecipeType[]

    addRecipe: (recipe: RecipeType) => void;
    findRecipe: (id: string) => RecipeType | undefined;
}

export const useRecipeStore = create<RecipeState>()((set, get) => {
    return {
        recipes: dummyData,

        addRecipe: (recipe: RecipeType) => {
            const currentRecpie: RecipeType[] = get().recipes
            set(
                {
                    recipes: [...currentRecpie, recipe]
                }
            )
        },

        findRecipe: (id: string) => {
            let recipe = undefined
            const recipes = get().recipes
            recipe = recipes.find((recipe) => recipe.id === id)
            return recipe
        }
    }
})

