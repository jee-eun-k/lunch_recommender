'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

export const RatingStars = () => {
    const [rating, setRating] = useState(5);
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-6 h-6 cursor-pointer
                        ${i < rating ? 'text-yellow-400' : 'text-gray-300'}
                    `}
                    onClick={() => setRating(i + 1)}
                />
            ))}
            <input name="rating" className="hidden" value={rating} readOnly />
        </div>
    );
};
