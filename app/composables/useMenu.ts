interface Avatar {
  src: string;
  size?: string;
  color?: string;
  text?: string;
}
interface MenuItems {
  to?: string;
  exact?: boolean;
  label: string;
  slot?: string;
  icon?: string;
  iconClass?: string;
  avatar?: Partial<Avatar>;
  shortcuts?: string[];
  disabled?: boolean;
  click?: Function;
}
[];

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
  const AppMenu: MenuItems[] = [
    { label: "Home", icon: "i-heroicons-home-20-solid", to: "/" },
    { label: "Shop", icon: "i-heroicons-shopping-bag", to: "/" },
    { label: "Blog", icon: "i-heroicons-newspaper", to: "/" },
    {
      label: "About US",
      icon: "i-heroicons-information-circle",
      to: "/",
    },
  ];
  const LoggedinAppMenu: MenuItems[] = [
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
  const LoggedOutAppMenu: MenuItems[] = [
    {
      label: "Sign In",
      icon: "mdi:login",
      to: "/login",
    },
  ];
  const ProfileMenu = getProfileMenu(currentUser);
  return { AppMenu, LoggedinAppMenu, ProfileMenu, LoggedOutAppMenu };
};
