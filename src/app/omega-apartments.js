// Omega Apartments pricing and details
const omegaApartments = {
  location: {
    address: "1 Peel Cross",
    area: "Salford Quays",
    city: "Manchester",
    description: "Premium location in Salford Quays, with proximity to Media City, Manchester United stadium, and Salford University."
  },
  completion: "October 2025",
  features: {
    general: [
      "High-specification finishes throughout",
      "Advanced sprinkler system for enhanced safety",
      "Mechanical Ventilation with Heat Recovery (MVHR) system",
      "Video call entry system",
      "Up to 2 car park spaces available per apartment",
      "Secure bicycle storage",
      "Communal gardens and outdoor spaces",
      "Lift access to all floors"
    ],
    sustainability: [
      "Solar panels installed for renewable energy generation",
      "Electric vehicle (EV) charging points",
      "Secure bike parking facilities",
      "Lime bike station only 200 meters away",
      "Energy-efficient appliances throughout",
      "High-performance insulation for reduced energy consumption",
      "Smart energy monitoring systems"
    ],
    nearby: [
      "Media City UK - 5 minutes",
      "Manchester United Stadium - 10 minutes",
      "Salford University - 8 minutes",
      "Metrolink station - 3 minutes walk",
      "Shopping and dining options - 5 minutes",
      "Waterfront promenade - 2 minutes"
    ]
  },
  apartments: [
    // Ground Floor
    {
      plot: "0.1",
      level: "Ground",
      bedrooms: 2,
      orientation: "South West",
      sqft: 678.1,
      originalPrice: 220000,
      price: 245300, // 11.5% markup
      status: "Available",
      type: "2 Bedroom Apartment"
    },
    {
      plot: "0.2",
      level: "Ground",
      bedrooms: 1,
      orientation: "South",
      sqft: 434.8,
      originalPrice: 145000,
      price: 161675, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "0.3",
      level: "Ground",
      bedrooms: 1,
      orientation: "East",
      sqft: 412.2,
      originalPrice: 145000,
      price: 161675, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "0.4",
      level: "Ground",
      bedrooms: 1,
      orientation: "South",
      sqft: 525.2,
      originalPrice: 147000,
      price: 163905, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "0.5",
      level: "Ground",
      bedrooms: 1,
      orientation: "East",
      sqft: 456.3,
      originalPrice: 145000,
      price: 161675, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "0.6",
      level: "Ground",
      bedrooms: 2,
      orientation: "North",
      sqft: 660.9,
      originalPrice: 220000,
      price: 245300, // 11.5% markup
      status: "Available",
      type: "2 Bedroom Apartment"
    },
    
    // First Floor
    {
      plot: "1.1",
      level: "First",
      bedrooms: 2,
      orientation: "South West",
      sqft: 678.1,
      originalPrice: 222000,
      price: 247530, // 11.5% markup
      status: "Available",
      type: "2 Bedroom Apartment"
    },
    {
      plot: "1.2",
      level: "First",
      bedrooms: 1,
      orientation: "South",
      sqft: 434.8,
      originalPrice: 147000,
      price: 163905, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "1.3",
      level: "First",
      bedrooms: 1,
      orientation: "East",
      sqft: 409.0,
      originalPrice: 147000,
      price: 163905, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "1.4",
      level: "First",
      bedrooms: 1,
      orientation: "South",
      sqft: 470.3,
      originalPrice: 147000,
      price: 163905, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "1.5",
      level: "First",
      bedrooms: 1,
      orientation: "North",
      sqft: 600.6,
      originalPrice: 160000,
      price: 178400, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment with Study"
    },
    {
      plot: "1.6",
      level: "First",
      bedrooms: 3,
      orientation: "East",
      sqft: 825.5,
      originalPrice: 250000,
      price: 278750, // 11.5% markup
      status: "Available",
      type: "3 Bedroom Apartment"
    },
    
    // Second Floor
    {
      plot: "2.1",
      level: "Second",
      bedrooms: 2,
      orientation: "South West",
      sqft: 678.1,
      originalPrice: 224000,
      price: 249760, // 11.5% markup
      status: "Available",
      type: "2 Bedroom Apartment"
    },
    {
      plot: "2.2",
      level: "Second",
      bedrooms: 1,
      orientation: "South East",
      sqft: 462.8,
      originalPrice: 149000,
      price: 166135, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "2.3",
      level: "Second",
      bedrooms: 1,
      orientation: "East",
      sqft: 417.6,
      originalPrice: 149000,
      price: 166135, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "2.4",
      level: "Second",
      bedrooms: 1,
      orientation: "South",
      sqft: 470.3,
      originalPrice: 149000,
      price: 166135, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "2.5",
      level: "Second",
      bedrooms: 1,
      orientation: "North",
      sqft: 600.6,
      originalPrice: 162000,
      price: 180630, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment with Study"
    },
    {
      plot: "2.6",
      level: "Second",
      bedrooms: 3,
      orientation: "South East",
      sqft: 855.7,
      originalPrice: 252000,
      price: 280980, // 11.5% markup
      status: "Available",
      type: "3 Bedroom Apartment"
    },
    
    // Third Floor
    {
      plot: "3.1",
      level: "Third",
      bedrooms: 2,
      orientation: "South West",
      sqft: 678.1,
      originalPrice: 226000,
      price: 251990, // 11.5% markup
      status: "Available",
      type: "2 Bedroom Apartment"
    },
    {
      plot: "3.2",
      level: "Third",
      bedrooms: 1,
      orientation: "South East",
      sqft: 462.8,
      originalPrice: 151000,
      price: 168365, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "3.3",
      level: "Third",
      bedrooms: 1,
      orientation: "East",
      sqft: 412.2,
      originalPrice: 151000,
      price: 168365, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "3.4",
      level: "Third",
      bedrooms: 1,
      orientation: "South",
      sqft: 533.8,
      originalPrice: 151000,
      price: 168365, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment"
    },
    {
      plot: "3.5",
      level: "Third",
      bedrooms: 1,
      orientation: "North",
      sqft: 600.6,
      originalPrice: 164000,
      price: 182860, // 11.5% markup
      status: "Available",
      type: "1 Bedroom Apartment with Study"
    },
    {
      plot: "3.6",
      level: "Third",
      bedrooms: 3,
      orientation: "South East",
      sqft: 855.7,
      originalPrice: 254000,
      price: 283210, // 11.5% markup
      status: "Available",
      type: "3 Bedroom Apartment"
    }
  ],
  apartmentTypes: [
    {
      type: "1 Bedroom Apartment",
      bedrooms: 1,
      bathrooms: 1,
      minSqft: 409,
      maxSqft: 534,
      minPrice: 161675,
      maxPrice: 168365,
      features: [
        "Open-plan living/dining/kitchen area",
        "Double bedroom with built-in wardrobe",
        "Modern bathroom with premium fixtures",
        "Private balcony or terrace (select units)",
        "High-specification kitchen with integrated appliances",
        "MVHR system for optimal air quality",
        "Video call entry system",
        "Sprinkler system for enhanced safety"
      ],
      image: "/images/construction/apartment_1bed.jpg"
    },
    {
      type: "1 Bedroom Apartment with Study",
      bedrooms: 1,
      bathrooms: 1,
      studyRoom: true,
      minSqft: 600,
      maxSqft: 601,
      minPrice: 178400,
      maxPrice: 182860,
      features: [
        "Open-plan living/dining/kitchen area",
        "Double bedroom with built-in wardrobe",
        "Dedicated study/home office space",
        "Modern bathroom with premium fixtures",
        "Private balcony with city views",
        "High-specification kitchen with integrated appliances",
        "MVHR system for optimal air quality",
        "Video call entry system",
        "Sprinkler system for enhanced safety"
      ],
      image: "/images/construction/apartment_1bed_study.jpg"
    },
    {
      type: "2 Bedroom Apartment",
      bedrooms: 2,
      bathrooms: 2,
      minSqft: 660,
      maxSqft: 679,
      minPrice: 245300,
      maxPrice: 251990,
      features: [
        "Spacious open-plan living/dining/kitchen area",
        "Master bedroom with en-suite bathroom",
        "Second double bedroom",
        "Family bathroom with premium fixtures",
        "Private balcony or terrace with views",
        "High-specification kitchen with integrated appliances",
        "Ample storage space",
        "MVHR system for optimal air quality",
        "Video call entry system",
        "Sprinkler system for enhanced safety"
      ],
      image: "/images/construction/apartment_2bed.jpg"
    },
    {
      type: "3 Bedroom Apartment",
      bedrooms: 3,
      bathrooms: 2,
      minSqft: 825,
      maxSqft: 856,
      minPrice: 278750,
      maxPrice: 283210,
      features: [
        "Generous open-plan living/dining/kitchen area",
        "Master bedroom with en-suite bathroom",
        "Two additional double bedrooms",
        "Family bathroom with premium fixtures",
        "Large private balcony with panoramic views",
        "High-specification kitchen with integrated appliances",
        "Abundant storage space throughout",
        "MVHR system for optimal air quality",
        "Video call entry system",
        "Sprinkler system for enhanced safety"
      ],
      image: "/images/construction/apartment_3bed.jpg"
    }
  ]
};

// Export for use in website
module.exports = {
  omegaApartments
};
