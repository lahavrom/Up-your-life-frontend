import { useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { Menu, MenuItem, MenuButton } from "monday-ui-react-core";
import { LogOut, Invite, Image } from "monday-ui-react-core/dist/allIcons";

import { fetchAccountUsers } from "../../../redux/account/actions/fetchAccountUsers";
import { logoutUser } from "../../../redux/user/actions/logoutUser";
import { toggleIsProfileImage } from "../../../redux/user/actions/toggleIsProfileImage";
import {
  selectIsSuccess,
  selectSuccessMessage,
  selectUser,
} from "../../../redux/user/selectors";
import { addUserToAccount } from "../../../redux/account/actions/addUserToAccount";
import usersService from "../../../services/usersService";
import InviteModal from "./InviteModal";
import PersonAvatar from "./PersonAvatar";
import ErrorToast from "../../toasts/ErrorToast";
import SuccessToast from "../../toasts/SuccessToast";
import styles from "./profileButton.module.css";

const ProfileButton = () => {
  const dispatch = useDispatch();

  const isSuccess = useSelector(selectIsSuccess);
  const successMessage = useSelector(selectSuccessMessage);
  const { userId } = useSelector(selectUser);

  const [errToast, setErrToast] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const inputImage = useRef(null);

  const onUploadImage = async () => {
    const formData = new FormData();
    formData.append("image", inputImage.current.files[0], userId);
    try {
      await usersService.updateProfileImage(formData);
      dispatch(toggleIsProfileImage(true));
      dispatch(fetchAccountUsers());
    } catch (error) {
      console.error(error);
    }
  };

  const onSendEmailInvites = async (emails) => {
    const params = { email: emails };
    try {
      await emailjs.send(
        "gmail",
        "invite-to-app-template",
        params,
        "fdRonV2APMX1lKewP"
      );
      dispatch(addUserToAccount(emails));
    } catch (error) {
      setErrToast(true);
      setTimeout(() => setErrToast(false), 5000);
    }
  };

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <ErrorToast
        isVisible={errToast}
        message="Something went wrong, try again later"
      />
      <SuccessToast isVisible={isSuccess} message={successMessage} />
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputImage}
        onChange={onUploadImage}
      />
      <InviteModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        sendEmailInvites={onSendEmailInvites}
      />
      <MenuButton className={styles.profileButton} component={PersonAvatar}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem
            icon={Invite}
            iconType={MenuItem.iconType.SVG}
            title="Invite to account"
            onClick={onOpenModal}
          />
          <MenuItem
            icon={Image}
            iconType={MenuItem.iconType.SVG}
            title="Upload Image"
            onClick={() => inputImage.current.click()}
          />
          <MenuItem
            icon={LogOut}
            iconType={MenuItem.iconType.SVG}
            title="Log Out"
            onClick={onLogout}
          />
        </Menu>
      </MenuButton>
    </>
  );
};

export default ProfileButton;
