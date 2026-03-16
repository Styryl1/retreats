// tina/config.ts
import { defineConfig } from "tinacms";

// content/tina/site-content.json
var site_content_default = {
  siteSettings: {
    siteName: "Soulfull",
    siteTagline: "Holistic skincare workshops, retreats and rituals",
    canonicalOrigin: "https://soulfullalgarve.com/",
    homepageUrl: "https://soulfullalgarve.com/",
    contactEmail: "hello@soulfullalgarve.com",
    instagramUrl: "https://instagram.com/soulfullalgarve",
    ogImage: "/soulfull-sun.png",
    footerNote: "Soulfull creates holistic skincare workshops, private wellness gatherings, and slower retreat-style experiences rooted in natural ingredients, facial massage, and meaningful ritual."
  },
  seo: {
    title: "Soulfull | Holistic skincare workshops, retreats and rituals",
    description: "Soulfull brings people together through botanical skincare workshops, private wellness circles, facial massage rituals, and slower retreat experiences designed to feel warm, sensory, and nourishing."
  },
  header: {
    logoMark: "S",
    logoImage: "/soulfull-sun.png",
    logoAlt: "Soulfull sun logo",
    brandName: "Soulfull",
    brandSub: "Holistic skincare workshops, retreats and rituals",
    ctaLabel: "Plan your Soulfull gathering",
    ctaHref: "#contact",
    navItems: [
      {
        label: "Philosophy",
        href: "#philosophy"
      },
      {
        label: "Offerings",
        href: "#offerings"
      },
      {
        label: "Workshop Flow",
        href: "#flow"
      },
      {
        label: "Botanical Rituals",
        href: "#botanical"
      },
      {
        label: "Notes",
        href: "#notes"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ]
  },
  hero: {
    eyebrow: "Holistic skincare, slow ritual, and sun-soaked gathering",
    titleLine1: "Soulfull",
    scriptLine: "rituals,",
    titleLine2: "for skin, rest, and togetherness.",
    bodyLead: "Organic skincare workshops, private wellness circles, and retreat-style experiences held with warmth.",
    description: "Soulfull brings people together through botanical skincare, facial massage, nervous-system-softening rituals, and beautiful shared tables. Every experience is designed to feel grounding, sensory, and genuinely nourishing.",
    primaryCtaLabel: "See the ways to gather",
    primaryCtaHref: "#offerings",
    secondaryCtaLabel: "Explore the workshop flow",
    secondaryCtaHref: "#flow",
    meta: [
      "Holistic skincare workshops",
      "Private wellness gatherings",
      "Retreat-style hosting"
    ],
    cardEyebrow: "What Soulfull holds",
    cardTitle: "Three ways to gather",
    editions: [
      {
        name: "Workshop",
        detail: "organic skincare and facial massage"
      },
      {
        name: "Private circle",
        detail: "garden ritual for friends, brands, or teams"
      },
      {
        name: "Retreat day",
        detail: "slow wellness experiences under the sun"
      }
    ],
    cardCtaLabel: "Start a conversation",
    cardCtaHref: "#contact"
  },
  experienceSection: {
    eyebrow: "Philosophy",
    headingLine1: "Rooted in plants,",
    headingScript: "touch, and slower nervous systems",
    description: "The Soulfull guide makes the intention clear: support the skin gently, choose ingredients that feel familiar, and turn skincare into ritual rather than pressure.",
    cards: [
      {
        title: "Natural skincare without overwhelm",
        description: "Everything starts with ingredients that feel intuitive: botanical oils, floral waters, minerals, and shorter ingredient lists that support the skin rather than fight it.",
        points: [
          "Barrier support, nourishment, and long-term skin health come before quick fixes.",
          "Organic ingredients are chosen for familiarity, softness, and sensory comfort."
        ]
      },
      {
        title: "Holistic ritual, not just products",
        description: "Soulfull treats skincare as a whole-body ritual that includes facial massage, breath, aromatherapy, and moments of self-connection.",
        points: [
          "Guests can work with hands, gua sha, or crystal tools to support circulation and glow.",
          "Every session leaves room for feeling, scent, and touch rather than just information."
        ]
      },
      {
        title: "Gatherings that feel warm and held",
        description: "The Canva direction points to a brand that is equal parts educational, beautiful, and restorative, with time to ask questions, experiment, and then simply enjoy.",
        points: [
          "Garden sanctuary atmosphere, softer pacing, and thoughtful hosting shape the experience.",
          "Grazing boards, fruit platters, drinks, and sun-time turn the ending into a celebration."
        ]
      }
    ]
  },
  retreatsSection: {
    eyebrow: "Offerings",
    headingLine1: "Choose a Soulfull format,",
    headingScript: "from intimate workshops to private retreats",
    description: "The Soulfull brand can flex around many kinds of gathering. What stays consistent is the blend of skincare education, sensory ritual, and beautiful, slower hosting.",
    cards: [
      {
        label: "Signature Workshop",
        title: "Holistic Skincare Workshop",
        description: "A guided group experience exploring organic skincare, botanical ingredients, facial massage, and how to build an at-home ritual that actually feels sustainable.",
        meta: [
          "Best for 8 to 20 guests",
          "Hands-on and educational",
          "Products, scent, and touch"
        ],
        price: "Custom quote based on group size and setting",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      },
      {
        label: "Private Gathering",
        title: "Soulfull Garden Circle",
        description: "A softer private format for birthdays, hen gatherings, brand hosting, or team wellbeing days where skincare ritual becomes the centrepiece.",
        meta: [
          "Garden, villa, or hosted venue",
          "Tea, grazing boards, and ritual",
          "Friends, brands, or teams"
        ],
        price: "Designed around your date, group, and mood",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      },
      {
        label: "Retreat Experience",
        title: "Slow Wellness Retreat",
        description: "A longer-form Soulfull gathering that blends skincare, rest, sun, ritual, and nourishing shared time into a retreat-shaped day or weekend.",
        meta: [
          "Seasonal retreat days or weekends",
          "Optional breathwork or body rituals",
          "Calm, sensory hosting"
        ],
        price: "Planned as a bespoke experience",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      }
    ]
  },
  itinerarySection: {
    eyebrow: "Workshop flow",
    headingLine1: "A Soulfull session moves",
    headingScript: "from learning, to touch, to shared ritual",
    items: [
      {
        time: "01",
        title: "Arrive and settle",
        description: "Guests land into a calm, hosted atmosphere with tea, gentle welcome notes, and a sense of stepping into a slower rhythm."
      },
      {
        time: "02",
        title: "Understand the skin",
        description: "We explore what natural skincare really means, why barrier support matters, and how organic ingredients can work in harmony with the skin."
      },
      {
        time: "03",
        title: "Meet the botanicals",
        description: "Rose, lavender, calendula, mandarin, jojoba, and mineral-rich waters become practical tools rather than abstract ingredient names."
      },
      {
        time: "04",
        title: "Facial massage and product ritual",
        description: "Guests apply, smell, and test products while learning gentle massage techniques with hands or tools to support glow and circulation."
      },
      {
        time: "05",
        title: "Eat, drink, and enjoy the sun",
        description: "The session closes with grazing boards, fruit platters, drinks, and enough unhurried time for conversation, questions, and absorption."
      }
    ],
    sideEyebrow: "What every format keeps",
    sideTitle: "The emotional rhythm stays the same",
    sideDescription: "Calm arrival, sensory learning, personal ritual, and a hosted ending that feels celebratory rather than abrupt.",
    sidePoints: [
      "Organic ingredients and familiar scents guide the experience.",
      "There is always space to ask questions and personalise a routine.",
      "The final stretch is designed to feel soft, social, and memorable."
    ]
  },
  portugalSection: {
    eyebrow: "Botanical rituals",
    headingLine1: "What we work with,",
    headingScript: "and what guests take home",
    description: "The Soulfull deck circles around a few recurring building blocks: carrier oils, floral waters, massage, and personalised blends that continue at home.",
    mapTitle: "Soulfull ritual board",
    locations: [
      {
        name: "Rose and rose water",
        pinClass: "tag--rose"
      },
      {
        name: "Jojoba and calendula",
        pinClass: "tag--jojoba"
      },
      {
        name: "Lavender and mandarin",
        pinClass: "tag--lavender"
      }
    ],
    notes: [
      {
        title: "Build a personalised routine",
        description: "Guests leave knowing how to cleanse gently, tone with mineral or floral waters, moisturise well, protect the skin barrier, and add masks or scrubs only when they truly help."
      },
      {
        title: "Blend your own botanical oil",
        description: "Soulfull sessions can include making a facial oil with combinations like jojoba, rosehip, sweet almond, argan, avocado, lavender, rose, mandarin, or tea tree."
      },
      {
        title: "Treat skincare as self-care",
        description: "One of the strongest ideas in the guide is simple: skincare can be more than routine. It can become a mindful ritual that supports rest, self-love, and reconnection."
      }
    ]
  },
  testimonialsSection: {
    eyebrow: "Soulfull notes",
    headingLine1: "A few truths from the",
    headingScript: "guide that shape every experience",
    items: [
      {
        quote: "Natural skincare should gently support the skin's natural balance and long-term health.",
        author: "From the Soulfull workshop guide"
      },
      {
        quote: "Facial massage helps products absorb, encourages circulation, and supports the skin's natural glow.",
        author: "Soulfull ritual practice"
      },
      {
        quote: "Skincare can be more than a routine; it can be a mindful self-care ritual.",
        author: "Soulfull philosophy"
      },
      {
        quote: "Choose the oils, scents, and textures that feel right for your skin and the moment you're in.",
        author: "Personalised aftercare"
      }
    ]
  },
  faqSection: {
    eyebrow: "FAQ",
    headingLine1: "A few practical details",
    headingScript: "before we gather",
    items: [
      {
        question: "Who are Soulfull experiences for?",
        answer: "Soulfull works well for friends, private groups, hosted brand moments, hen gatherings, team wellbeing days, and guests who want a more sensory approach to skincare and ritual."
      },
      {
        question: "Do guests need skincare knowledge?",
        answer: "No. Sessions are designed to feel welcoming, intuitive, and educational without becoming clinical or overwhelming."
      },
      {
        question: "Can you create private workshops or retreat days?",
        answer: "Yes. Private workshops, garden circles, and longer retreat-style experiences can all be shaped around your group, setting, and timing."
      },
      {
        question: "Do you bring products and tools?",
        answer: "That can be built into the format. Product testing, botanical oils, facial massage guidance, and selected tools can all be included depending on the experience you want to create."
      }
    ]
  },
  contactSection: {
    eyebrow: "Contact",
    headingLine1: "Bring Soulfull into your space",
    headingScript: "or let us shape the right setting for you",
    description: "Share the kind of gathering you want, the group size, and whether you are imagining a workshop, a private ritual afternoon, or a longer retreat-style experience.",
    badges: [
      "Workshops",
      "Private wellness circles",
      "Retreat-style hosting"
    ],
    panelTitle: "Start with a simple note",
    panelDescription: "Tell us your date window, guest count, setting, and the feeling you want people to leave with.",
    emailLabel: "hello@soulfullalgarve.com",
    emailHref: "mailto:hello@soulfullalgarve.com",
    secondaryCtaLabel: "View the ritual board",
    secondaryCtaHref: "#botanical",
    listTitle: "Helpful details to include",
    listItems: [
      "What type of experience you want",
      "How many guests are coming",
      "Where it would take place",
      "Any preferred scents, skin-focus, or add-on rituals"
    ],
    smallPrint: "This site is powered by TinaCMS, so your team can update copy, offerings, and imagery visually once the content is live."
  }
};

// tina/config.ts
var envBranch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.WORKERS_CI_BRANCH || process.env.CF_PAGES_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || process.env.GITHUB_HEAD_REF;
var branch = (envBranch || "main").trim();
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID?.trim() || null;
var token = process.env.TINA_TOKEN?.trim() || null;
var isLocalTina = process.env.TINA_PUBLIC_IS_LOCAL === "true";
var previewOriginEnv = process.env.TINA_PREVIEW_ORIGIN?.trim() || process.env.CF_PAGES_URL?.trim() || process.env.PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim() || "";
var previewOrigin = isLocalTina ? "http://localhost:4321" : previewOriginEnv;
var siteContent = site_content_default;
var explicitLabels = {
  seo: "SEO",
  navItems: "Navigation Items",
  ctaHref: "CTA Href",
  ctaLabel: "CTA Label",
  ogImage: "OG Image"
};
var toLabel = (name) => explicitLabels[name] ?? name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[-_]/g, " ").replace(/\s+/g, " ").trim().replace(/^./, (char) => char.toUpperCase());
var isUrlValue = (value) => {
  if (value.startsWith("#")) return true;
  if (value.startsWith("/")) return true;
  if (value.startsWith("./") || value.startsWith("../")) return true;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(value)) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
