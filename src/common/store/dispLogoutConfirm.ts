import { atom } from "recoil";

export const dispLogoutConfirm = atom<Boolean>({
  key: "dispLogoutConfirm",
  default: false,
});
