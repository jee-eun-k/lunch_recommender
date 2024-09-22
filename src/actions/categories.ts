'use server';

import { fetchCategoriesData } from '@/db/queries/categories';

export async function getCategories() {
    return fetchCategoriesData();
}
