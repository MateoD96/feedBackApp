import NavigationMobile from "./NavigationMobile";
import NavigationTablet from "./NavigationTablet";

export default function NavigationBoards({ boards }) {
  return (
    <>
      <NavigationMobile boards={boards} />
      <NavigationTablet boards={boards} />
    </>
  );
}
