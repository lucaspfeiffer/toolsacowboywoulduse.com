// Store items. Each item:
//   id:          unique slug
//   title:       display name
//   description: one-line copy shown on the detail page under the title
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
        description: 'For sunrise watchers and sunset chasers.',
        month: 1,
        year: 2025,
        collections: ['Legendary Tools'],
        image: './store/images/dawn_and_dusk.webp',
        detailImage: './store/images/dawn_and_dusk2.webp',
        requestable: true
    },
    {
        id: 'lets-grow',
        title: "Let's Grow",
        description: 'A garden, an idea, a habit — pick one and start.',
        month: 5,
        year: 2026,
        collections: [],
        image: './store/images/lets_grow.webp',
        detailImage: './store/images/lets_grow2.webp',
        requestable: true
    },
    {
        id: 'mail',
        title: 'Mail',
        description: 'For messages worth waiting for.',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './store/images/mail.webp',
        detailImage: './store/images/mail2.webp'
    },
    {
        id: 'maps',
        title: 'Maps',
        description: 'Find your way, or lose it on purpose.',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './store/images/maps.webp',
        detailImage: './store/images/maps2.webp'
    },
    {
        id: 'notes',
        title: 'Notes',
        description: 'For the thoughts you don’t want to forget.',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './store/images/notes.webp',
        detailImage: './store/images/notes2.webp'
    },
    {
        id: 'plane',
        title: 'Plane',
        description: 'Window seat preferred.',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './store/images/plane.webp',
        detailImage: './store/images/plane2.webp'
    },
    {
        id: 'steel',
        title: 'Steel',
        description: 'Made the old way, made to last.',
        month: 5,
        year: 2026,
        collections: ['Legendary Tools'],
        image: './store/images/steel.webp',
        detailImage: './store/images/steel2.webp'
    },
    {
        id: 'tools-a-cowboy-will-use',
        title: 'Tools a Cowboy Will Use',
        description: 'The first shirt — a reminder of the spirit behind the work.',
        month: 6,
        year: 2025,
        collections: [],
        image: './store/images/tacwu.webp',
        detailImage: './store/images/tacwu2.webp',
        requestable: true
    }
];

const FOLLOW_URL = 'https://blog.toolsacowboywoulduse.com';
// "Request shirt" primary button on the detail page.
const REQUEST_URL = 'mailto:lpfeif19@gmail.com?subject=Tools%20a%20Cowboy%20-%20Shirt%20request';
