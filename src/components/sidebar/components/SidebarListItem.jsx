import PropTypes from "prop-types";

import { ListItem, ListItemIcon } from "monday-ui-react-core";
import styles from "./sidebarListItem.module.css";

const SidebarListItem = ({ value, href, icon }) => {
  return (
    <ListItem>
      <ListItemIcon icon={icon} />
      <a className={styles.hyperlink} href={href}>
        {value}
      </a>
    </ListItem>
  );
};

export default SidebarListItem;

SidebarListItem.propTypes = {
  value: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
};
