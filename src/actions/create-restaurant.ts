'use server';

import { error } from 'console';
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
}
