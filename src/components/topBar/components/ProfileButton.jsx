import { useRef, useState, useCallback } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import { Menu, MenuItem, MenuButton } from "monday-ui-react-core";
import {
  Person,
  LogOut,
  Invite,
  Image,
} from "monday-ui-react-core/dist/allIcons";
import InviteModal from "./InviteModal";

const ProfileButton = ({ userId }) => {
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

    await axios.post("http://localhost:3001/users/upload-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const sendEmailInvites = () => {
    const params = {
      email: ["lahavrom@gmail.com", "lahav.rom@mail.huji.ac.il"],
    };

    console.log(params);

    // emailjs
    //   .send("gmail", "invite-to-app-template", params, "fdRonV2APMX1lKewP")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  const logOut = () => {
    window.localStorage.removeItem("AUTH_TOKEN");
    window.sessionStorage.removeItem("AUTH_TOKEN");
    window.location.reload();
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputImage}
        onChange={() => uploadImage()}
      />
      <InviteModal isOpen={isModalOpen} />
      <MenuButton component={Person}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem
            icon={Invite}
            iconType={MenuItem.iconType.SVG}
            title="Invite to account"
            // onClick={() => sendEmailInvites()}
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
