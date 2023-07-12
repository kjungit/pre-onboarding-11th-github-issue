import ListHeader from "../components/ListHeader";
import ListContainer from "../components/ListContainer";
import { getIssues } from "../apis/services/issues";

function ListPage() {
  async function getData() {
    const data = await getIssues();
    console.log(data);
  }
  void getData();
  return (
    <div>
      <ListHeader />
      <ListContainer />
    </div>
  );
}

export default ListPage;
