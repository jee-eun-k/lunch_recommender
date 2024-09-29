// 'use client';

import RestaurantAddForm from './restaurant/restaurant-add-form';
import List from '@/components/list/list';
import { fetchTopRestaurants } from '@/db/queries/restaurants';

export default function HomePage() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <List fetchData={fetchTopRestaurants} />
            </div>
            <RestaurantAddForm />
        </div>
    );
}
