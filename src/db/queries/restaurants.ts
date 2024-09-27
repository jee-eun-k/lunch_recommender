import type { Restaurant, Category } from '@prisma/client';
import { db } from '@/db';

export type RestaurantWithCategory = Restaurant & { category: Category };

export function fetchTopRestaurants(): Promise<RestaurantWithCategory[]> {
    return db.restaurant.findMany({
        // relationLoadStrategy: 'join', // or 'query'
        include: {
            category: true,
        },

        orderBy: [
            {
                rating: 'desc',
            },
        ],
        take: 5,
    });
}
