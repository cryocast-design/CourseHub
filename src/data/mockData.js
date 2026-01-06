export const courses = [
    {
        id: 1,
        title: "The Real World",
        instructor: "Andrew Tate",
        platform: "Skool",
        category: "Business",
        rating: 4.2,
        reviewCount: 15420,
        price: "$49/mo",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60",
        verified: true,
        tags: ["Wealth Creation", "E-commerce", "Freelancing", "Crypto"],
        description: "The Real World is a global community of like-minded individuals striving to acquire an abundance of wealth. We provide you with the tools, knowledge, and network to break free from the matrix.",
        socialLinks: [
            { platform: "Twitter", url: "https://twitter.com" },
            { platform: "Rumble", url: "https://rumble.com" }
        ],
        reviews: [
            { id: 101, user: "Jake P.", rating: 5, date: "2 days ago", text: "Changed my life. I made $5k in my first month using the copywriting campus.", verified: true },
            { id: 102, user: "Sarah M.", rating: 3, date: "1 week ago", text: "Good info but very chaotic community. Hard to keep up.", verified: true }
        ]
    },
    {
        id: 2,
        title: "Agency Navigator",
        instructor: "Iman Gadzhi",
        platform: "Skool",
        category: "Business",
        rating: 4.8,
        reviewCount: 3200,
        price: "$1499",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
        verified: true,
        tags: ["SMMA", "Agency", "Sales", "Outreach"],
        description: "The most comprehensive program on how to start and scale a digital marketing agency. From zero to $10k/month and beyond.",
        socialLinks: [
            { platform: "YouTube", url: "https://youtube.com" },
            { platform: "Instagram", url: "https://instagram.com" }
        ],
        reviews: [
            { id: 201, user: "Michael T.", rating: 5, date: "3 weeks ago", text: "Iman's production quality is unmatched. The content is actionable and the community is helpful.", verified: true },
            { id: 202, user: "Anon", rating: 4, date: "1 month ago", text: "Expensive but worth it if you actually put in the work.", verified: false }
        ]
    },
    {
        id: 3,
        title: "Content Creator Masterclass",
        instructor: "Ali Abdaal",
        platform: "Circle",
        category: "Creative",
        rating: 4.9,
        reviewCount: 890,
        price: "$200",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
        verified: true,
        tags: ["Productivity", "YouTube", "Filmmaking"],
        description: "Learn how to build a scalable content business. I share everything I've learned growing my channel to 4M+ subscribers.",
        socialLinks: [
            { platform: "YouTube", url: "https://youtube.com" },
            { platform: "Website", url: "https://aliabdaal.com" }
        ],
        reviews: []
    },
    {
        id: 4,
        title: "Fitness Freedom",
        instructor: "Generic Fit Influencer",
        platform: "Skool",
        category: "Fitness",
        rating: 3.5,
        reviewCount: 120,
        price: "$29/mo",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
        verified: false,
        tags: ["Weight Loss", "Muscle", "Diet"],
        description: "Just a generic fitness course. Nothing special.",
        socialLinks: [],
        reviews: []
    },
    {
        id: 5,
        title: "Crypto Whale Group",
        instructor: "CryptoKing",
        platform: "Telegram/Skool",
        category: "Finance",
        rating: 2.1,
        reviewCount: 50,
        price: "$99/mo",
        image: "https://images.unsplash.com/photo-1621504450168-38f64731b643?w=800&auto=format&fit=crop&q=60",
        verified: false,
        tags: ["Crypto", "Signals", "Pump&Dump"],
        description: "Get rich quick with my signals.",
        socialLinks: [],
        reviews: []
    },
    {
        id: 6,
        title: "Modern Synthesis",
        instructor: "Synthesizer Patel",
        platform: "Circle",
        category: "Music",
        rating: 4.7,
        reviewCount: 310,
        price: "$499",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60",
        verified: true,
        tags: ["Sound Design", "Music Theory", "Ableton"],
        description: "Deep dive into synthesis.",
        socialLinks: [],
        reviews: []
    },
    // Generate more simply to show scroll
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: 100 + i,
        title: `Dropshipping Elite ${i + 1}`,
        instructor: `Guru ${i + 1}`,
        platform: i % 3 === 0 ? "Circle" : "Skool",
        category: "Business",
        rating: (3 + Math.random() * 2).toFixed(1),
        reviewCount: Math.floor(Math.random() * 500),
        price: "$47/mo",
        image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D`,
        verified: Math.random() > 0.5,
    })),
];
