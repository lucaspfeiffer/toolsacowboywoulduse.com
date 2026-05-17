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
//   appStoreUrl: optional — when set, the detail page also shows the
//                "Download on App Store" badge linking here
//   gallery:     optional array (1–10) of extra image paths shown on the
//                detail page below the main image + copy. Use webp.
//   hidden:      when true, the item is excluded from the store view
//                (kept in the file so it's easy to bring back later)
const items = [
    {
        id: 'dawn-and-dusk',
        title: 'Dawn and Dusk',
        description: 'The first product from Tools a Cowboy Would Used, designed to help us experience more sunrises and sunsets. Launched in 2025, people love using Dawn and Dusk each day around the world.',
        ordinal: 1,
        month: 1,
        year: 2025,
        collections: ['Legendary Tools'],
        image: './store/images/dawn_and_dusk.webp',
        detailImage: './store/images/dawn_and_dusk2.webp',
        requestable: true,
        appStoreUrl: 'https://apps.apple.com/us/app/dawn-and-dusk/id6736839971',
        gallery: [
            './store/images/dawn_and_dusk_g1.webp',
            './store/images/dawn_and_dusk_g2.webp'
        ]
    },
    {
        id: 'lets-grow',
        title: "Let's Grow",
        description: "Inspired by 'GT' Greg Taylor. Nashville, TN. Get better every day.",
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
        description: 'Email — a legendary technology built on the SMTP protocol. This tool is an inspiration for Tools a Cowboy Would Use. Artwork inspired by Apple Mail.',
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
        description: 'Maps are one of the most foundational tools of mankind. Artwork inspired by Apple Maps.',
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
        description: 'The closest thing we have to human .md files. Artwork inspired by Apple Notes.',
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
        description: 'Human flight is one of the most revolutionary milestones for mankind. A celebration of how air travel has changed the world, and those who pioneered it. Artwork inspired by the Wright Brothers.',
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
        description: "The same material that industrialized the world, is used for the rockets that'll make it to the Moon and Mars. A material worth celebrating. Artwork inspired by the RuneScape steel bar.",
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
        requestable: true,
        hidden: true
    }
];

const FOLLOW_URL = 'https://blog.toolsacowboywoulduse.com';
// The "Request shirt" mailto is built per-item in the modal so the
// subject line carries the item title (e.g. "Tools a Cowboy Would Use
// — Requesting Dawn and Dusk shirt"). Change the recipient/template
// there in index.html.
