'use client';

// import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

export default function SearchInput() {
    const searchParams = useSearchParams();
    return (
        <>
            <form action={actions.search}>
                <Input
                    type="text"
                    placeholder="Search by name or category"
                    defaultValue={searchParams.get('term') || ''}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                />
            </form>
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
        </>
    );
}
