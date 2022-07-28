import { Heading } from "monday-ui-react-core";
import {
  Dashboard,
  Person,
  NavigationChevronUp,
  NavigationChevronDown,
} from "monday-ui-react-core/dist/allIcons";

import SidebarItem from "./components/SidebarItem";

const Sidebar = () => {
  return (
    <>
      <Heading value="Logo" />
      <SidebarItem title="Dashboard" href="#dashboard" icon={Dashboard} />
      <SidebarItem title="Incomes" href="#incomes" icon={NavigationChevronUp} />
      <SidebarItem
        title="Expenses"
        href="#expenses"
        icon={NavigationChevronDown}
      />
      <SidebarItem title="Profile" href="#profile" icon={Person} />
    </>
  );
};

export default Sidebar;
