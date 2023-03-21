import { NavigationMobile, NavigationTablet } from "./index";

export function NavigationBoards({ boards }) {
  return (
    <>
      <NavigationMobile boards={boards} />
      <NavigationTablet boards={boards} />
    </>
  );
}
