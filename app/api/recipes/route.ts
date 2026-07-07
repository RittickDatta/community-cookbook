import { sql } from "@/lib/db";
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {

    const cacheKey = `recipes:all`;
    const cachedItems = await redis.get(cacheKey);
    if(cachedItems){
        return NextResponse.json(cachedItems)
    }

    const recipies = await sql`SELECT * FROM recipes ORDER BY id DESC`;

    await redis.set(cacheKey, recipies, { ex: 120 })

    return NextResponse.json(recipies);
}

export async function POST(req: Request) {
    const { title, description, category, image, difficulty, servings, calories, cookingTime, ingredients, steps } = await req.json();
    const result = await sql`
        INSERT INTO recipes (title, description, category, image, difficulty, servings, calories, cooking_time, ingredients, steps)
        VALUES (${title}, ${description}, ${category}, ${image}, ${difficulty}, ${servings}, ${calories}, ${cookingTime}, ${[ingredients]}, ${[steps]})
        RETURNING *
    `;

    await redis.del('recipes:all')

    return NextResponse.json(result[0]);
}