export const LEGAL_CONTACT_EMAIL = "huloloo@huloloo.com";

export const LEGAL_BASE = "https://en.huloloo.com";

export const LEGAL_ROUTES = {
  privacy: {
    path: "privacy",
    url: `${LEGAL_BASE}/privacy/`,
    title: "Privacy Policy | Huloloo App",
    description:
      "Privacy Policy for the Huloloo App — data we process, third-party AI, retention and your choices.",
    markdown: "legal/privacy-policy.md",
  },
  terms: {
    path: "terms",
    url: `${LEGAL_BASE}/terms/`,
    title: "Terms of Service | Huloloo App",
    description:
      "Terms of Service for the Huloloo App — health information, AI features and your responsibilities.",
    markdown: "legal/terms-of-service.md",
  },
};
