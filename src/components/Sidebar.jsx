import { Menu, MenuItem, MenuDivider } from "monday-ui-react-core";

const Sidebar = () => {
  return (
    <Menu>
      <MenuItem title="Up Your Life" />
      <MenuDivider />
      <MenuItem title="Dashboard" />
      <MenuDivider />
      <MenuItem title="Profile" />
    </Menu>
  );
};

export default Sidebar;
