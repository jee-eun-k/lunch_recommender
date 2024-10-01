'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data for a restaurant
const restaurant = {
    id: 1,
    name: 'Tasty Bites',
    category: 'Italian',
    rating: 4.5,
    distance: 0.5,
    description: 'Authentic Italian cuisine in a cozy atmosphere.',
    comments: [
        { id: 1, user: 'Alice', content: 'Great pasta!', rating: 5 },
        {
            id: 2,
            user: 'Bob',
            content: 'Nice ambiance, but a bit pricey.',
            rating: 4,
        },
    ],
};

export default async function RestaurantDetails() {
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(5);

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send this data to your backend
        console.log('New comment:', newComment, 'Rating:', newRating);
        setNewComment('');
        setNewRating(5);
    };

    return (
        <div className="container mx-auto p-4">
            <Link href="/">
                <Button variant="ghost" className="mb-4">
                    <ArrowLeft className="mr-2" /> Back to list
                </Button>
            </Link>

            <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
            <p className="text-gray-600 mb-2">{restaurant.category}</p>

            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <span>{restaurant.rating}</span>
                </div>
                <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{restaurant.distance} km</span>
                </div>
            </div>

            <p className="mb-6">{restaurant.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Comments</h2>

            <div className="space-y-4 mb-6">
                {restaurant.comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Avatar>
                                <AvatarFallback>
                                    {comment.user[0]}
                                </AvatarFallback>
                            </Avatar>
                            <span className="font-semibold">
                                {comment.user}
                            </span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < comment.rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmitComment} className="space-y-4">
                <h3 className="text-xl font-semibold">Add a comment</h3>
                <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here..."
                    className="w-full"
                />
                <div className="flex items-center gap-2">
                    <span>Rating:</span>
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-6 h-6 cursor-pointer ${
                                i < newRating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                            }`}
                            onClick={() => setNewRating(i + 1)}
                        />
                    ))}
                </div>
                <Button type="submit">Submit Comment</Button>
            </form>
        </div>
    );
}
