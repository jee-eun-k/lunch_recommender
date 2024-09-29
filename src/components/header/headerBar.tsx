import SearchInput from './searchInput';

export default function HeaderBar() {
    return (
        <div className="flex gap-4 mb-6">
            <div className="relative flex-grow">
                <SearchInput />
            </div>
        </div>
    );
}
