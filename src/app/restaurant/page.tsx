import List from '@/components/list/list';
import RestaurantAddForm from './restaurant-add-form';
import { fetchRestaurants } from '@/db/queries/restaurants';
import { useSearchParams } from 'next/navigation';
interface ShowPageProps {
    searchParams: {
        name: string;
    };
}
export default function Page({ searchParams }: ShowPageProps) {
    const { name } = searchParams;
    const decodedName = decodeURIComponent(name);
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <List fetchData={() => fetchRestaurants(decodedName)} />
            </div>
            <RestaurantAddForm />
        </div>
    );
}
