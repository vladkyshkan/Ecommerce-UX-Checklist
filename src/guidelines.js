import { arrowFunctionExpression } from "@babel/types";

const guidelines = {
  guidelineTopic1: {
    name: "Homepage",
    list: {
      guideline1: {
        text: "Display clear value proposition above the fold",
        implementation: "easy",
        impact: "high",
        image: "images/image1.1.jpg",
        description:
          "Put value proposition above the fold to indicate to potential customers what value they get upon buying your products and what makes you different from competitors. ",
        link: "https://conversionxl.com/blog/above-the-fold/"
      },

      guideline2: {
        text: "Show the breadth of the product catalog on homepage",
        implementation: "medium",
        impact: "high",
        image: "images/image1.2.jpg",
        description:
          "To avoid misinterpretation regarding product range (especially if it is very broad) of your e-commerce website, feature different products on the homepage. ",
        link: "https://baymard.com/blog/inferring-product-catalog-from-homepage"
      },

      guideline3: {
        text: "Personalize homepage content",
        implementation: "hard",
        impact: "high",
        image: "images/image1.3.jpg",
        description:
          'Show personalize sections (e.g. "Recommended for you" or "Based on your searches") to increase relevance of the page for the user. ',
        link: "https://sleeknote.com/blog/e-commerce-personalization"
      },

      guideline4: {
        text:
          "Stop autorotating carousels on hover or after any user interaction with it",
        implementation: "easy",
        impact: "medium",
        description:
          "When the user hovers the carousel banner, he is usually interested in its content and therefore shouldn't be interrupted by banner switch. ",
        link: "https://baymard.com/blog/homepage-carousel"
      }
    }
  },

  guidelineTopic2: {
    name: "Navigation",
    list: {
      guideline1: {
        text: "Make parent categories clickable",
        implementation: "easy",
        impact: "medium",
        image: "images/image2.1.jpg",
        description:
          "Allow customers to see general category page before going into the specific subcategory pages inside it. ",
        link:
          "https://www.smashingmagazine.com/2013/11/guidelines-navigation-categories-ecommerce-study/"
      },

      guideline2: {
        text: "Navigation hierarchy should be reflected visually",
        implementation: "medium",
        impact: "high",
        image: "images/image2.2.jpg",
        description:
          "Differentiate categories and subcategories with font styling, indention, and spatial indicators."
      },

      guideline3: {
        text: "Avoid site-specific category naming",
        implementation: "easy",
        impact: "high",
        image: "images/image2.3.jpg",
        description:
          "Don't make users to guess what the label refer to and use descriptive category names. ",
        link: "https://www.nngroup.com/articles/category-names-suck/"
      },

      guideline4: {
        text: 'Show "New" and "Sale" as separate categories',
        implementation: "medium",
        impact: "high",
        image: "images/image2.4.jpg",
        description:
          "Allow customers to easily access new items and available deals instead of searching through previously browsed products or going through product lists."
      },

      guideline5: {
        text: "Show popular filters as subcategories",
        implementation: "hard",
        impact: "medium",
        image: "images/image2.5.jpg",
        description:
          "Consider displaying very popular filters as a part of navigation."
      },

      guideline6: {
        text: "Display key contact information",
        implementation: "easy",
        impact: "medium",
        image: "images/image2.6.jpg",
        description:
          "Make it easy for a customer to get in touch with your store or request support."
      },

      guideline7: {
        text: "Display store or location icon (if offline sales is important)",
        implementation: "easy",
        impact: "medium",
        image: "images/image2.7.jpg",
        description:
          "Place a store locator in the header to allow customers easily find physical stores, if large % of sales happen offline."
      },

      guideline8: {
        text: "Logo should always link to homepage",
        implementation: "easy",
        impact: "medium",
        description:
          "Site logo that links to the homepage is a web convention known by majority of internet users. It can be an important option for some users as a way to begin their product search afresh. ",
        link: "https://www.nngroup.com/articles/homepage-links/"
      }
    }
  },

  guidelineTopic3: {
    name: "Search",
    list: {
      guideline1: {
        text: "Make search box prominent",
        implementation: "easy",
        impact: "high",
        image: "images/image3.1.jpg",
        description:
          "Show search box instead of search icon to help users find it more easily. ",
        link: "https://baymard.com/blog/search-field-design"
      },

      guideline2: {
        text: "Use autocomplete with error-correction",
        implementation: "hard",
        impact: "high",
        image: "images/image3.2.jpg",
        description:
          "Save customer time by suggesting products and reducing the need to type whole query. ",
        link: "https://pixelter.com/blog/search-autocomplete-best-practices/"
      },

      guideline3: {
        text: "Show search history",
        implementation: "medium",
        impact: "medium",
        image: "images/image3.3.jpg",
        description:
          "Very often people search for the same item repeatedly, even during one session. Save customer time by providing the option of repeating past searches. ",
        link:
          "https://www.nextopia.com/ecommerce-best-practices/storing-recent-searches"
      },

      guideline4: {
        text: "Avoid zero results pages",
        implementation: "medium",
        impact: "high",
        image: "images/image3.4.jpg",
        description:
          "If nothing was found, show personalized recommendations, phone number or chat, recommendations to check spelling, try more general or another keyword. ",
        link: "https://baymard.com/blog/no-results-page"
      },

      guideline5: {
        text: "Display the total number of results",
        implementation: "easy",
        impact: "medium",
        image: "images/image3.5.jpg",
        description:
          "Total number of results indicates to customer the quality of search query and helps him decide to scan results or enter new query."
      }
    }
  },

  guidelineTopic4: {
    name: "Catalog",
    list: {
      guideline1: {
        text: "Make filters and sorting prominent",
        implementation: "easy",
        impact: "high",
        image: "images/image4.1.jpg",
        description:
          "Show search box instead of search icon to help users find it more easily. ",
        link: "https://baymard.com/blog/search-field-design"
      }
    }
  },

  guidelineTopic5: {
    name: "Product page",
    list: {
      guideline1: {
        text: "Display clear CTA button above the fold",
        implementation: "easy",
        impact: "high"
      }
    }
  },

  guidelineTopic6: {
    name: "Cart",
    list: {
      guideline1: {
        text:
          "Show drop-down cart or pop-up instead of redirecting to cart after a user adds an item",
        implementation: "medium",
        impact: "high",
        image: "images/image6.1.jpg",
        description:
          'Don\'t confuse a user and redirect him immediately to cart page. He might want to consider other items and doesn\'t ready to checkout yet. Instead show drop-down cart or pop-up with successfully added item, total sum and following actions, such as "Checkout Now" and "View Cart".'
      },

      guideline2: {
        text: "Allow users to edit item in cart",
        implementation: "medium",
        impact: "high",
        image: "images/image6.2.jpg",
        description:
          "Allow users to easily edit items (quantity, size etc.) on the shopping cart page. They should not be removed from the cart or redirected back to the product page to edit item."
      },

      guideline3: {
        text: "Allow users to move items to favorites or wishlist",
        implementation: "easy",
        impact: "medium",
        image: "images/image6.3.jpg",
        description:
          "Don't make users to delete items they aren't ready to buy right now from cart and provide feature to save items for later. ",
        link: "https://www.nngroup.com/articles/wishlist-or-cart/"
      },

      guideline4: {
        text: "Show similar items or favorites for upsell in cart",
        implementation: "medium",
        impact: "medium",
        image: "images/image6.4.jpg",
        description:
          "Maximize the shopping cart page by showing favorites, top selling items, last viewed items or complete the look with these products."
      },

      guideline5: {
        text: "Show total cost (including shipping, taxes and fees)",
        implementation: "medium",
        impact: "high",
        image: "images/image6.5.jpg",
        description:
          "Customers dislike unexpected cost increases during checkout and if that happens could abandon checkout at all. To avoid this situation, show total cost in cart with the breakdown of this amount. ",
        link: "https://www.nngroup.com/articles/ecommerce-taxes-fees/"
      },

      guideline6: {
        text: "Consider offering free shipping on a certain amount",
        implementation: "medium",
        impact: "medium",
        image: "images/image6.6.jpg",
        description:
          "Nudge customers to add more items to cart by offering free shipping after reaching a certain amount."
      }
    }
  },

  guidelineTopic7: {
    name: "Checkout",
    list: {
      guideline1: {
        text: "Display clear CTA button above the fold",
        implementation: "easy",
        impact: "high"
      }
    }
  },

  guidelineTopic8: {
    name: "Account",
    list: {
      guideline1: {
        text: "Display clear CTA button above the fold",
        implementation: "easy",
        impact: "high"
      }
    }
  },

  guidelineTopic9: {
    name: "Other",
    list: {
      guideline1: {
        text: "Display clear CTA button above the fold",
        implementation: "easy",
        impact: "high"
      }
    }
  },

  guidelineTopic10: {
    name: "Mobile",
    list: {
      guideline1: {
        text: "Display clear CTA button above the fold",
        implementation: "easy",
        impact: "high"
      }
    }
  }
};

export default guidelines;
