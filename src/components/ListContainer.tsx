import IssueItem from "./common/IssueItem";

function ListContainer() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        border: "1px solid #434951",
        borderTop: "0",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
      <IssueItem />
    </div>
  );
}

export default ListContainer;
