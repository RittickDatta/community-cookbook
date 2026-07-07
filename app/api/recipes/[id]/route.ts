import { sql } from "@/lib/db";
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const itemCacheKey = `recipe:${id}`;
    const item = await redis.get(itemCacheKey);
    if(item){
      console.log("reading from cache")
      return NextResponse.json(item)
    }

    const recipes = await sql`
      SELECT *
      FROM recipes
      WHERE id = ${id}
      LIMIT 1
    `;
    if (recipes.length === 0) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    await redis.set(itemCacheKey, recipes[0], { ex: 120 })

    return NextResponse.json(recipes[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch recipe" },
      { status: 500 }
    );
  }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { title, description, category, image, difficulty, servings, calories, cookingTime, ingredients, steps } = await req.json();
    const result = await sql`
        UPDATE recipes
        SET title = ${title}, description = ${description}, category = ${category}, image = ${image}, difficulty = ${difficulty}, servings = ${servings}, calories = ${calories}, cookingTime = ${cookingTime}, ingredients = ${ingredients}, steps = ${steps}
        WHERE id = ${params.id}
        RETURNING *
    `;

    await redis.del(`recipe:${params.id}`)

    return NextResponse.json(result[0]);
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const result = await sql`
        DELETE FROM recipes
        WHERE id = ${id}
        RETURNING *
    `;

    await redis.del(`recipe:${id}`)

    return NextResponse.json({ success: true, deletedRecipe: result[0] });
}