'use server';

import { z } from 'zod';
const createRestaurantSchema = z.object({
    name: z.string().min(2),
});
export async function createRestaurant(
    formState: any,
    formData: FormData
): Promise<any> {
    const name = formData.get('name');
    const category = formData.get('category');
    const result = createRestaurantSchema.safeParse({
        name,
    });
    console.log(name, category);
}
