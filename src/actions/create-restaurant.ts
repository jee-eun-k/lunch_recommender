'use server';

import { db } from '@/db';
import type { Restaurant } from '@prisma/client';
import { z } from 'zod';
const createRestaurantSchema = z.object({
    name: z.string().min(2),
});
export async function createRestaurant(
    formState: any,
    formData: FormData
): Promise<any> {
    const name = formData.get('name');
    const result = createRestaurantSchema.safeParse({
        name,
    });
    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors,
        };
    }

    let restaurant: Restaurant;

    try {
        restaurant = await db.restaurant.create({
            data: {
                name: result.data.name,
                categoryId: result.data.category,
                rating: result.data.rating,
            },
        });
    } catch (err) {}
}
