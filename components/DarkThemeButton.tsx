import Darkmode from "darkmode-js";

export default function DarkThemeButton() {
  const options = {
    right: "32px",
    left: "unset",
    mixColor: "#fff",
    backgroundColor: "#fff",
    buttonColorDark: "#100f2c",
    buttonColorLight: "#fff",
    saveInCookies: false,
    autoMatchOsTheme: true,
  };

  const darkmode = new Darkmode(options);

  return <div>{darkmode.showWidget()}</div>;
}
