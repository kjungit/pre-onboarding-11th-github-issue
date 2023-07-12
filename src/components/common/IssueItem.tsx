/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";

export function IssueItem() {
  return (
    <div
      css={{
        width: "900px",
        height: "90px",
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
        <h3>
          Bug: React bradks HTmlIpuenElement, prototype,value interceptions
        </h3>
        <p>3</p>
      </div>
      <div css={{ display: "flex", gap: "10px" }}>
        <button
          css={{
            width: "auto",
            borderRadius: "10px",
            display: "flex",
            border: "1px solid white",
            padding: "4px",
          }}
        >
          Status: Unconfiremd
        </button>{" "}
        <button
          css={{
            width: "auto",
            borderRadius: "10px",
            display: "flex",
            border: "1px solid white",
            padding: "4px",
          }}
        >
          Status: Unconfiremd
        </button>
      </div>
      <p css={{ display: "flex" }}>#23424 opened yesterdat by SF07</p>
    </div>
  );
}

export default IssueItem;
