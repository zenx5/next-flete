import { NextResponse } from 'next/server';


export async function GET(request, { params }) {
    const { id } = params

    return NextResponse.json({ code: 0, data:{
        id: parseInt(id),
        date: "March 24, 2021",
        datetime: "2021-03-24",
        products : [
            {
              id: 1,
              name: 'Distant Mountains Artwork Tee',
              price: '$36.00',
              description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
              address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
              email: 'f•••@example.com',
              phone: '1•••••••••40',
              href: '#',
              status: 'Processing',
              step: 1,
              date: 'March 24, 2021',
              datetime: '2021-03-24',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
            },
            {
              id: 2,
              name: 'Distant Mountains Artwork Tee',
              price: '$36.00',
              description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
              address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
              email: 'f•••@example.com',
              phone: '1•••••••••40',
              href: '#',
              status: 'Processing',
              step: 1,
              date: 'March 24, 2021',
              datetime: '2021-03-24',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
            },
            {
              id: 3,
              name: 'Nomad Tumbler',
              price: '$35.00',
              description: 'This durable tumbler is ready to hit the road. Fill it with your favorite beverage and feel the wanderlust.',
              address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
              email: 'f•••@example.com',
              phone: '1•••••••••40',
              href: '#',
              status: 'Processing',
              step: 1,
              date: 'March 24, 2021',
              datetime: '2021-03-24',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
            },
            {
              id: 5,
              name: 'Nomad Tumbler',
              price: '$35.00',
              description: 'This durable tumbler is ready to hit the road. Fill it with your favorite beverage and feel the wanderlust.',
              address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
              email: 'f•••@example.com',
              phone: '1•••••••••40',
              href: '#',
              status: 'Processing',
              step: 1,
              date: 'March 24, 2021',
              datetime: '2021-03-24',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
            },
            {
              id: 8,
              name: 'Nomad Tumbler',
              price: '$35.00',
              description: 'This durable tumbler is ready to hit the road. Fill it with your favorite beverage and feel the wanderlust.',
              address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
              email: 'f•••@example.com',
              phone: '1•••••••••40',
              href: '#',
              status: 'Processing',
              step: 1,
              date: 'March 24, 2021',
              datetime: '2021-03-24',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
            }
          ],
        totals: {
            subtotal: '$108.00',
            shipping: '$5.00',
            tax: '$8.32',
            total: '$121.32',
        },
        address: {
            name: 'Floyd Miles',
            address: '7363 Cynthia Pass',
            city: 'Toronto',
            province: 'ON',
            postalCode: 'N3Y 4H8',
        },
        paymentInfo: {
            type: 'tdc',
        }
    } })
}