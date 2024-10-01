'use server';

import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
    const name = formData.get('name');
    console.log(name);
    if (typeof name !== 'string' || !name) {
        redirect('/');
    }
    redirect(`/restaurant?name=${encodeURIComponent(name)}`);
}
