'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { getCategories } from '@/actions/categories';
import type { Category } from '@prisma/client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function RestaurantAddForm() {
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
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open}>
            <PopoverTrigger onClick={() => setOpen(!open)} asChild>
                <Button className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0">
                    +
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80"
                style={{ backgroundColor: 'white' }}
                onPointerDownOutside={() => setOpen(!open)}
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
                                <Select name="category" defaultValue="2">
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
                                                    value={category.id.toString()}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
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
