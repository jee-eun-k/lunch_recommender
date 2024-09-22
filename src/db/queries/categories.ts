import { db } from '@/db';
import type { Category } from '@prisma/client';

export function fetchCategoriesData(): Promise<Category[]> {
    return db.category.findMany({});
}
