// Store items. Each item:
//   id:          unique slug
//   title:       display name
//   description: one-line copy shown on the detail page under the title
//   ordinal:     manual display order in the horizontal scroll (lower
//                = earlier). Items without an ordinal render last.
//   month:       1-12  (drives the bottom ticker only; not sort order)
//   year:        4-digit year (ticker only)
//   collections: array of collection names (empty = uncollected)
//   image:       path to the scroll image (webp)
//   detailImage: optional tighter crop used on the detail modal; falls
//                back to `image` when omitted
//   requestable: when true, the detail page shows the "Request shirt"
//                primary button
const items = [
    {
        id: 'dawn-and-dusk',
        title: 'Dawn and Dusk',
        description: 'For sunrise watchers and sunset chasers.',
        ordinal: 1,
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
        ordinal: 2,
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
        ordinal: 3,
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
        ordinal: 4,
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
        ordinal: 5,
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
        ordinal: 6,
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
        ordinal: 7,
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
        ordinal: 8,
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
