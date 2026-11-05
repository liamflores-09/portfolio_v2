export interface CreativeItem {
  src: string;
  title: string;
  category: "Digital Art" | "OJT Graphics";
  description?: string;
}

const digitalArt = [
  { file: "ivosfull.jpg", title: "IV of Spades group portrait", description: "A three-person vector portrait framed by oversized lettering." },
  { file: "loonie.jpg", title: "Loonie portrait", description: "A grayscale portrait set against a red circular frame." },
  { file: "eminem.jpg", title: "Eminem portrait", description: "A layered vector portrait with bold type on an ochre background." },
  { file: "ivos1.jpg", title: "IV of Spades portrait · green cap" },
  { file: "ivos2.jpg", title: "IV of Spades portrait · yellow jacket" },
  { file: "ivos3.jpg", title: "IV of Spades portrait · sunglasses" },
  { file: "21savage.jpg", title: "21 Savage portrait" },
  { file: "drake.jpg", title: "Drake portrait" },
  { file: "chrisbrown.jpg", title: "Chris Brown portrait" },
  { file: "juice.jpg", title: "Juice WRLD portrait" },
  { file: "lilpump.jpg", title: "Lil Pump portrait" },
  { file: "luhkel.jpg", title: "Luh Kel portrait" },
  { file: "icecube.jpg", title: "Ice Cube portrait" },
  { file: "xxx.jpg", title: "XXXTentacion portrait" },
];

const ojtGraphics = [
  { title: "Meow music player sticker", description: "Playful typography arranged as a music player." },
  { title: "Pspsps cat sticker", description: "Circular lettering around an orange cat illustration." },
  { title: "Chuchu dog sticker", description: "A dog illustration with blue circular lettering." },
  { title: "Pet adoption stickers · finish options" },
  { title: "Cat and dog badges · finish options" },
  { title: "Music player and paw stickers · finish options" },
  { title: "Pet outline stickers · finish options" },
  { title: "Weekend Sale promotion" },
];

export const creativeWork: CreativeItem[] = [
  ...digitalArt.map(({ file, ...item }) => ({ ...item, src: `/images/art/${file}`, category: "Digital Art" as const })),
  ...ojtGraphics.map((item, index) => ({ ...item, src: `/images/ojt/${index + 1}.png`, category: "OJT Graphics" as const })),
];
