import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customer',
  };

export default function Page({ params }: { params: {  }}){

    return <div>
                <h2>My new Customers page</h2>

            </div>;
}
