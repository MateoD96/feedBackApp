import BtnSeeMore from "../BtnSeeMore";
import LoadingSeemore from "../LoadingSeemore";
import LayoutLoading from "../../layout/LayoutLoading";

function SeeMore({ loading, count, data, fnSeemore }) {
  return (
    <LayoutLoading>
      {loading ? (
        <LoadingSeemore />
      ) : count > 3 && data.length !== count && data.length !== 0 ? (
        <BtnSeeMore seeMore={fnSeemore} />
      ) : count !== 0 && data.length > 3 ? (
        <span>Ver menos</span>
      ) : null}
    </LayoutLoading>
  );
}

export default SeeMore;
