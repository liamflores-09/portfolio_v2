import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero } from "@/data/hero";

export const alt = "Liam Flores — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#818cf8";

export default async function Image() {
  const avatarData = await readFile(join(process.cwd(), "public/images/profilepic.png"), "base64");
  const avatarSrc = `data:image/png;base64,${avatarData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
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
          <div style={{ fontSize: 24, color: "#8a8a8a", marginTop: 24, maxWidth: 680 }}>{hero.roles.join(" · ")}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
