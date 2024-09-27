import Link from 'next/link';

interface ListProps {}

export default async function List({ fetchData }: any) {
    const data = await fetchData();

    return (
        <div>
            {data.map((d) => {
                return <div>{}</div>;
            })}
        </div>
    );
}
