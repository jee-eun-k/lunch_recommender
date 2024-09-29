import type { Restaurant, Category } from '@prisma/client';
import { db } from '@/db';

export type RestaurantWithCategory = Restaurant & { category: Category };

export function fetchTopRestaurants(): Promise<RestaurantWithCategory[]> {
    const result = db.restaurant.findMany({
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
    return result;
}
export function fetchRestaurants(
    keyword: string
): Promise<RestaurantWithCategory[]> {
    const result = db.restaurant.findMany({
        include: {
            category: true,
        },
        where: {
            name: {
                contains: keyword,
            },
        },
        orderBy: [
            {
                rating: 'desc',
            },
        ],
    });
    return result;
}