var isLikelyUrlField = (name) => /(?:href|url|origin|email)$/i.test(name);
var isLikelyImageField = (name) => {
  const lower = name.toLowerCase();
  if (lower.endsWith("alt")) return false;
  return lower === "ogimage" || lower.endsWith("image") || lower.endsWith("imagepath");
};
var isAltField = (name) => /alt$/i.test(name);
var stringValidator = (label, required = false) => (value) => {
  const text = typeof value === "string" ? value.trim() : "";
  if (required && !text) {
    return `${label} is required.`;
  }
};
var urlValidator = (label, required = true) => (value) => {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) {
    if (required) return `${label} is required.`;
    return;
  }
  if (!isUrlValue(text)) {
    return `${label} must be an absolute URL, relative path, or hash anchor.`;
  }
};
var imageValidator = (label, required = true) => (value) => {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text && required) {
    return `${label} is required.`;
  }
};
var createStringField = (name, value, options = {}) => {
  const label = toLabel(name);
  const isTextarea = options.isTextarea ?? (value.includes("\n") || value.length > 140);
  return {
    type: "string",
    name,
    label,
    ui: {
      ...isTextarea ? { component: "textarea" } : {},
      validate: stringValidator(label, options.required ?? false)
    }
  };
};
var createUrlField = (name, required = true) => {
  const label = toLabel(name);
  return {
    type: "string",
    name,
    label,
    ui: {
      component: "text",
      validate: urlValidator(label, required)
    }
  };
};
var createImageField = (name, required = true) => {
  const label = toLabel(name);
  return {
    type: "image",
    name,
    label,
    ui: {
      validate: imageValidator(label, required)
    }
  };
};
var createAltField = (name, value) => createStringField(name, value, {
  required: true,
  isTextarea: false
});
var withList = (field) => ({
  ...field,
  list: true
});
var buildExplicitField = (name, value) => {
  if (typeof value === "string") {
    if (isLikelyImageField(name)) {
      return createImageField(name, true);
    }
    if (isLikelyUrlField(name)) {
      return createUrlField(name, true);
    }
    if (isAltField(name)) {
      return createAltField(name, value);
    }
    return createStringField(name, value);
  }
  if (typeof value === "number") {
    return {
      type: "number",
      name,
      label: toLabel(name)
    };
  }
  if (typeof value === "boolean") {
    return {
      type: "boolean",
      name,
      label: toLabel(name)
    };
  }
  if (Array.isArray(value)) {
    const first = value.find((entry) => entry !== null && entry !== void 0);
    if (typeof first === "string") {
      if (isLikelyImageField(name)) {
        return withList(createImageField(name, true));
      }
      if (isLikelyUrlField(name)) {
        return withList(createUrlField(name, true));
      }
      if (isAltField(name)) {
        return withList(createAltField(name, first));
      }
      return withList(createStringField(name, first));
    }
    if (typeof first === "number") {
      return {
        type: "number",
        name,
        label: toLabel(name),
        list: true
      };
    }
    if (typeof first === "boolean") {
      return {
        type: "boolean",
        name,
        label: toLabel(name),
        list: true
      };
    }
    if (first && typeof first === "object" && !Array.isArray(first)) {
      return {
        type: "object",
        name,
        label: toLabel(name),
        list: true,
        fields: buildObjectFields(first)
      };
    }
    return {
      type: "string",
      name,
      label: toLabel(name),
      list: true
    };
  }
  if (value && typeof value === "object") {
    return {
      type: "object",
      name,
      label: toLabel(name),
      fields: buildObjectFields(value)
    };
  }
  return createStringField(name, "");
};
var buildObjectFields = (value) => Object.entries(value).map(([name, fieldValue]) => buildExplicitField(name, fieldValue));
var config_default = defineConfig({
  branch,
  clientId,
  token,
  ui: previewOrigin ? {
    previewUrl: () => ({ url: previewOrigin })
  } : void 0,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "siteContent",
        label: "Site Content",
        path: "content/tina",
        format: "json",
        match: {
          include: "site-content"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: buildObjectFields(siteContent)
      }
    ]
  }
});
export {
  config_default as default
};
