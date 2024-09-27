import { RestaurantWithCategory } from '@/db/queries/restaurants';
import { Restaurant } from '@prisma/client';
import { MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default async function List({
    fetchData,
}: {
    fetchData: () => RestaurantWithCategory[];
}) {
    const fetchedData = await fetchData();
    return (
        <>
            {fetchedData.map((restaurant) => (
                <Link
                    href={`/restaurant/${restaurant.id}`}
                    key={restaurant.id}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                    <h2 className="text-xl font-semibold mb-2">
                        {restaurant.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        {restaurant.category.name}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="text-yellow-400" />
                        <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{restaurant.location} km</span>
                    </div>
                </Link>
            ))}
        </>
    );
}
