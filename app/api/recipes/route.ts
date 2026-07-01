import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const recipies = await sql`SELECT * FROM recipes ORDER BY id DESC`;
    return NextResponse.json(recipies);
}

export async function POST(req: Request) {
    const { title, description, category, image, difficulty, servings, calories, cookingTime, ingredients, steps } = await req.json();
    const result = await sql`
        INSERT INTO recipes (title, description, category, image, difficulty, servings, calories, cooking_time, ingredients, steps)
        VALUES (${title}, ${description}, ${category}, ${image}, ${difficulty}, ${servings}, ${calories}, ${cookingTime}, ${[ingredients]}, ${[steps]})
        RETURNING *
    `;
    return NextResponse.json(result[0]);
}