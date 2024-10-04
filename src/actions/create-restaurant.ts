'use server';

import { db } from '@/db';
import type { Restaurant } from '@prisma/client';
import { z } from 'zod';
const createRestaurantSchema = z.object({
    name: z.string().min(2),
    categoryId: z.number().int(),
    description: z.string().nullable(),
    location: z.string().nullable(),
});
export async function createRestaurant(
    formState: any,
    formData: FormData
): Promise<any> {
    const name = formData.get('name');
    const categoryId = parseInt(formData.get('category') as string);
    const description = formData.get('description');
    const location = formData.get('location');

    const result = createRestaurantSchema.safeParse({
        name,
        categoryId,
        description,
        location,
    });
    if (!result.success) {
        console.error(result.error.flatten());

        return {
            error: result.error.flatten().fieldErrors,
        };
    }

    let restaurant: Restaurant;

    try {
        restaurant = await db.restaurant.create({
            data: {
                name: result.data.name,
                categoryId: result.data.categoryId,
                rating: 0,
                description: result.data.description,
                location: result.data.location,
            },
        });
    } catch (err) {
        console.error(err);
    }
}
