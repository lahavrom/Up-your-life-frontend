import { Heading, Menu, MenuItem, MenuDivider } from "monday-ui-react-core";

const Sidebar = () => {
  return (
    <>
      <Heading value="Logo" />
      <Menu>
        <MenuDivider />
        <MenuItem title="Dashboard" />
        <MenuDivider />
        <MenuItem title="Incomes" />
        <MenuDivider />
        <MenuItem title="Expenses" />
        <MenuDivider />
        <MenuItem title="Profile" />
      </Menu>
    </>
  );
};

export default Sidebar;
