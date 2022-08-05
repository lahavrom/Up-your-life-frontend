import { useRef, useState, useCallback } from "react";
import emailjs from "emailjs-com";
import { useDispatch, useSelector } from "react-redux";

import { Menu, MenuItem, MenuButton } from "monday-ui-react-core";
import { LogOut, Invite, Image } from "monday-ui-react-core/dist/allIcons";
import styles from "./profileButton.module.css";
import { selectUser } from "../../../redux/user/selectors";
import { addUserToAccount } from "../../../redux/account/actions/addUserToAccount";
import usersService from "../../../services/usersService";
import InviteModal from "./InviteModal";
import PersonAvatar from "./PersonAvatar";
import ErrorToast from "../../toasts/ErrorToast";
import SuccessToast from "../../toasts/SuccessToast";

const ProfileButton = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectUser);

  const [errToast, setErrToast] = useState(false);
  const [succToast, setSuccToast] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const inputImage = useRef(null);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", inputImage.current.files[0], userId);
    try {
      await usersService.updateProfileImage(formData);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
    setSuccToast(true);
  };

  const sendEmailInvites = async (emails) => {
    const params = {
      email: emails,
    };
    try {
      await emailjs.send(
        "gmail",
        "invite-to-app-template",
        params,
        "fdRonV2APMX1lKewP"
      );
    } catch (error) {
      setErrToast(true);
      setTimeout(() => setErrToast(false), 5000);
    }

    dispatch(addUserToAccount(emails));
  };

  const logOut = () => {
    window.localStorage.removeItem("AUTH_TOKEN");
    window.sessionStorage.removeItem("AUTH_TOKEN");
    window.location.reload();
  };

  return (
    <>
      <ErrorToast
        isVisible={errToast}
        message="Something went wrong, try again later"
      />
      <SuccessToast
        isVisible={succToast}
        message="Image uploaded successfully!"
      />
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputImage}
        onChange={() => uploadImage()}
      />
      <InviteModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        sendEmailInvites={sendEmailInvites}
      />
      <MenuButton className={styles.profileButton} component={PersonAvatar}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem
            icon={Invite}
            iconType={MenuItem.iconType.SVG}
            title="Invite to account"
            onClick={() => onOpenModal()}
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
            onClick={() => logOut()}
          />
        </Menu>
      </MenuButton>
    </>
  );
};

export default ProfileButton;
