import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pagina de precios de mi servicio',
 keywords: ['Pricing Page', 'Lalala', 'Informeishon']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}