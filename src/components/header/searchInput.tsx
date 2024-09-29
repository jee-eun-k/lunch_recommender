'use client';

import { Input } from '../ui/input';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

export default function SearchInput() {
    const searchParams = useSearchParams();
    return (
        <form action={actions.search}>
            <Input
                name="name"
                placeholder="Search by name"
                defaultValue={searchParams.get('name') || ''}
                className="pl-10"
            />
        </form>
    );
}
