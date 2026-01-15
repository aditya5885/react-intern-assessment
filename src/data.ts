import type { RecipeType } from "./store/recipes";

export const dummyData : RecipeType[] = [
    {
        id:"1",
        title: "Omelette",
        description: "A fluffy, golden breakfast classic served with a pinch of seasoning.",
        ingredients: [
            { name: "Large Eggs", unit: "nos", quantity: 3 },
            { name: "Milk", unit: "ml", quantity: 30 },
            { name: "Salt", unit: "mg", quantity: 1000 }, // 1g
            { name: "Black Pepper", unit: "mg", quantity: 500 }, // 0.5g
            { name: "Butter", unit: "mg", quantity: 10000 } // 10g
        ]
    },
    {
        id:"2",
        title: "Fresh Lime Water",
        description: "A refreshing hydrating drink perfect for hot summer afternoons.",
        ingredients: [
            { name: "Water", unit: "l", quantity: 1 },
            { name: "Lemon", unit: "nos", quantity: 2 },
            { name: "Mint Leaves", unit: "nos", quantity: 5 },
            { name: "Sugar", unit: "mg", quantity: 20000 }, // 20g
            { name: "Ice Cubes", unit: "nos", quantity: 6 }
        ]
    },
    {
        id:"3",
        title: "Tomato Soup",
        description: "Rich and creamy homemade tomato soup with a hint of basil.",
        ingredients: [
            { name: "Ripe Tomatoes", unit: "nos", quantity: 6 },
            { name: "Vegetable Stock", unit: "ml", quantity: 500 },
            { name: "Garlic Cloves", unit: "nos", quantity: 3 },
            { name: "Olive Oil", unit: "ml", quantity: 15 },
            { name: "Fresh Basil", unit: "mg", quantity: 5000 } // 5g
        ]
    },
    {
        id:"4",
        title: "Cold Coffee",
        description: "Creamy blended iced coffee with a chocolate topping.",
        ingredients: [
            { name: "Cold Milk", unit: "ml", quantity: 300 },
            { name: "Instant Coffee Powder", unit: "mg", quantity: 5000 }, // 5g
            { name: "Sugar", unit: "mg", quantity: 15000 }, // 15g
            { name: "Vanilla Ice Cream Scoop", unit: "nos", quantity: 1 },
            { name: "Chocolate Syrup", unit: "ml", quantity: 10 }
        ]
    }
]