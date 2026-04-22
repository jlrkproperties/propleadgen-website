export default function WaterAnimation() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "45%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {/* Layer 1 — slowest, deepest */}
      <svg
        className="water-wave water-wave--1"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "30%",
          left: 0,
          width: "200%",
          height: "80px",
        }}
      >
        <path
          d="M0,60 C120,100 240,20 360,60 C480,100 600,20 720,60 C840,100 960,20 1080,60 C1200,100 1320,20 1440,60 L1440,160 L0,160 Z"
          fill="rgba(20, 90, 160, 0.13)"
        />
      </svg>

      {/* Layer 2 — medium speed */}
      <svg
        className="water-wave water-wave--2"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "18%",
          left: 0,
          width: "200%",
          height: "90px",
        }}
      >
        <path
          d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1350,30 1440,50 L1440,160 L0,160 Z"
          fill="rgba(15, 70, 140, 0.16)"
        />
      </svg>

      {/* Layer 3 — faster, surface ripples */}
      <svg
        className="water-wave water-wave--3"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "8%",
          left: 0,
          width: "200%",
          height: "70px",
        }}
      >
        <path
          d="M0,40 C90,75 180,5 270,40 C360,75 450,5 540,40 C630,75 720,5 810,40 C900,75 990,5 1080,40 C1170,75 1260,5 1350,40 C1395,57 1420,48 1440,40 L1440,160 L0,160 Z"
          fill="rgba(30, 110, 180, 0.12)"
        />
      </svg>

      {/* Layer 4 — fastest, brightest shimmer */}
      <svg
        className="water-wave water-wave--4"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "2%",
          left: 0,
          width: "200%",
          height: "55px",
        }}
      >
        <path
          d="M0,30 C60,55 120,5 180,30 C240,55 300,5 360,30 C420,55 480,5 540,30 C600,55 660,5 720,30 C780,55 840,5 900,30 C960,55 1020,5 1080,30 C1140,55 1200,5 1260,30 C1320,55 1380,15 1440,30 L1440,80 L0,80 Z"
          fill="rgba(60, 150, 210, 0.09)"
        />
      </svg>
    </div>
  );
}
