export const site = {
  name: "Blimp Tech Cyber",
  tagline: "A Tech Hub Full of Modern Tech Solutions",
  city: "Nairobi, Kenya",
  phone: "0790417126",
  phoneIntl: "+254790417126",
  whatsapp: "254790417126",
  email: "miketeq7@gmail.com",
  mpesa: "Pochi La Biashara — 0790417126",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday & Holidays", time: "10:00 AM – 4:00 PM" },
  ],
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
