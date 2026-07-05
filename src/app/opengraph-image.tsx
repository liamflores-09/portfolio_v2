import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero } from "@/data/hero";

export const alt = "Liam Flores — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#818cf8";
const DOT_COLOR = "#8b8b85";
const DOT_MAX_OPACITY = 0.25;
const DOT_SIZE = 4;
const DOT_GAP = 10;
const DOT_BAND_HEIGHT = 280;

function randomDotOpacities(count: number): number[] {
  return Array.from({ length: count }, () => Math.random() * DOT_MAX_OPACITY);
}

function DotGrid({ opacities }: { opacities: number[] }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size.width,
        height: DOT_BAND_HEIGHT,
        display: "flex",
        flexWrap: "wrap",
        gap: DOT_GAP,
        padding: DOT_GAP / 2,
      }}
    >
      {opacities.map((opacity, i) => (
        <div
          key={i}
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: "50%",
            background: DOT_COLOR,
            opacity,
          }}
        />
      ))}
    </div>
  );
}

export default async function Image() {
  const [avatarData, regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/profilepic.png"), "base64"),
    readFile(join(process.cwd(), "public/fonts/SunghyunSans-Regular.ttf")),
    readFile(join(process.cwd(), "public/fonts/SunghyunSans-Bold.ttf")),
  ]);
  const avatarSrc = `data:image/png;base64,${avatarData}`;
  const cols = Math.ceil(size.width / (DOT_SIZE + DOT_GAP));
  const rows = Math.ceil(DOT_BAND_HEIGHT / (DOT_SIZE + DOT_GAP));
  const dotOpacities = randomDotOpacities(cols * rows);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        <DotGrid opacities={dotOpacities} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: DOT_BAND_HEIGHT,
            background: "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: 64,
            padding: "0 80px",
            color: "#f5f5f5",
            fontFamily: "Sunghyun Sans",
          }}
        >
          <img
            src={avatarSrc}
            alt=""
            width={280}
            height={280}
            style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700 }}>{hero.name}</div>
            <div style={{ width: 120, height: 6, background: ACCENT, borderRadius: 3, margin: "20px 0 28px" }} />
            <div style={{ fontSize: 32, color: "#d4d4d4", maxWidth: 680 }}>{hero.subtitle}</div>
            <div style={{ fontSize: 24, color: "#8a8a8a", marginTop: 24, maxWidth: 680 }}>
              {hero.roles.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sunghyun Sans", data: regular, style: "normal", weight: 400 },
        { name: "Sunghyun Sans", data: bold, style: "normal", weight: 700 },
      ],
    },
  );
}
