import ListHeader from "../components/ListHeader";
import { useEffect, useReducer } from "react";
import { issuesReducer } from "../reducers/issuesReducer";
import { getIssues } from "../apis/services/issues";
import { Link } from "react-router-dom";
import IssueItem from "../components/common/IssueItem";
import Banner from "../components/common/Banner";

function ListPage() {
  const [state, dispatch] = useReducer(issuesReducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchIssue = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await getIssues();
      if (!data) return;
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    void fetchIssue();
  }, []);

  if (state.loading)
    return (
      <>
        <img src="../../public/loadingIcon.gif" alt="loading" width="70px" />
      </>
    );
  if (state.error) <>문제가 발생하였습니다.</>;
  if (!state.data) return;
  return (
    <div>
      <ListHeader />
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
        {state.data.data &&
          state.data.data.map((item, index) =>
            index % 5 === 4 ? (
              <Banner key={index} />
            ) : (
              <Link to={`/detail/${item.number}`} key={item.id}>
                <IssueItem issueData={item} />
              </Link>
            )
          )}
      </div>
    </div>
  );
}

export default ListPage;
