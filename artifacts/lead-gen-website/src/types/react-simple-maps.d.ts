declare module "react-simple-maps" {
  import type { FC, ReactNode, SVGProps, MouseEvent } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
    viewBox?: string;
    className?: string;
    "aria-label"?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (params: { geographies: Geography[] }) => ReactNode;
  }

  export interface Geography {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
    type: string;
    geometry: object;
  }

  export interface GeographyStyleSet {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    transition?: string;
    cursor?: string;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography;
    style?: {
      default?: GeographyStyleSet;
      hover?: GeographyStyleSet;
      pressed?: GeographyStyleSet;
    };
    onMouseEnter?: (evt: MouseEvent<SVGPathElement>) => void;
    onMouseMove?: (evt: MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (evt: MouseEvent<SVGPathElement>) => void;
    onClick?: (evt: MouseEvent<SVGPathElement>) => void;
    "data-testid"?: string;
  }

  export const ComposableMap: FC<ComposableMapProps>;
  export const Geographies: FC<GeographiesProps>;
  export const Geography: FC<GeographyProps>;
  export const Marker: FC<{ coordinates: [number, number]; children?: ReactNode }>;
  export const Line: FC<object>;
  export const Graticule: FC<object>;
  export const Sphere: FC<object>;
  export const ZoomableGroup: FC<{ children?: ReactNode; [k: string]: unknown }>;
}
