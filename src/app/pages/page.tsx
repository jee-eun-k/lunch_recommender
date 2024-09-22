import { useState } from 'react';
import { Search, MapPin, Star, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

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
    // Add more restaurants as needed
];

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('rating');

    const filteredRestaurants = restaurants
        .filter(
            (restaurant) =>
                restaurant.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                restaurant.category
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'distance') return a.distance - b.distance;
            return 0;
        });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Lunch Recommender</h1>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-grow">
                    <Input
                        type="text"
                        placeholder="Search by name or category"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {/* <Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Sort by' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='rating'>Sort by Rating</SelectItem>
						<SelectItem value='distance'>Sort by Distance</SelectItem>
					</SelectContent>
				</Select> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                    <div
                        key={restaurant.id}
                        className="border rounded-lg p-4 shadow-sm"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {restaurant.name}
                        </h2>
                        <p className="text-gray-600 mb-2">
                            {restaurant.category}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="text-yellow-400" />
                            <span>{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} />
                            <span>{restaurant.distance} km</span>
                        </div>
                    </div>
                ))}
            </div>

            <Button className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0">
                <Plus className="w-6 h-6" />
            </Button>
        </div>
    );
}
