import type { Restaurant, Category } from '@prisma/client';
import { db } from '@/db';

export type RestaurantWithCategory = Restaurant & { category: Category };

export function fetchTopRestaurants(): Promise<RestaurantWithCategory[]> {
    return db.restaurant.findMany({
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
export function fetchRestaurants(
    keyword: string
): Promise<RestaurantWithCategory[]> {
    return db.restaurant.findMany({
        where: {
            name: {
                startsWith: '\\keyword\\', // note that the `_` character is escaped, preceding `\` with `\` when included in a string
            },
        },
    });
}
