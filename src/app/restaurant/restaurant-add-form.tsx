'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { getCategories } from '@/actions/categories';
import { fetchCategoriesData } from '@/db/queries/categories';
import type { Category } from '@prisma/client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function RestaurantAddForm() {
    const [newRating, setNewRating] = useState(5);
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const getCategoryData = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        getCategoryData();
    }, []);
    const [formState, action] = useFormState(actions.createRestaurant, {
        errors: {},
    });
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0">
                    +
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80"
                style={{ backgroundColor: 'white' }}
            >
                <form action={action}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="name">NAME</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="category">CATEGORY</Label>
                                <Select name="category" defaultValue="Korean">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        {categories?.map((category) => {
                                            return (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.name}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div
                                id="rating"
                                className="grid grid-cols-3 items-center gap-4"
                            >
                                <Label htmlFor="rating">RATING</Label>
                                <input
                                    name="rating"
                                    className="hidden"
                                    value={newRating}
                                />
                                <div className="flex flex-grow-1 ">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-6 h-6 m-0 p-0 cursor-pointer ${
                                                i < newRating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                            onClick={() => setNewRating(i + 1)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="location">LOCATION</Label>
                                <Input
                                    id="location"
                                    name="location"
                                    defaultValue=""
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="description">DESCRIPTION</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    defaultValue=""
                                    className="col-span-2 h-8"
                                />
                            </div>
                        </div>
                        <Button type="submit">SAVE!</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
