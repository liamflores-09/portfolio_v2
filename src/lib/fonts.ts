import localFont from "next/font/local";

export const sunghyunSans = localFont({
  src: [
    { path: "../../public/fonts/SunghyunSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SunghyunSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SunghyunSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SunghyunSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sunghyun",
  display: "swap",
});
