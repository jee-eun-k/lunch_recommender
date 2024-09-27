import { Restaurant } from '@prisma/client';
import { MapPin, Star } from 'lucide-react';
import Link from 'next/link';

interface ListProps {}

// Mock data for restaurants
const restaurants = [
    {
        id: 1,
        name: 'Tasty Bites',
        category: 'Italian',
        rating: 4.5,
        distance: 0.5,
    },
    {
        id: 2,
        name: 'Sushi Haven',
        category: 'Japanese',
        rating: 4.8,
        distance: 0.7,
    },
    {
        id: 3,
        name: 'Burger Joint',
        category: 'American',
        rating: 4.2,
        distance: 0.3,
    },
];
export default async function List({
    fetchData,
}: {
    fetchData: () => Restaurant[];
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
                    <p className="text-gray-600 mb-2">{restaurant.category}</p>
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
