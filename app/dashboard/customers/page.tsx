"use client"
import { useParams, useSearchParams } from "next/navigation";

export default async function Page({ params }: { params: { test: string, id: number }}){
    const searchParams = useSearchParams();
    const test = searchParams.get('test');
    const id = searchParams.get('id');
    return <div>
                <h2>Customers page</h2>
                <p>{id}</p>
                <p>{test}</p>

            </div>;
}
