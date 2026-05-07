// Store items. Each item:
//   id:          unique slug
//   title:       display name
//   month:       1-12  (drives the bottom ticker; items also sort newest-first by date)
//   year:        4-digit year
//   collections: array of collection names (empty = uncollected). Collections
//                show up automatically as filter chips at the top of the page.
//   image:       path to the item image (webp) shown in the horizontal scroll.
//   detailImage: optional. If set, this image is used on the detail modal
//                instead of `image` — typically a tighter crop that fills
//                more of the modal. Falls back to `image`.
//   requestable: optional. When true, the detail page shows a "Request shirt"
//                primary button. Omit/false to hide it.
const items = [
    {
        id: 'dawn-and-dusk',
        title: 'Dawn and Dusk',
        month: 1,
        year: 2025,
        collections: ['Legendary Tools'],
        image: './images/dawn_and_dusk.webp',
        detailImage: './images/dawn_and_dusk2.webp',
        requestable: true
    },
    {
        id: 'lets-grow',
        title: "Let's Grow",
        month: 5,
        year: 2026,
        collections: [],
        image: './images/lets_grow.webp',
        detailImage: './images/lets_grow2.webp',
        requestable: true
    },
    {
        id: 'mail',
        title: 'Mail',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/mail.webp',
        detailImage: './images/mail2.webp'
    },
    {
        id: 'maps',
        title: 'Maps',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/maps.webp',
        detailImage: './images/maps2.webp'
    },
    {
        id: 'notes',
        title: 'Notes',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/notes.webp',
        detailImage: './images/notes2.webp'
    },
    {
        id: 'plane',
        title: 'Plane',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/plane.webp',
        detailImage: './images/plane2.webp'
    },
    {
        id: 'steel',
        title: 'Steel',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/steel.webp',
        detailImage: './images/steel2.webp'
    },
    {
        id: 'tools-a-cowboy-will-use',
        title: 'Tools a Cowboy Will Use',
        month: 6,
        year: 2025,
        collections: [],
        image: './images/tacwu.webp',
        detailImage: './images/tacwu2.webp',
        requestable: true
    }
];

const FOLLOW_URL = 'https://blog.toolsacowboywoulduse.com';
// "Request shirt" primary button on the detail page.
const REQUEST_URL = 'mailto:lpfeif19@gmail.com?subject=Tools%20a%20Cowboy%20-%20Shirt%20request';
