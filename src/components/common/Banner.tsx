export function Banner() {
  return (
    <a
      href="https://www.wanted.co.kr/jobsfeed"
      target="_blank"
      css={{
        width: "900px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        padding: "12px 20px",
        ":hover": {
          backgroundColor: "#161B22",
        },
        justifyContent: "space-between",
        borderTop: "1px solid #434951",
      }}
    >
      <img
        src="../public/optimize.webp"
        alt="배너"
        css={{ height: "80px", width: "auto", objectFit: "contain" }}
      />
    </a>
  );
}

export default Banner;
