import type { RecipeType } from "./store/recipes";

export const dummyData: RecipeType[] = [
  {
      id: "1",
      title: "Omelette",
      description: "A fluffy, golden breakfast classic served with a pinch of seasoning.",
      image: "https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
          { name: "Large Eggs", unit: "nos", quantity: 3 },
          { name: "Milk", unit: "ml", quantity: 30 },
          { name: "Salt", unit: "mg", quantity: 1000 },
          { name: "Black Pepper", unit: "mg", quantity: 500 },
          { name: "Butter", unit: "mg", quantity: 10000 },
      ],
      isArchived: false
  },
  {
      id: "2",
      title: "Fresh Lime Water",
      description: "A refreshing hydrating drink perfect for hot summer afternoons.",
      image: "https://images.unsplash.com/photo-1613478223460-f448a4de829d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
          { name: "Water", unit: "l", quantity: 1 },
          { name: "Lemon", unit: "nos", quantity: 2 },
          { name: "Mint Leaves", unit: "nos", quantity: 5 },
          { name: "Sugar", unit: "mg", quantity: 20000 },
          { name: "Ice Cubes", unit: "nos", quantity: 6 },
      ],
      isArchived: false
  },
  {
      id: "3",
      title: "Tomato Soup",
      description: "Rich and creamy homemade tomato soup with a hint of basil.",
      image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
          { name: "Ripe Tomatoes", unit: "nos", quantity: 6 },
          { name: "Vegetable Stock", unit: "ml", quantity: 500 },
          { name: "Garlic Cloves", unit: "nos", quantity: 3 },
          { name: "Olive Oil", unit: "ml", quantity: 15 },
          { name: "Fresh Basil", unit: "mg", quantity: 5000 },
      ],
      isArchived: false
  },
  {
      id: "4",
      title: "Cold Coffee",
      description: "Creamy blended iced coffee with a chocolate topping.",
      image: "https://images.unsplash.com/photo-1625242662341-5e92c5101338?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
          { name: "Cold Milk", unit: "ml", quantity: 300 },
          { name: "Instant Coffee Powder", unit: "mg", quantity: 5000 },
          { name: "Sugar", unit: "mg", quantity: 15000 },
          { name: "Vanilla Ice Cream Scoop", unit: "nos", quantity: 1 },
          { name: "Chocolate Syrup", unit: "ml", quantity: 10 },
      ],
      isArchived: false
  },
];
