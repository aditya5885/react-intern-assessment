import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "@/store/recipes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useState } from "react";
import { Trash2 } from "lucide-react";
const recipeSchema = z.object({
  title: z.string().min(3, "Please enter a title"),
  description: z.string().min(5, "Please describe your recipe"),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, "Ingredient name required"),
        quantity: z.number().min(1, "Quantity must be at least 1"),
        unit: z.enum(["mg", "ml", "l", "nos"]),
      })
    )
    .min(1, "At least one ingredient required"),
});

type FormValues = z.infer<typeof recipeSchema>;
export default function Create() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      title: "",
      description: "",
      ingredients: [{ name: "", quantity: 1, unit: "nos" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const onSubmit = (data: FormValues) => {
    addRecipe({
      id: nanoid(),
      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
      image: imagePreview || "",
      isArchived: false,
    });

    navigate("/");
  };
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-start p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-3xl bg-white">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Create Recipe
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* TITLE */}
          <div>
            <Label className="mb-3">Title</Label>
            <Input placeholder="Grandma's Cake" {...register("title")} />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <Label className="mb-3">Description</Label>
            <Textarea
              placeholder="Describe the recipe..."
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <Label className="mb-3">Recipe Image</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleImageChange(e.target.files[0]);
                }
              }}
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded-xl border mt-3"
              />
            )}
          </div>

          {/* INGREDIENTS */}
          <div className="space-y-2">
            <h3 className="font-semibold">Ingredients</h3>

            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <Input
                  placeholder="Name"
                  {...register(`ingredients.${index}.name`)}
                />

                <Input
                  type="number"
                  className="w-20"
                  {...register(`ingredients.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                />

                <select
                  {...register(`ingredients.${index}.unit`)}
                  className="border rounded px-2 py-1"
                >
                  <option value="mg">mg</option>
                  <option value="ml">ml</option>
                  <option value="l">l</option>
                  <option value="nos">nos</option>
                </select>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  className="p-2" // smaller padding
                >
                  <Trash2 className="w-4 h-4" /> {/* small trash icon */}
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() =>
                append({ name: "", quantity: 1, unit: "nos" })
              }
            >
              + Add Ingredient
            </Button>
          </div>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          >
            Save Recipe
          </Button>
        </form>
      </Card>
    </div>
  );
}
