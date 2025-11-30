export interface Destination {
    name: string;
    slug: string;
    image: string;
    description: string;
    featured?: string;
    highlights: string[];
    bestTimeToVisit: string;
    activities: string[];
    gettingThere: string;
    accommodationTypes: string[];
}

export const destinations: Destination[] = [
    {
        name: 'Masai Mara National Reserve',
        slug: 'masai-mara',
        image: '/images/hero.jpg',
        description: 'Witness the spectacular Great Migration and encounter the Big Five in one of Africa\'s most famous wildlife reserves. Home to the highest concentration of wildlife in Kenya, the Masai Mara offers an unparalleled safari experience with its vast rolling plains and abundant predators.',
        featured: 'Most Popular',
        highlights: [
            'The Great Wildebeest Migration (July-October)',
            'High density of lions, leopards, and cheetahs',
            'Hot air balloon safaris over the plains',
            'Interaction with local Maasai community',
        ],
        bestTimeToVisit: 'July to October for the migration; January to March for calving season and general game viewing.',
        activities: [
            'Game drives',
            'Hot air balloon safaris',
            'Guided bush walks',
            'Cultural visits',
            'Bush breakfasts/dinners',
        ],
        gettingThere: '45-minute flight from Nairobi Wilson Airport or a 5-6 hour drive from Nairobi.',
        accommodationTypes: ['Luxury Tented Camps', 'Safari Lodges', 'Budget Camps', 'Private Villas'],
    },
    {
        name: 'Amboseli National Park',
        slug: 'amboseli',
        image: '/images/hero.jpg',
        description: 'Experience majestic elephants against the backdrop of snow-capped Mount Kilimanjaro. Famous for its large elephant herds and stunning scenery, Amboseli is a photographer\'s paradise offering iconic views of Africa\'s highest peak.',
        featured: 'Scenic Views',
        highlights: [
            'Large herds of elephants with big tucks',
            'Views of Mount Kilimanjaro',
            'Observation Hill for panoramic views',
            'Diverse birdlife in swamps',
        ],
        bestTimeToVisit: 'June to October and January to February for best views of Kilimanjaro and wildlife.',
        activities: [
            'Game viewing',
            'Bird watching',
            'Photography',
            'Cultural visits',
        ],
        gettingThere: '4-hour drive from Nairobi or a short flight to Amboseli airstrip.',
        accommodationTypes: ['Luxury Lodges', 'Tented Camps', 'Eco-lodges'],
    },
    {
        name: 'Tsavo National Parks',
        slug: 'tsavo',
        image: '/images/hero.jpg',
        description: 'Discover the red elephants and vast wilderness in Kenya\'s largest national park. Split into Tsavo East and Tsavo West, this massive ecosystem offers diverse landscapes from open plains to volcanic terrain and natural springs.',
        featured: 'Largest Park',
        highlights: [
            'Red-dust coated elephants',
            'Mzima Springs (Tsavo West)',
            'Lugard Falls (Tsavo East)',
            'Shetani Lava Flow',
        ],
        bestTimeToVisit: 'June to October and January to February.',
        activities: [
            'Game drives',
            'Rock climbing',
            'Cave exploration',
            'Underwater hippo viewing (Mzima Springs)',
        ],
        gettingThere: '5-6 hour drive from Nairobi or Mombasa; accessible by SGR train.',
        accommodationTypes: ['Lodges', 'Tented Camps', 'Public Campsites'],
    },
    {
        name: 'Lake Nakuru National Park',
        slug: 'lake-nakuru',
        image: '/images/hero.jpg',
        description: 'Famous for flamingo flocks and rhino sanctuary. A birdwatcher\'s paradise with over 450 bird species and excellent game viewing, including both black and white rhinos and the endangered Rothschild\'s giraffe.',
        featured: 'Bird Sanctuary',
        highlights: [
            'Thousands of flamingos (seasonal)',
            'Rhino sanctuary (Black and White Rhinos)',
            'Rothschild\'s Giraffe',
            'Baboon Cliff viewpoint',
        ],
        bestTimeToVisit: 'Year-round, but dry seasons are best for game viewing.',
        activities: [
            'Bird watching',
            'Game drives',
            'Picnicking',
            'Camping',
        ],
        gettingThere: '3-hour drive from Nairobi.',
        accommodationTypes: ['Lodges', 'Guest Houses', 'Campsites'],
    },
    {
        name: 'Samburu National Reserve',
        slug: 'samburu',
        image: '/images/hero.jpg',
        description: 'Home to unique "Samburu Special Five" - Grevy\'s zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx. This rugged and beautiful northern Kenya wilderness offers a distinct safari experience from the southern parks.',
        featured: 'Unique Wildlife',
        highlights: [
            'Samburu Special Five',
            'Ewaso Ng\'iro River',
            'Leopard sightings',
            'Samburu culture',
        ],
        bestTimeToVisit: 'June to October and December to March.',
        activities: [
            'Game drives',
            'Camel safaris',
            'Cultural visits',
            'River walks',
        ],
        gettingThere: '5-6 hour drive from Nairobi or a 1-hour flight.',
        accommodationTypes: ['Luxury Tented Camps', 'Lodges'],
    },
    {
        name: 'Nairobi National Park',
        slug: 'nairobi',
        image: '/images/hero.jpg',
        description: 'The only national park within a capital city. Perfect for day trips with views of Nairobi\'s skyline and wildlife including lions, rhinos, and giraffes. It serves as a major rhino sanctuary.',
        featured: 'City Safari',
        highlights: [
            'Wildlife with city skyline backdrop',
            'Black Rhino Sanctuary',
            'Ivory Burning Site Monument',
            'Walking trails at hippo pools',
        ],
        bestTimeToVisit: 'Year-round, best during dry months (July-October, Jan-Feb).',
        activities: [
            'Game drives',
            'Picnics',
            'Walking safaris (designated areas)',
            'Bird watching',
        ],
        gettingThere: '20-minute drive from Nairobi CBD.',
        accommodationTypes: ['Tented Camps (inside park)', 'City Hotels (nearby)'],
    },
];
