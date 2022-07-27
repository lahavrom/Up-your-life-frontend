import { Heading, List } from "monday-ui-react-core";
import {
  Dashboard,
  Person,
  NavigationChevronUp,
  NavigationChevronDown,
} from "monday-ui-react-core/dist/allIcons";

import SidebarListItem from "./components/SidebarListItem";

const Sidebar = () => {
  return (
    <>
      <Heading value="Logo" />
      <List>
        <SidebarListItem value="Dashboard" href="#dashboard" icon={Dashboard} />
        <SidebarListItem value="Incomes" href="#incomes" icon={Person} />
        <SidebarListItem
          value="Expenses"
          href="#expenses"
          icon={NavigationChevronUp}
        />
        <SidebarListItem
          value="Profile"
          href="#profile"
          icon={NavigationChevronDown}
        />
      </List>
    </>
  );
};

export default Sidebar;
