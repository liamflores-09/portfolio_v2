export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  verified?: boolean;
  tooltip?: { word: string; note: string };
}

export const testimonials: Testimonial[] = [
  {
    quote: "Liam is an exceptional developer and a good team leader.",
    name: "Jen Aranas",
    role: "Capstone Adviser, TIP Manila",
  },
  {
    quote:
      "Working with Liam was a pleasure. His attention to detail and creative problem-solving skills are top-notch.",
    name: "Vmiguel Gonzales",
    role: "Internet Personality",
    verified: true,
  },
  {
    quote: "Recommended, delivered outputs quickly and if there's a revision, he'll do it immediately and approve!",
    name: "Bea Bautista",
    role: "Client",
  },
  {
    quote: "Nayswan, solid ka talaga bro!",
    name: "Chrisanthony Bigas",
    role: "Friend",
  },
  {
    quote: "Lupit mo talaga boss tammy!",
    name: "Jade Quiding",
    role: "Friend",
    tooltip: { word: "tammy", note: "my nickname" },
  },
  {
    quote: "Helped improve our system a lot. Smooth and reliable work.",
    name: "Jodi Nathalee",
    role: "Client",
  },
  {
    quote: "Your work is always clean and solid, honestly no complaints here!",
    name: "Daryl Nieto",
    role: "Client",
  },
  {
    quote: "Couldn't agree more, solid work every time!",
    name: "Pein 2.0",
    role: "Client",
  },
];
