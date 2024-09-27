import type { Restaurant, Category } from '@prisma/client';
import { db } from '@/db';

export type RestaurantWithCategory = Restaurant & { category: Category };

export function fetchTopRestaurants(): Promise<any[]> {
    return db.restaurant.findMany({
        // relationLoadStrategy: 'join', // or 'query'
        // include: {
        //     category: true, // Ensuring we fetch the related category
        // },
        orderBy: [
            {
                rating: 'desc',
            },
        ],
        take: 5,
    });
}
