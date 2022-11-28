import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store";
import { userService } from "../services";
import Icon from "./Icon";
import { generateDialog } from "./Dialog";
import toastHelper from "./Toast";

type Props = DialogProps;

interface State {
  username: string;
  nickname: string;
  email: string;
}

const UpdateAccountDialog: React.FC<Props> = ({ destroy }: Props) => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.user.user as User);
  const [state, setState] = useState<State>({
    username: user.username,
    nickname: user.nickname,
    email: user.email,
  });

  useEffect(() => {
    // do nth
  }, []);

  const handleCloseBtnClick = () => {
    destroy();
  };

  const handleNicknameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      return {
        ...state,
        nickname: e.target.value as string,
      };
    });
  };
  const handleUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      return {
        ...state,
        username: e.target.value as string,
      };
    });
  };
  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      return {
        ...state,
        email: e.target.value as string,
      };
    });
  };

  const handleSaveBtnClick = async () => {
    if (state.username === "") {
      toastHelper.error(t("message.fill-all"));
      return;
    }

    try {
      const user = userService.getState().user as User;
      const userPatch: UserPatch = {
        id: user.id,
      };
      if (!isEqual(user.nickname, state.nickname)) {
        userPatch.nickname = state.nickname;
      }
      if (!isEqual(user.username, state.username)) {
        userPatch.username = state.username;
      }
      if (!isEqual(user.email, state.email)) {
        userPatch.email = state.email;
      }
      await userService.patchUser(userPatch);
      toastHelper.info("Update succeed");
      handleCloseBtnClick();
    } catch (error: any) {
      console.error(error);
      toastHelper.error(error.response.data.error);
    }
  };

  return (
    <>
      <div className="dialog-header-container !w-64">
        <p className="title-text">Update information</p>
        <button className="btn close-btn" onClick={handleCloseBtnClick}>
          <Icon.X />
        </button>
      </div>
      <div className="dialog-content-container">
        <p className="text-sm mb-1">
          Nickname<span className="text-sm text-gray-400 ml-1">(Display in the banner)</span>
        </p>
        <input type="text" className="input-text" value={state.nickname} onChange={handleNicknameChanged} />
        <p className="text-sm mb-1 mt-2">
          Username
          <span className="text-sm text-gray-400 ml-1">(Using to sign in)</span>
        </p>
        <input type="text" className="input-text" value={state.username} onChange={handleUsernameChanged} />
        <p className="text-sm mb-1 mt-2">
          Email<span className="text-sm text-gray-400 ml-1">(Optional)</span>
        </p>
        <input type="text" className="input-text" value={state.email} onChange={handleEmailChanged} />
        <div className="mt-4 w-full flex flex-row justify-end items-center space-x-2">
          <span className="btn-text" onClick={handleCloseBtnClick}>
            {t("common.cancel")}
          </span>
          <span className="btn-primary" onClick={handleSaveBtnClick}>
            {t("common.save")}
          </span>
        </div>
      </div>
    </>
  );
};

function showUpdateAccountDialog() {
  generateDialog(
    {
      className: "update-account-dialog",
    },
    UpdateAccountDialog
  );
}

export default showUpdateAccountDialog;
