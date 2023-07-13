function Badge({ name, color }: { name: string; color: string }) {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return `rgb(${r}, ${g}, ${b}, .7)`;
  };
  const rgbColor = hexToRgb(color);
  return (
    <button
      css={{
        width: "auto",
        fontWeight: "700",
        borderRadius: "20px",
        display: "flex",
        border: "1px solid white",
        padding: "2px 6px",
        backgroundColor: `${rgbColor}`,
      }}
    >
      <span>{name}</span>
    </button>
  );
}

export default Badge;
