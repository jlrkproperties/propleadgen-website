import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

/**
 * USACoverageMap
 * --------------
 * Nationwide Coverage map component.
 * 
 * Shows the NASA Earth at Night satellite image THROUGH the US state shapes
 * using an SVG clipPath — so each state reveals the actual city lights
 * beneath it instead of a flat color fill.
 * 
 * On hover: state brightens with a gold overlay tint + tooltip appears.
 * 
 * SETUP:
 * 1. npm install react-simple-maps
 * 2. Place the NASA night image at: public/images/earth-night.jpg
 * 3. Drop this component into your Coverage section
 * 
 * USAGE:
 * <USACoverageMap />
 */

// TopoJSON for US states — hosted on a reliable CDN
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USACoverageMap() {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos]     = useState({ x: 0, y: 0 });

  function handleMouseEnter(geo, evt) {
    setHoveredState(geo.properties.name);
    setTooltipPos({ x: evt.clientX, y: evt.clientY });
  }

  function handleMouseMove(evt) {
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
      }}
    >
      {/* Section header */}
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
            fontWeight: "700",
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

      {/* Map container */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(200, 169, 110, 0.15)",
            background: "#0D1B2A",
            position: "relative",
          }}
        >
          {/* 
            SVG map with NASA night image as fill texture.
            
            How it works:
            1. We define a <clipPath> containing all the US state paths
            2. We place the NASA night image and clip it to that path
            3. Result: satellite image shows THROUGH the state shapes
            4. On hover: gold overlay appears on the hovered state
          */}
          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: "100%", height: "auto", display: "block" }}
            viewBox="0 0 975 610"
          >
            <defs>
              {/* 
                Clip path — all US states combined.
                The satellite image will only show within these shapes.
              */}
              <clipPath id="usa-clip">
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={`clip-${geo.rsmKey}`}
                        geography={geo}
                      />
                    ))
                  }
                </Geographies>
              </clipPath>

              {/* Gold overlay gradient for hovered state */}
              <radialGradient id="gold-hover" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#C8A96E" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.3" />
              </radialGradient>

              {/* Subtle inner shadow/vignette for depth */}
              <filter id="map-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 
              NASA night satellite image — clipped to US state shapes.
              
              The image coordinates are set to cover the full 975x610 viewBox.
              objectPosition equivalent: we shift x/y to center USA in frame.
              NASA image is ~3600x1800, US occupies roughly left-center portion.
              We scale and position to show the North America lit region.
            */}
            <image
              href="/images/earth-night.jpg"
              x="-420"
              y="-80"
              width="1800"
              height="900"
              clipPath="url(#usa-clip)"
              style={{
                filter: "brightness(1.4) contrast(1.2) saturate(1.3)",
              }}
              preserveAspectRatio="xMidYMid slice"
            />

            {/* 
              State border outlines — drawn on top of the image.
              These give visible state boundaries with a subtle glow.
            */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHovered = hoveredState === geo.properties.name;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: {
                          fill: isHovered
                            ? "rgba(200, 169, 110, 0.45)"
                            : "rgba(10, 10, 15, 0.01)",
                          stroke: isHovered
                            ? "rgba(200, 169, 110, 0.9)"
                            : "rgba(200, 169, 110, 0.25)",
                          strokeWidth: isHovered ? 1.5 : 0.5,
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

          {/* Legend */}
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

        {/* Footer copy */}
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

      {/* Floating tooltip */}
      {hoveredState && (
        <div
          style={{
            position: "fixed",
            left: tooltipPos.x + 14,
            top:  tooltipPos.y - 44,
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
              fontWeight: "600",
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
