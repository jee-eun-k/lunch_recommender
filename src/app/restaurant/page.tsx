'use client';

import List from '@/components/list/list';
import RestaurantAddForm from './restaurant-add-form';
import { fetchRestaurants } from '@/db/queries/restaurants';
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParam = useSearchParams();

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <List
                    fetchData={() =>
                        fetchRestaurants(searchParam.get('name') || '')
                    }
                />
            </div>
            <RestaurantAddForm />
        </div>
    );
}
