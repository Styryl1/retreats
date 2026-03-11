// tina/config.ts
import { defineConfig } from "tinacms";

// content/tina/site-content.json
var site_content_default = {
  siteSettings: {
    siteName: "Soulful Algarve",
    siteTagline: "Retreats in Portugal",
    canonicalOrigin: "https://soulfullalgarve.com/",
    homepageUrl: "https://soulfullalgarve.com/",
    contactEmail: "hello@soulfullalgarve.com",
    instagramUrl: "https://instagram.com/soulfullalgarve",
    ogImage: "/social-card.svg",
    footerNote: "Soulful Algarve creates slower, brighter retreats across the Portuguese coast with a warm pink-and-beige aesthetic."
  },
  seo: {
    title: "Soulful Algarve | Retreats in Portugal",
    description: "Design-led retreats in Portugal for small groups, private escapes, and founder offsites, with slow days, coastal light, and beautifully hosted evenings."
  },
  header: {
    logoMark: "S",
    brandName: "Soulful Algarve",
    brandSub: "Retreats in Portugal",
    ctaLabel: "Plan a retreat",
    ctaHref: "#contact",
    navItems: [
      {
        label: "Experience",
        href: "#experience"
      },
      {
        label: "Retreats",
        href: "#retreats"
      },
      {
        label: "Sample Day",
        href: "#itinerary"
      },
      {
        label: "Portugal",
        href: "#portugal"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ]
  },
  hero: {
    eyebrow: "Portugal retreats for slower, brighter days",
    titleLine1: "Pink skies,",
    scriptLine: "Atlantic air,",
    titleLine2: "beige stone houses.",
    bodyLead: "Retreats shaped for rest, creativity, and small-group connection along the Portuguese coast.",
    description: "Soulful Algarve hosts design-led retreats in Portugal for guests who want a softer pace, a stronger sense of place, and long-table evenings that feel restorative rather than scheduled.",
    primaryCtaLabel: "See retreat formats",
    primaryCtaHref: "#retreats",
    secondaryCtaLabel: "View a sample day",
    secondaryCtaHref: "#itinerary",
    meta: [
      "Small groups of 14",
      "4 to 6 night stays",
      "Yoga, surf, design, and slow dining"
    ],
    cardEyebrow: "Next editions",
    cardTitle: "Three ways into Portugal",
    editions: [
      {
        name: "Sintra House",
        detail: "forest mornings"
      },
      {
        name: "Comporta Villa",
        detail: "beach and long lunches"
      },
      {
        name: "Algarve Residency",
        detail: "autumn studio week"
      }
    ],
    cardCtaLabel: "Request dates and pricing",
    cardCtaHref: "#contact"
  },
  experienceSection: {
    eyebrow: "Experience",
    headingLine1: "Retreats that feel",
    headingScript: "carefully hosted, not over-programmed",
    description: "Every stay is built around light structure, warm service, and enough quiet to let the setting do some of the work. Nothing feels generic and nothing feels overfilled.",
    cards: [
      {
        title: "Retreat design with a softer pace",
        description: "Each stay is built around sunrise movement, deep work or reflection blocks, long lunches, and evenings that feel social rather than scheduled.",
        points: [
          "Hosts handle transport and timing from arrival to final transfer.",
          "Every retreat includes generous downtime by the pool, beach, or garden."
        ]
      },
      {
        title: "Portugal as atmosphere, not backdrop",
        description: "We use restored estates, coastal villas, and low-key design hotels that feel grounded in place instead of generic wellness venues.",
        points: [
          "Sintra forests for cool mornings and candlelit dinners.",
          "Comporta and Algarve settings for salt air, open sky, and warm late light."
        ]
      },
      {
        title: "For private groups and open dates",
        description: "Book a scheduled retreat or shape a private edition for founders, creative teams, or friend groups who want a better format than the usual offsite.",
        points: [
          "Optional surf coaching, ceramics, sound sessions, and chef-led suppers.",
          "Planning support for workshops, celebrations, and brand moments."
        ]
      }
    ]
  },
  retreatsSection: {
    eyebrow: "Retreat formats",
    headingLine1: "Choose a hosted stay,",
    headingScript: "or shape a private escape",
    description: "Open dates work for individual guests and pairs. Private editions work for teams, founder groups, and creative circles who want a more memorable setting than a standard offsite.",
    cards: [
      {
        label: "Signature",
        title: "Atlantic Reset",
        description: "A five-night coastal retreat in Comporta for guests who want movement, sea air, and unhurried evenings.",
        meta: [
          "Comporta",
          "5 nights",
          "May to September"
        ],
        price: "From EUR1,980 per guest",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      },
      {
        label: "Private Groups",
        title: "Founders by the Sea",
        description: "A warm, design-led offsite for small teams who want strategy sessions without losing the softness of a retreat.",
        meta: [
          "Sintra or Ericeira",
          "4 nights",
          "8 to 12 guests"
        ],
        price: "Custom pricing for private bookings",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      },
      {
        label: "Creative Escape",
        title: "Pink Evening Residency",
        description: "For writers, designers, and artists who want studio time, hosted meals, and a setting that resets the nervous system.",
        meta: [
          "Algarve",
          "6 nights",
          "Autumn edition"
        ],
        price: "From EUR2,240 per guest",
        ctaLabel: "Enquire",
        ctaHref: "#contact"
      }
    ]
  },
  itinerarySection: {
    eyebrow: "Sample day",
    headingLine1: "Enough shape to feel held,",
    headingScript: "enough space to actually unwind",
    items: [
      {
        time: "07:30",
        title: "Terrace movement",
        description: "Pilates, yoga, or breath-led mobility on a shaded terrace while the coast is still quiet."
      },
      {
        time: "09:00",
        title: "Slow breakfast",
        description: "Fruit, local pastries, coffee, and a briefing for the day served family-style in the garden."
      },
      {
        time: "11:00",
        title: "Core session",
        description: "Choose between guided workshops, surf, ceramics, or unstructured time for reading and rest."
      },
      {
        time: "16:30",
        title: "Golden-hour reset",
        description: "Poolside pause, beach walk, or sauna before dinner starts to gather everyone back together."
      },
      {
        time: "20:00",
        title: "Long-table dinner",
        description: "Seasonal Portuguese menus, natural wine, and one hosted conversation or live acoustic set."
      }
    ],
    sideEyebrow: "What stays consistent",
    sideTitle: "Every edition keeps the same emotional rhythm",
    sideDescription: "Quiet mornings, one central experience, a generous late afternoon, and dinner that feels like the social heart of the day.",
    sidePoints: [
      "Airport transfers and local movement are handled for the group.",
      "Chef-led menus center local produce, seafood, and relaxed service.",
      "Optional add-ons bring in surf, ceramics, sound, or strategy facilitation."
    ]
  },
  portugalSection: {
    eyebrow: "Why Portugal",
    headingLine1: "Easy to reach,",
    headingScript: "hard to leave early",
    description: "Portugal makes retreat logistics cleaner and the atmosphere warmer. It is one of the few places where design, weather, food, and access all pull in the same direction.",
    mapTitle: "Illustrated Portugal venue map",
    locations: [
      {
        name: "Sintra",
        pinClass: "pin--sintra"
      },
      {
        name: "Comporta",
        pinClass: "pin--comporta"
      },
      {
        name: "Algarve",
        pinClass: "pin--algarve"
      }
    ],
    notes: [
      {
        title: "Direct flights, easy arrivals",
        description: "Lisbon and Faro keep travel days light for international guests, especially private groups arriving from multiple cities."
      },
      {
        title: "The shoulder season is still golden",
        description: "Portugal gives us dependable light, outdoor dining, and warm evenings without the compressed feeling of peak summer."
      },
      {
        title: "The local network is excellent",
        description: "Chefs, ceramics studios, surf instructors, and villa hosts make the experience feel specific to place instead of imported."
      }
    ]
  },
  testimonialsSection: {
    eyebrow: "Guest notes",
    headingLine1: "Designed to leave people",
    headingScript: "lighter, clearer, and a little sun-flushed",
    items: [
      {
        quote: "It felt like a beautifully designed exhale. We had structure when we wanted it and space when we needed it.",
        author: "Mara V., brand strategist"
      },
      {
        quote: "The venue, the food, and the pace were all sharper than a typical wellness retreat. Nothing felt generic.",
        author: "Elin R., creative director"
      },
      {
        quote: "We used the private format for a leadership offsite and left with clearer thinking than any hotel conference setup has ever given us.",
        author: "Rui P., startup founder"
      },
      {
        quote: "Portugal was the right call. Warm, calm, and beautiful without trying too hard.",
        author: "Tess L., repeat guest"
      }
    ]
  },
  faqSection: {
    eyebrow: "FAQ",
    headingLine1: "A few practical details",
    headingScript: "before you book",
    items: [
      {
        question: "Who are these retreats for?",
        answer: "They are designed for solo guests, couples, friends, and private groups who want beautiful logistics, thoughtful programming, and enough breathing room to actually feel restored."
      },
      {
        question: "Are flights included?",
        answer: "Flights are not included. We provide arrival guidance, transfer coordination, and clear timing so getting in from Lisbon or Faro is straightforward."
      },
      {
        question: "Can this become a private company offsite?",
        answer: "Yes. The private formats are built for small teams that want a strategic offsite with better energy, better meals, and more intentional pacing."
      },
      {
        question: "Do I need retreat experience?",
        answer: "No. The structure is welcoming to first-time guests. There is always a balance between guided sessions and optional downtime."
      }
    ]
  },
  contactSection: {
    eyebrow: "Contact",
    headingLine1: "Build your Portugal edition",
    headingScript: "with dates, venue mood, and guest count in mind",
    description: "Share whether you want an open retreat place, a private group stay, or a team offsite, and we can guide you toward the right location, season, and rhythm.",
    badges: [
      "Private groups",
      "Open retreats",
      "Portugal-wide venues"
    ],
    panelTitle: "Start with a simple note",
    panelDescription: "Tell us your ideal month, guest count, and the balance you want between rest, movement, and work.",
    emailLabel: "hello@soulfullalgarve.com",
    emailHref: "mailto:hello@soulfullalgarve.com",
    secondaryCtaLabel: "Back to top",
    secondaryCtaHref: "#top",
    listTitle: "What to send in your enquiry",
    listItems: [
      "Ideal month or season",
      "How many guests are coming",
      "Open retreat or private format",
      "The balance you want between rest, activity, and work"
    ],
    smallPrint: "Online editing is powered by TinaCMS, so your team can update this site through the Tina sidebar and inline editor once the Tina Cloud project is connected."
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
