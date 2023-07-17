'use client'
import { useParams } from 'next/navigation';
import ProductList from '@/components/product/ProductList'
import { useMemo } from 'react';

const products = [
    {
        id: 1,
        subId: 1,
        name: '80 CP',
        href: '#',
        price: '1$',
        imageSrc: '/images/001_COD/CP_80.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        subId: 1,
        name: '400 CP',
        href: '#',
        price: '6$',
        imageSrc: '/images/001_COD/CP_400.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 3,
        subId: 1,
        name: '800 CP',
        href: '#',
        price: '10$',
        imageSrc: '/images/001_COD/CP_800.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 4,
        subId: 1,
        name: '2000 CP',
        href: '#',
        price: '15$',
        imageSrc: '/images/001_COD/CP_2000.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 5,
        subId: 1,
        name: '4000 CP',
        href: '#',
        price: '25$',
        imageSrc: '/images/001_COD/CP_4000.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        subId: 1,
        name: '8000 CP',
        href: '#$',
        price: '45$',
        imageSrc: '/images/001_COD/CP_8000.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 7,
        name: 'Valorant',
        href: '#',
        price: '',
        imageSrc: '/images/008_VALORANT/008_VALORANT.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 8,
        name: 'Brawl Stars',
        href: '#',
        price: '',
        imageSrc: '/images/009_BRAWL_STARS/009_BRAWL_STARS.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 9,
        name: 'Apex Legends',
        href: '#',
        price: '',
        imageSrc: '/images/010_APEX/010_APEX.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 10,
        name: 'Call of Duty Warzone',
        href: '#',
        price: '',
        imageSrc: '/images/011_COD_WARZONE/011_COD_WARZONE.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 11,
        name: 'Genshin Impact',
        href: '#',
        price: '',
        imageSrc: '/images/007_GENSHIN_IMPACT/007_GENSHIN_IMPACT.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 12,
        name: 'Fortnite',
        href: '#',
        price: '',
        imageSrc: '/images/012_FORTNITE/012_FORTNITE.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 13,
        name: 'PUBG',
        href: '#',
        price: '',
        imageSrc: '/images/014_PUBG/014_PUBG.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 14,
        name: 'Netflix',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/001_NETFLIX/001_NETFLIX.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 15,
        name: 'Disney +',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/002_DISNEY_PLUS/002_DISNEY_PLUS.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 16,
        name: 'Crunchyroll',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/003_CRUNCHYROLL/003_CRUNCHYROLL.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 17,
        name: 'Amazon',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/004_AMAZON/004_AMAZON.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 18,
        name: 'Steam',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/005_STEAM/005_STEAM.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 19,
        name: 'Xbox',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/006_XBOX/006_XBOX.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 20,
        name: 'PlayStation',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/007_PLAYSTATION/007_PLAYSTATION.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 21,
        name: 'GooglePlay',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/008_GOOGLEPLAY/008_GOOGLE_PLAY.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 22,
        name: 'Itunes',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/009_ITUNES/009_ITUNES.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 23,
        name: 'Nintendo',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/010_NINTENDO/010_NINTENDO.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 24,
        name: 'VISA',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/011_VISA/011_VISA.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 25,
        name: 'Blizzard',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/012_BLIZZARD/012_BLIZZARD.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 26,
        name: 'PayPal',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/013_PAYPAL/013_PAYPAL.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 27,
        name: 'Skrill',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/014_SKRILL/014_SKRILL.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 28,
        name: 'Uphold',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/015_UPHOLD/015_UPHOLD.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 29,
        name: 'Prime Video',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/016_PRIME_VIDEO/016_PRIME_VIDEO.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 30,
        name: 'Binance',
        href: '#',
        price: '',
        imageSrc: '/images/002_SERVICIOS/017_BINANCE/017_BINANCE.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]


export default function Products() {
    const { id } = useParams();
    const newArr = useMemo(() => {
        if (id !== undefined) {
            return products.filter(x => x.subId === parseInt(id))
        }
    }, [id])

    return (
        <main className="flex min-h-screen flex-col">
            <ProductList products={newArr} />
        </main>
    )
}
