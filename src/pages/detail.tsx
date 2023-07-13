import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getDetailIssues } from "../apis/services/issues";
import MDEditor from "@uiw/react-md-editor";
import { dateFormat } from "../utils/dateFormat";
import { detailIssuesReducer } from "../reducers/detailIssueReducer";

function DetailPage() {
  const [state, dispatch] = useReducer(detailIssuesReducer, {
    loading: false,
    data: null,
    error: null,
  });

  const { id } = useParams();

  const fetchIssue = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await getDetailIssues({ id: Number(id) });
      if (!data) return;
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    void fetchIssue();
  }, []);

  const date = state.data?.created_at && dateFormat(state.data?.created_at);
  const markDown = state.data?.body;

  if (state.loading)
    return (
      <>
        <img src="../../public/loadingIcon.gif" alt="loading" width="70px" />
      </>
    );
  if (state.error) <>문제가 발생하였습니다.</>;
  if (markDown === undefined) return;
  return (
    <div>
      <div
        css={{
          width: "900px",
          height: "70px",
          display: "flex",
          backgroundColor: "#161B22",
          borderRadius: "10px 10px 0 0",
          border: "1px solid #434951",
          borderBottom: "0",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          css={{
            borderRadius: "100%",
            width: "50px",
            height: "50px",
            padding: "10px",
          }}
          src={state.data?.user.avatar_url}
          alt="profile"
        />
        <span css={{ fontSize: "14px", color: "white", fontWeight: "800" }}>
          #{state.data?.number}
        </span>
        <span
          css={{
            fontSize: "14px",
            color: "white",
            fontWeight: "800",
            marginLeft: "10px",
          }}
        >
          {state.data?.user.login}
        </span>
        <span
          css={{
            fontSize: "14px",
            color: "#7d8590",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          {date}
        </span>
      </div>
      <section
        css={{
          display: "flex",
          flexDirection: "column",
          width: "900px",
          border: "1px solid #434951",
          borderTop: "0",
          borderRadius: "0 0 10px 10px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="markdownDiv"
          data-color-mode="dark"
          style={{ padding: 15 }}
        >
          <MDEditor.Markdown style={{ padding: 10 }} source={markDown} />
        </div>{" "}
      </section>
    </div>
  );
}

export default DetailPage;
