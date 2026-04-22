import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import type { Geography as GeoType } from "react-simple-maps";
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USACoverageMap() {
  const earthNightUrl = new URL(
    "../../assets/earth-night.jpg",
    import.meta.url
  ).href;
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  function handleMouseEnter(geo: GeoType, evt: React.MouseEvent<SVGPathElement>) {
    setHoveredState(String(geo.properties.name ?? ""));
    setTooltipPos({ x: evt.clientX, y: evt.clientY });
  }

  function handleMouseMove(evt: React.MouseEvent<SVGPathElement>) {
    setTooltipPos({ x: evt.clientX, y: evt.clientY });
  }

  function handleMouseLeave() {
    setHoveredState(null);
  }

  return (
    <section
      style={{
        background: "#0A0A0F",
        padding: "80px 0 60px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            color: "#C8A96E",
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Coverage
        </p>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            margin: "0 0 12px",
          }}
        >
          Nationwide Coverage
        </h2>
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "16px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          We source leads from counties across all 50 states.
        </p>
      </div>

      <div
        style={{
          padding: 0,
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: 0,
            overflow: "hidden",
            background: "#0D1B2A",
            position: "relative",
            width: "100%",
          }}
        >
          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: "100%", height: "auto", display: "block" }}
            viewBox="-75 0 975 610"
          >
            <defs>
              <clipPath id="usa-clip">
                <Geographies geography={GEO_URL}>
                  {({ geographies }: { geographies: GeoType[] }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={`clip-${geo.rsmKey}`}
                        geography={geo}
                      />
                    ))
                  }
                </Geographies>
              </clipPath>

              <radialGradient id="gold-hover" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.3" />
              </radialGradient>

              <filter id="map-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <image
              href={earthNightUrl}
              x="0"
              y="0"
              width="975"
              height="610"
              clipPath="url(#usa-clip)"
              preserveAspectRatio="xMidYMid slice"
              style={{
                filter: "brightness(2.5) contrast(1.5) saturate(1.6)",
              }}
            />

            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: GeoType[] }) =>
                geographies.map((geo) => {
                  const isHovered = hoveredState === geo.properties.name;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(evt: React.MouseEvent<SVGPathElement>) =>
                        handleMouseEnter(geo, evt)
                      }
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: {
                          fill: isHovered
                            ? "rgba(200, 169, 110, 0.45)"
                            : "#1a3a5c",
                          stroke: isHovered
                            ? "rgba(200, 169, 110, 0.9)"
                            : "rgba(200, 169, 110, 0.45)",
                          strokeWidth: isHovered ? 1.5 : 0.8,
                          outline: "none",
                          cursor: "pointer",
                          transition: "fill 0.2s ease, stroke 0.2s ease",
                        },
                        hover: {
                          fill: "rgba(200, 169, 110, 0.45)",
                          stroke: "rgba(200, 169, 110, 0.9)",
                          strokeWidth: 1.5,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: "rgba(200, 169, 110, 0.55)",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              padding: "16px 24px 20px",
              borderTop: "1px solid rgba(200, 169, 110, 0.10)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "20px",
                  height: "12px",
                  borderRadius: "3px",
                  background: "rgba(10,10,15,0.01)",
                  border: "1px solid rgba(200,169,110,0.3)",
                }}
              />
              <span
                style={{
                  color: "#9CA3AF",
                  fontSize: "13px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                All 50 States — Hover to explore
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "20px",
                  height: "12px",
                  borderRadius: "3px",
                  background: "rgba(200, 169, 110, 0.45)",
                  border: "1px solid rgba(200,169,110,0.9)",
                }}
              />
              <span
                style={{
                  color: "#9CA3AF",
                  fontSize: "13px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Active coverage
              </span>
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#6B7280",
            fontSize: "14px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Coverage available in all 50 states.{" "}
          <a
            href="/contact"
            style={{ color: "#C8A96E", textDecoration: "none" }}
          >
            Contact us
          </a>{" "}
          for specific county availability.
        </p>
      </div>

      {hoveredState && (
        <div
          style={{
            position: "fixed",
            left: tooltipPos.x + 14,
            top: tooltipPos.y - 44,
            background: "#0F1117",
            border: "1px solid rgba(200, 169, 110, 0.30)",
            borderRadius: "8px",
            padding: "8px 14px",
            pointerEvents: "none",
            zIndex: 9999,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 600,
              margin: "0 0 2px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {hoveredState}
          </p>
          <p
            style={{
              color: "#C8A96E",
              fontSize: "12px",
              margin: 0,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Coverage Available
          </p>
        </div>
      )}
    </section>
  );
}
