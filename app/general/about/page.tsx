import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Conocenos',
 keywords: [' About Page', 'Gino', 'Informacion'], 
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}