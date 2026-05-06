// Store items. Each item:
//   id:          unique slug
//   title:       display name
//   month:       1-12  (drives the bottom ticker; items also sort newest-first by date)
//   year:        4-digit year
//   collections: array of collection names (empty = uncollected). Collections
//                show up automatically as filter chips at the top of the page.
//   image:       path to the item image (webp).
const items = [
    {
        id: 'dawn-and-dusk',
        title: 'Dawn and Dusk',
        month: 1,
        year: 2025,
        collections: ['Legendary Tools'],
        image: './images/dawn_and_dusk.webp'
    },
    {
        id: 'lets-grow',
        title: "Let's Grow",
        month: 5,
        year: 2026,
        collections: [],
        image: './images/lets_grow.webp'
    },
    {
        id: 'mail',
        title: 'Mail',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/mail.webp'
    },
    {
        id: 'maps',
        title: 'Maps',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/maps.webp'
    },
    {
        id: 'notes',
        title: 'Notes',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/notes.webp'
    },
    {
        id: 'plane',
        title: 'Plane',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/plane.webp'
    },
    {
        id: 'steel',
        title: 'Steel',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './images/steel.webp'
    },
    {
        id: 'tools-a-cowboy-will-use',
        title: 'Tools a Cowboy Will Use',
        month: 6,
        year: 2025,
        collections: [],
        image: './images/tacwu.webp'
    }
];

const FOLLOW_URL = 'https://blog.toolsacowboywoulduse.com';
// "Request shirt" primary button on the detail page.
const REQUEST_URL = 'mailto:lpfeif19@gmail.com?subject=Tools%20a%20Cowboy%20-%20Shirt%20request';
