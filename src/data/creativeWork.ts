export interface CreativeItem {
  src: string;
  category: "Digital Art" | "OJT Graphics";
}

const digitalArtFiles = [
  "ivosfull.jpg",
  "ivos1.jpg",
  "ivos2.jpg",
  "ivos3.jpg",
  "loonie.jpg",
  "21savage.jpg",
  "drake.jpg",
  "eminem.jpg",
  "chrisbrown.jpg",
  "juice.jpg",
  "lilpump.jpg",
  "luhkel.jpg",
  "icecube.jpg",
  "xxx.jpg",
];

const ojtFiles = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];

export const creativeWork: CreativeItem[] = [
  ...digitalArtFiles.map((file) => ({ src: `/images/art/${file}`, category: "Digital Art" as const })),
  ...ojtFiles.map((file) => ({ src: `/images/ojt/${file}`, category: "OJT Graphics" as const })),
];
