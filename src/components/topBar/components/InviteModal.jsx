import { useState } from "react";
import { TextField, Button, Divider } from "monday-ui-react-core";
import { Email, Add, Delete } from "monday-ui-react-core/dist/allIcons";

import styles from "./inviteModal.module.css";
import AppModal from "../../modal/AppModal";
import SuccessToast from "../../toasts/SuccessToast";

const InviteModal = ({ isOpen, onClose, sendEmailInvites }) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [mailErr, setMailErr] = useState(false);
  const [succToast, setSuccToast] = useState(false);
  const [Loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const addEmail = () => {
    if (validateEmail(currentEmail)) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
      return;
    }
    setMailErr(true);
  };

  const onCloseInvite = () => {
    setEmails([]);
    onClose();
  };

  const handleInvite = async () => {
    setLoading(true);
    if (emails.length) {
      await sendEmailInvites(emails);
      setSuccToast(true);
      onCloseInvite();
    }
    setLoading(false);
  };

  return (
    <>
      <SuccessToast
        isVisible={succToast}
        message="Invitations sent successfully!"
      />
      <AppModal isOpen={isOpen} onClose={onCloseInvite}>
        <TextField
          title="Invite with email"
          labelIconName={Email}
          value={currentEmail}
          iconName={Add}
          placeholder="Enter email"
          size={TextField.sizes.LARGE}
          onChange={(val) => setCurrentEmail(val)}
          onIconClick={() => addEmail()}
          onKeyDown={(event) => {
            event.key === "Enter" ? addEmail() : setMailErr(false);
          }}
          validation={
            mailErr
              ? { status: "error", text: "Invalid email address" }
              : undefined
          }
        />
        <Divider />
        {emails.length ? (
          emails.map((mail) => (
            <div className={styles.mail} key={mail}>
              <TextField
                value={mail}
                iconName={Delete}
                readonly
                size={TextField.sizes.MEDIUM}
                onIconClick={() =>
                  setEmails(emails.filter((val) => val !== mail))
                }
              />
            </div>
          ))
        ) : (
          <></>
        )}
        <Button
          disabled={emails.length === 0}
          onClick={() => handleInvite()}
          loading={Loading}
        >
          Invite
        </Button>
      </AppModal>
    </>
  );
};

export default InviteModal;
