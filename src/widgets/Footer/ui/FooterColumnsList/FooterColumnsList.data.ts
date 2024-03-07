export interface IFooterLink {
  label?: string;
  text: string;
  path?: string;
}

export interface IFooterBlock {
  mainLink: IFooterLink;
  childLinks: IFooterLink[],
}

const menu: IFooterBlock[] = [
    {
        mainLink: {
            text: 'Logo',
            path: '/',
        },
        childLinks: [],
    },
    {
        mainLink: {
            text: 'Products',
            path: '/products',
        },
        childLinks: [
            {
                text: 'Men',
                path: '/men',
            },
            {
                text: 'Women',
                path: '/women',
            },
            {
                text: 'Kids',
                path: '/kids',
            },
            {
                text: 'Sale',
                path: '/sale',
            },
            {
                text: 'Collections',
                path: '/collections',
            },
        ],
    },
    {
        mainLink: {
            text: 'Get help',
            path: '/get_help',
        },
        childLinks: [
            {
                text: 'Order status',
                path: '/order_status',
            },
            {
                text: 'Shipping and delovery',
                path: '/shipping_and_delovery',
            },
            {
                text: 'Returns',
                path: '/returns',
            },
            {
                text: 'Payment options',
                path: '/payment_options',
            },
        ],
    },
    {
        mainLink: {
            text: 'Legals',
            path: '/legals',
        },
        childLinks: [
            {
                text: 'Terms of services',
                path: '/terms_of_services',
            },
            {
                text: 'Privacy policy',
                path: '/privacy_policy',
            },
        ],
    },
    {
        mainLink: {
            text: 'Contact',
            path: '/contact',
        },
        childLinks: [
            {
                label: 'Email',
                text: 'ecommerce@gmail.com',
            },
            {
                label: 'Phone',
                text: '972 756 555-0123',
            },
            {
                label: 'Address',
                text: '2464 Royal Ln. Mesa, New Jersey 45463',
            },
        ],
    },
];

export default menu;
