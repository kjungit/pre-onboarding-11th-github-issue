/** @jsxImportSource @emotion/react */
const MENU_ITEM = [
  {
    title: "Author",
  },
  { title: "Label" },
  { title: "Projects" },
  { title: "Milestones" },
  { title: "Assignee" },
  { title: "Sort" },
];
export function ListHeader() {
  return (
    <div
      css={{
        width: "auto",
        height: "56px",
        display: "flex",
        flexDirection: "column",
        padding: "8px 20px",
        backgroundColor: "#161B22",
        borderRadius: "10px 10px 0 0",
        border: "1px solid #434951",
        borderBottom: "0",
        justifyContent: "center",
      }}
    >
      <ul css={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {MENU_ITEM.map((item) => (
          <li key={item.title} css={{ padding: "8px", color: "#7d8590" }}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListHeader;
