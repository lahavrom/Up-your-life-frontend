import { Flex, Divider, Icon } from "monday-ui-react-core";

import styles from "./sidebarItem.module.css";

const SidebarItem = ({ title, href, icon, isDivider = true }) => {
  return (
    <>
      <Flex className={styles.container} gap={Flex.gaps.SMALL}>
        <Icon icon={icon} />
        <a className={styles.hyperlink} href={href}>
          {title}
        </a>
      </Flex>
      {isDivider && <Divider />}
    </>
  );
};

export default SidebarItem;
