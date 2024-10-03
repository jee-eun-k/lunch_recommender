'use server';

import { db } from '@/db';
import type { Comment } from '@prisma/client';
import { z } from 'zod';
const createCommentSchema = z.object({
    restaurantId: z.number().int(),
    userName: z.string().min(2),
    rating: z.number().int(),
    text: z.string().nullable(),
});
export async function createComment(
    formState: any,
    formData: FormData
): Promise<any> {
    const restaurantId = parseInt(formData.get('restaurantId') as string);
    const userName = formData.get('userName');
    const rating = parseInt(formData.get('rating') as string);
    const text = formData.get('text');

    const result = createCommentSchema.safeParse({
        restaurantId,
        userName,
        rating,
        text,
    });
    if (!result.success) {
        console.error(result.error.flatten());

        return {
            error: result.error.flatten().fieldErrors,
        };
    }

    let comment: Comment;

    try {
        comment = await db.comment.create({
            data: {
                restaurantId: result.data.restaurantId,
                userName: result.data.userName,
                rating: result.data.rating,
                text: result.data.text,
            },
        });
    } catch (err) {
        console.error(err);
    }
}
