import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  p {
    font-weight: 500;
  }

  .right {
    text-align: right;
  }
`;

const CopyInput = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    display: block;
    margin: 0.5rem 0;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid #707070;
    outline: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

    :disabled {
      background-color: rgba(112, 112, 112, 0.2);
      border: 2px solid #6773e2;
      padding: calc(0.6rem - 1px);
      transition: 0.5s ease-in-out;
    }
  }

  button {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-5%, -45%);
    background-color: #41487b;
    border: 0;
    border-radius: 5px;
    outline: none;
    color: white;
    width: 80px;
    height: 80%;
    font-weight: 500;
    text-decoration: none;
    font-size: smaller;
    margin: 1rem ${(props) => (props.center ? "auto" : 0)};
    cursor: pointer;
  }
`;

const UserInvite = () => {
  const [inviteUrl, setInviteUrl] = useState("");
  const {
    rootStore: { userStore },
  } = useStores();
  const { invites } = userStore.userData;
  const { addToast } = useToasts();
  const inviteInput = useRef(null);

  useEffect(() => {
    setInviteUrl(window.location.origin + "/invite/" + invites[0].invite_code);
  }, []);

  const copyToClipboard = (e) => {
    inviteInput.current.select();
    document.execCommand("copy");
    addToast("Copied invite URL", { appearance: "info", autoDismiss: true });
  };

  return (
    <div className="row">
      <div className="col-12">
        <Container>
          <div className="row">
            <div className="col-3">
              <p>Invite another member: </p>
            </div>
            <div className="col-6">
              <CopyInput>
                <input
                  ref={inviteInput}
                  type="text"
                  readOnly="readonly"
                  value={inviteUrl}
                />
                <button onClick={() => copyToClipboard()}>Copy</button>
              </CopyInput>
            </div>
            <div className="col-3">
              <p className="right">
                Remaining: <small>{invites[0].invites} Uses</small>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default observer(UserInvite);
