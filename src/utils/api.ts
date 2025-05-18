// Simulated API for generating recommendations
export const generateRecommendations = async (section: string, userInput: string) => {
  // In a real app, this would be an API call to a backend service
  // For this demo, we'll simulate a delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  switch (section) {
    case 'books':
      return generateBookRecommendations(userInput);
    case 'activities':
      return generateActivityRecommendations(userInput);
    case 'movies':
      return generateMovieRecommendations(userInput);
    case 'wishlist':
      return generateWishlistRecommendations(userInput);
    case 'restaurants':
      return generateRestaurantRecommendations(userInput);
    case 'travel':
      return generateTravelRecommendations(userInput);
    case 'swipe':
      return generateSwipeRecommendations(userInput);
    case 'gifts':
      return generateGiftRecommendations(userInput);
    case 'overlap':
      return generateOverlapComparison(userInput);
    case 'outfit':
      return generateOutfitEvaluation(userInput);
    default:
      throw new Error('Invalid section');
  }
};

const generateBookRecommendations = (genre: string) => {
  const recommendations = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      summary: "Between life and death, Nora finds a library with books showing alternate lives she could have lived if she made different choices.",
      review: "A profound exploration of regret, possibility, and the beauty of existence."
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      summary: "A lone astronaut with amnesia must save humanity from extinction by solving a scientific mystery in deep space.",
      review: "Brilliant blend of hard science and heart-pounding adventure that keeps you guessing."
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      summary: "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.",
      review: "A timeless tale about the marks we leave on the world and each other."
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      summary: "An Artificial Friend observes human behavior while hoping to be chosen by a customer in a technologically advanced future.",
      review: "A haunting meditation on what it means to be human in an increasingly artificial world."
    },
    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      summary: "A retelling of the Trojan War through the eyes of Patroclus, Achilles' companion and lover.",
      review: "A breathtaking reimagining that brings ancient mythology to vivid, emotional life."
    }
  ];
  
  return recommendations;
};

const generateActivityRecommendations = (category: string) => {
  return [
    "Create a themed scavenger hunt with riddles and puzzles",
    "Start a mini indoor herb garden with unique varieties",
    "Host a blind taste test night with unusual food combinations",
    "Design and build a miniature cardboard city with working lights",
    "Learn to fold origami stars and create a hanging constellation"
  ];
};

const generateMovieRecommendations = (genre: string) => {
  return [
    {
      title: "Everything Everywhere All at Once",
      year: 2022,
      tagline: "The universe is so much bigger than you realize.",
      rating: 8.9
    },
    {
      title: "Parasite",
      year: 2019,
      tagline: "Act like you own the place.",
      rating: 8.5
    },
    {
      title: "Dune",
      year: 2021,
      tagline: "Beyond fear, destiny awaits.",
      rating: 8.0
    },
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      tagline: "A perfect holiday... a perfect escape.",
      rating: 8.1
    },
    {
      title: "Arrival",
      year: 2016,
      tagline: "Why are they here?",
      rating: 7.9
    }
  ];
};

const generateWishlistRecommendations = (category: string) => {
  return [
    "Noise-cancelling headphones with spatial audio",
    "Handcrafted leather journal with custom monogram",
    "Sunrise alarm clock with natural light simulation",
    "Modular desk organizer with wireless charging",
    "Subscription to a monthly mystery book box"
  ];
};

const generateRestaurantRecommendations = (cuisine: string) => {
  return [
    {
      name: "Azure Garden",
      emoji: "🌿",
      short_desc: "Farm-to-table fusion with seasonal ingredients and breathtaking ocean views."
    },
    {
      name: "Ember & Ash",
      emoji: "🔥",
      short_desc: "Wood-fired specialties with house-made spice blends and craft cocktails."
    },
    {
      name: "Sakura Cloud",
      emoji: "🌸",
      short_desc: "Modern Japanese cuisine with molecular gastronomy techniques and artistic presentation."
    },
    {
      name: "Olive & Vine",
      emoji: "🫒",
      short_desc: "Mediterranean tapas with organic wine pairings and live acoustic music."
    },
    {
      name: "Spice Voyage",
      emoji: "🌶️",
      short_desc: "Global street food inspired dishes with bold flavors and vibrant atmosphere."
    }
  ];
};

const generateTravelRecommendations = (region: string) => {
  return [
    {
      location: "Kyoto, Japan",
      short_description: "Ancient temples, traditional tea houses, and stunning bamboo forests.",
      star_rating: 5
    },
    {
      location: "Santorini, Greece",
      short_description: "Whitewashed buildings, blue domes, and breathtaking Aegean Sea sunsets.",
      star_rating: 5
    },
    {
      location: "Banff National Park, Canada",
      short_description: "Turquoise lakes, snow-capped mountains, and abundant wildlife.",
      star_rating: 4
    },
    {
      location: "Marrakech, Morocco",
      short_description: "Vibrant souks, ornate palaces, and fragrant gardens in the Red City.",
      star_rating: 4
    },
    {
      location: "Queenstown, New Zealand",
      short_description: "Adventure capital with stunning alpine scenery and adrenaline activities.",
      star_rating: 5
    }
  ];
};

const generateSwipeRecommendations = (preferences: string) => {
  return [
    {
      itemName: "Handcrafted Ceramic Mug Set",
      reason: "The artisanal quality matches your preference for unique homewares."
    },
    {
      itemName: "Wireless Noise-Cancelling Earbuds",
      reason: "Perfect for your commute and workout routine with premium sound quality."
    },
    {
      itemName: "Indoor Herb Garden Kit",
      reason: "Combines your interest in cooking with sustainable living practices."
    },
    {
      itemName: "Minimalist Desk Organizer",
      reason: "Sleek design that complements your aesthetic while improving productivity."
    },
    {
      itemName: "Vintage-Inspired Polaroid Camera",
      reason: "Captures memories in a tangible format that aligns with your nostalgic style."
    }
  ];
};

const generateGiftRecommendations = (occasion: string) => {
  return [
    {
      name: "Personalized Star Map",
      category: "Home Decor",
      reason: "A meaningful keepsake showing the night sky from a special date and location."
    },
    {
      name: "Gourmet Cooking Class",
      category: "Experience",
      reason: "Creates lasting memories while learning new skills together."
    },
    {
      name: "Custom Vinyl Record",
      category: "Music",
      reason: "Preserves your special playlist in a tangible, nostalgic format."
    },
    {
      name: "Artisanal Tea Subscription",
      category: "Food & Drink",
      reason: "A thoughtful gift that provides new discoveries throughout the year."
    },
    {
      name: "Personalized Book Set",
      category: "Literature",
      reason: "Curated collection based on their reading preferences with custom bookplates."
    }
  ];
};

const generateOverlapComparison = (lists: string) => {
  // In a real app, this would parse the input properly
  return {
    common: ["The Office", "Hiking", "Thai Food", "Board Games", "Photography"],
    unique_to_you: ["Jazz Music", "Science Fiction", "Cooking", "Tennis", "Podcasts"],
    unique_to_friend: ["Classical Music", "Fantasy", "Baking", "Soccer", "Audiobooks"]
  };
};

const generateOutfitEvaluation = (items: string) => {
  return {
    comboScore: 85,
    style_description: "Modern minimalist with subtle vintage influences and clean silhouettes.",
    recommended_accessory: "A slim silver watch with a leather band would complete this look perfectly."
  };
};