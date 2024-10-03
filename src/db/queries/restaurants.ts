import type { Restaurant, Category, Comment } from '@prisma/client';
import { db } from '@/db';

export type RestaurantWithCategory = Restaurant & { category: Category };
export type RestaurantWithCategoryAndComments = Restaurant & {
    category: Category;
    comments: Comment[];
};

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

export function fetchRestaurant(id: number): Promise<any> {
    const result = db.restaurant.findFirst({
        include: {
            category: true,
            comment: true,
        },
        where: {
            id,
        },
    });
    return result;
}
