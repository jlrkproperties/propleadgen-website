import { useState, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import type { Geography as GeoType } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const FIPS_TO_NAME: Record<string, string> = {
  "01": "Alabama", "02": "Alaska", "04": "Arizona", "05": "Arkansas",
  "06": "California", "08": "Colorado", "09": "Connecticut", "10": "Delaware",
  "11": "District of Columbia", "12": "Florida", "13": "Georgia", "15": "Hawaii",
  "16": "Idaho", "17": "Illinois", "18": "Indiana", "19": "Iowa",
  "20": "Kansas", "21": "Kentucky", "22": "Louisiana", "23": "Maine",
  "24": "Maryland", "25": "Massachusetts", "26": "Michigan", "27": "Minnesota",
  "28": "Mississippi", "29": "Missouri", "30": "Montana", "31": "Nebraska",
  "32": "Nevada", "33": "New Hampshire", "34": "New Jersey", "35": "New Mexico",
  "36": "New York", "37": "North Carolina", "38": "North Dakota", "39": "Ohio",
  "40": "Oklahoma", "41": "Oregon", "42": "Pennsylvania", "44": "Rhode Island",
  "45": "South Carolina", "46": "South Dakota", "47": "Tennessee", "48": "Texas",
  "49": "Utah", "50": "Vermont", "51": "Virginia", "53": "Washington",
  "54": "West Virginia", "55": "Wisconsin", "56": "Wyoming",
};

interface TooltipState {
  name: string;
  x: number;
  y: number;
  visible: boolean;
}

const GEO_STYLE = {
  default: {
    fill: "#1E3A5F",
    stroke: "#2D5A8E",
    strokeWidth: 0.8,
    outline: "none",
    transition: "fill 200ms ease",
    cursor: "pointer",
  },
  hover: {
    fill: "#C8A96E",
    stroke: "#2D5A8E",
    strokeWidth: 0.8,
    outline: "none",
    cursor: "pointer",
  },
  pressed: {
    fill: "#b8934a",
    stroke: "#2D5A8E",
    strokeWidth: 0.8,
    outline: "none",
  },
};

export default function USMapInner() {
  const [tooltip, setTooltip] = useState<TooltipState>({ name: "", x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback((evt: React.MouseEvent<SVGPathElement>) => {
    setTooltip((prev) => ({ ...prev, x: evt.clientX, y: evt.clientY }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="relative w-full" style={{ minHeight: 300 }}>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1060 }}
        style={{ width: "100%", height: "auto" }}
        aria-label="Interactive US coverage map"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: GeoType[] }) =>
            geographies.map((geo) => {
              const stateName = FIPS_TO_NAME[geo.id] ?? geo.id;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-testid={`map-state-${geo.id}`}
                  onMouseEnter={(evt: React.MouseEvent<SVGPathElement>) => {
                    setTooltip({ name: stateName, x: evt.clientX, y: evt.clientY, visible: true });
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={GEO_STYLE}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 14,
            top: tooltip.y - 56,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#0F1117",
              border: "1px solid #2D5A8E",
              borderRadius: 8,
              padding: "8px 14px",
              minWidth: 148,
              boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            <p style={{ color: "#C8A96E", fontWeight: 700, fontSize: 13, lineHeight: 1.3, margin: 0 }}>
              {tooltip.name}
            </p>
            <p style={{ color: "#6B7280", fontSize: 11, margin: "2px 0 0", letterSpacing: "0.04em" }}>
              Coverage Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
