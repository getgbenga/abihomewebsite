// Service process/methodology for Abihomes Ltd
const serviceProcess = [
  {
    title: "Land Research & Evaluation",
    description: "Our process begins with thorough research to identify promising land opportunities. We analyze location value, development potential, planning regulations, and market trends to ensure optimal investment.",
    steps: [
      "Market analysis and opportunity identification",
      "Site visits and preliminary assessments",
      "Planning permission feasibility studies",
      "Environmental and geological evaluations",
      "Infrastructure and utilities assessment",
      "Neighborhood and community analysis"
    ]
  },
  {
    title: "Acquisition",
    description: "Once we've identified suitable land, our acquisition team handles all aspects of the purchase process, ensuring legal compliance and securing the best possible terms.",
    steps: [
      "Property valuation and financial modeling",
      "Due diligence investigations",
      "Legal and title verification",
      "Negotiation and contract preparation",
      "Financing arrangements",
      "Completion of purchase"
    ]
  },
  {
    title: "Planning & Design",
    description: "Our expert design team works closely with clients to develop plans that maximize property potential while ensuring compliance with all regulations and building standards.",
    steps: [
      "Client consultation and requirement gathering",
      "Concept design development",
      "Architectural and structural planning",
      "Planning permission applications",
      "Building regulations approval",
      "Detailed construction drawings"
    ]
  },
  {
    title: "Construction",
    description: "With ISO 9001 certification, our construction phase adheres to the highest quality standards. We employ skilled professionals and use premium materials to ensure exceptional build quality.",
    steps: [
      "Site preparation and groundworks",
      "Foundation construction",
      "Structural framework",
      "Roofing and exterior finishing",
      "Mechanical and electrical installations",
      "Interior finishing and fixtures"
    ]
  },
  {
    title: "Quality Assurance",
    description: "Throughout the construction process, our dedicated quality assurance team conducts regular inspections to ensure all work meets our exacting standards for durability and craftsmanship.",
    steps: [
      "Regular site inspections",
      "Material quality verification",
      "Workmanship assessments",
      "Building control inspections",
      "Systems testing and commissioning",
      "Snagging and remedial works"
    ]
  },
  {
    title: "Completion & Handover",
    description: "We ensure a smooth transition from construction to occupation, providing comprehensive documentation and support to property owners.",
    steps: [
      "Final inspections and certifications",
      "Building control sign-off",
      "Systems demonstrations",
      "Documentation handover",
      "Warranty and guarantee provision",
      "Client orientation and training"
    ]
  },
  {
    title: "Marketing & Sales",
    description: "For development projects, our marketing team creates compelling campaigns to attract potential buyers, highlighting the quality and unique features of our properties.",
    steps: [
      "Property valuation and pricing strategy",
      "Professional photography and virtual tours",
      "Marketing material development",
      "Online and offline promotion",
      "Viewings and client consultations",
      "Sales progression and completion"
    ]
  }
];

// Previous projects for Abihomes Ltd
const previousProjects = [
  {
    title: "Hale Barns Transformation",
    location: "Hale Barns",
    description: "Comprehensive transformation of a 3-bedroom bungalow into a luxurious 6-bedroom residence, significantly enhancing the property value and creating a stunning family home.",
    details: {
      type: "Residential Renovation & Extension",
      scope: "Conversion from 3-bed bungalow to 6-bed house",
      initialValue: "£450,000",
      completedValue: "£1,350,000",
      valueIncrease: "£900,000 (200% increase)",
      features: [
        "Complete structural reconfiguration",
        "Addition of first floor and loft conversion",
        "High-specification interior finishes",
        "Modern mechanical and electrical systems",
        "Landscaped gardens and exterior enhancements",
        "Energy efficiency improvements"
      ]
    },
    image: "/images/projects/hale-barns-project.jpg" // Placeholder - will need actual image
  },
  {
    title: "Premium New Build Residence",
    location: "Greater Manchester",
    description: "Design and construction of an elegant 5-bedroom new build property, featuring contemporary design elements and premium quality finishes throughout.",
    details: {
      type: "New Build Residential",
      scope: "5-bedroom luxury residence",
      value: "£750,000",
      features: [
        "Bespoke architectural design",
        "Open-plan living spaces",
        "High-end kitchen and bathroom installations",
        "Integrated smart home technology",
        "Energy-efficient building systems",
        "Premium landscaping and outdoor living areas"
      ]
    },
    image: "/images/projects/new-build-project.jpg" // Placeholder - will need actual image
  },
  {
    title: "Omega Apartments",
    location: "Manchester",
    description: "Development of a premium four-storey apartment building comprising 24 high-specification flats designed for modern urban living.",
    details: {
      type: "Multi-unit Residential Development",
      scope: "24 apartments across 4 floors (6 per floor)",
      features: [
        "Mix of 1, 2, and 3-bedroom apartments",
        "Contemporary architectural design",
        "High-quality construction materials",
        "Modern amenities and facilities",
        "Energy-efficient building systems",
        "Secure access and parking"
      ]
    },
    image: "/images/projects/omega-apartments.jpg" // Placeholder - will need actual image
  }
];

// Export for use in website
module.exports = {
  serviceProcess,
  previousProjects
};
