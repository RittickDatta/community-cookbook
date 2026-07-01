import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

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
    return NextResponse.json(result[0]);
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const result = await sql`
        DELETE FROM recipes
        WHERE id = ${params.id}
        RETURNING *
    `;
    return NextResponse.json({ success: true, deletedRecipe: result[0] });
}