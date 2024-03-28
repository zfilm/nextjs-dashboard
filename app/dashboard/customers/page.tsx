"use client"
import { useParams, useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: number, customer: string }}){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const customer = searchParams.get('customer');
    return <div>
                <h2>Customers page</h2>
                <p>{id}</p>
                <p>{customer}</p>
            </div>;
}
