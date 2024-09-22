import { db } from '@/db';
import type { Category } from '@prisma/client';

export async function fetchCategoriesData(): Promise<Category[]> {
    return await db.category.findMany({});
}
