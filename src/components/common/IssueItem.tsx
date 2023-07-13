/** @jsxImportSource @emotion/react */
import { IIssueItemProps } from "../../apis/services/issues";
import { dateFormat } from "../../utils/dateFormat";
import Badge from "./Badge";

export function IssueItem({ issueData }: { issueData: IIssueItemProps }) {
  const date = issueData?.created_at && dateFormat(issueData.created_at);

  return (
    <div
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
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <div css={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          <h3 css={{ fontSize: "18px", fontWeight: "700", padding: "4px 0" }}>
            {issueData.title}
          </h3>
          <ul css={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
            {issueData.labels.map((item) => (
              <Badge key={item.id} name={item.name} color={item.color} />
            ))}
          </ul>
        </div>
        <div css={{ display: "flex" }}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            fill="#7d8590"
          >
            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <p
            css={{
              color: "#7d8590",
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "6px",
            }}
          >
            {issueData.comments}
          </p>
        </div>
      </div>

      <div
        css={{
          display: "flex",
          fontSize: "12px",
          color: "#7d8590",
          fontWeight: "600",
        }}
      >
        <span>#{issueData.number}</span>
        <span css={{ marginLeft: "8px" }}>
          {issueData.state === "open" ? "opened" : "closed"}
        </span>
        <span css={{ marginLeft: "8px" }}>{date}</span>
        <span css={{ marginLeft: "8px" }}>{issueData.user.login}</span>
      </div>
    </div>
  );
}

export default IssueItem;
