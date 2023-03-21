import LayoutBoards from "../layout/LayoutBoards";
import { useParams } from "react-router-dom";

export function Board({ userAuth }) {
  const { title } = useParams();
  return <LayoutBoards></LayoutBoards>;
}
