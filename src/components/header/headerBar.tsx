import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@radix-ui/react-select';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SearchInput from './searchInput';
export default function HeaderBar() {
    return (
        <div className="flex gap-4 mb-6">
            <div className="relative flex-grow">
                <SearchInput />
            </div>
            {/* <Select value={sortBy} onValueChange={setSortBy}> */}
            {/* <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rating">Sort by Rating</SelectItem>
                    <SelectItem value="distance">Sort by Distance</SelectItem>
                </SelectContent>
            </Select> */}
        </div>
    );
}
