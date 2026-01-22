export const adminNavItems = [
  {
    label: "Filament inventory",
    details: "Edit filament inventory, stock counts, and details.",
    href: "./index.html",
    emoji: "🎛️",
  },
  {
    label: "Filament types",
    details: "Manage filament type details used by inventory.",
    href: "./filament-types.html",
    emoji: "🧵",
  },
  {
    label: "Manage filament manufacturers",
    details: "Edit the manufacturer list used by inventory forms.",
    href: "./manufacturers.html",
    emoji: "🏭",
  },
  {
    label: "Manage admins",
    details: "Control who can access the admin tools.",
    href: "./admins.html",
    emoji: "🛡️",
  },
];

export const withManufacturerEmoji = (text) => {
  if (!text || text.includes("🏭")) return text;
  return text.replace(/\bmanufacturers?\b/gi, (match) => `🏭 ${match}`);
};
