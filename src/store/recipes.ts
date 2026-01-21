import { create } from "zustand"
import { dummyData } from "@/data"

export type IngredientType = {
  name: string
  unit: "mg" | "l" | "ml" | "nos"
  quantity: number
}

export type RecipeType = {
  image: string
  id: string
  title: string
  description: string
  ingredients: IngredientType[]
  isArchived: boolean
}

interface RecipeState {
  recipes: RecipeType[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  addRecipe: (recipe: RecipeType) => void
  deleteRecipe: (id: string) => void
  archiveRecipe: (id: string) => void
  unarchiveRecipe: (id: string) => void
  findRecipe: (id: string) => RecipeType | undefined
}

export const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: dummyData,
  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== id
      ),
    })),

  archiveRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isArchived: true }
          : recipe
      ),
    })),

  unarchiveRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isArchived: false }
          : recipe
      ),
    })),

  findRecipe: (id) =>
    get().recipes.find(
      (recipe) => recipe.id === id
    ),
}))
