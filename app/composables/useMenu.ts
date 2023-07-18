const getProfileMenu = (currentUser: Record<string, any> | void) => {
  if (currentUser && currentUser.uid) {
    return [
      {
        label: currentUser.displayName,
        avatar: { src: currentUser.photoURL },
      },
    ];
  } else {
    return [{ label: "Profile", icon: "i-heroicons-user", to: "/login" }];
  }
};
export const useMenu = (currentUser: Record<string, any> | void) => {
  const AppMenu: Array<MenuItem> = [
    { label: "Home", icon: "i-heroicons-home-20-solid", to: "/" },
    { label: "Shop", icon: "i-heroicons-shopping-bag", to: "/" },
    { label: "Blog", icon: "i-heroicons-newspaper", to: "/" },
    {
      label: "About US",
      icon: "i-heroicons-information-circle",
      to: "/",
    },
  ];
  const LoggedinAppMenu: Array<MenuItem> = [
    {
      label: "Orders",
      icon: "i-heroicons-gift",
      to: "/login",
    },
    {
      label: "Profile",
      icon: "i-heroicons-user",
      to: "/login",
    },
    {
      label: "Help and Support",
      icon: "i-heroicons-question-mark-circle",
      to: "/login",
    },
    {
      label: "Give Feedback",
      icon: "i-heroicons-heart",
      to: "/login",
    },
    {
      label: "Settings and Privacy",
      icon: "i-heroicons-shield-check",
      to: "/login",
    },
  ];
  const LoggedOutAppMenu: Array<MenuItem> = [
    {
      label: "Sign In",
      icon: "mdi:login",
      to: "/login",
    },
  ];
  const ProfileMenu = getProfileMenu(currentUser);
  return { AppMenu, LoggedinAppMenu, ProfileMenu, LoggedOutAppMenu };
};
