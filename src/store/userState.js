import { atom } from "recoil";

export const userState = atom({
  // keyの値は他のrecoilのステートと被らないようなキー値
  key: "userState",
  default: { isAdmin: false }
});
