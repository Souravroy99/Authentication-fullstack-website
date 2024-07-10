export const DataMenus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details1",
        to: "/details1",
        children: [
          {
            label: "Location1",
            to: "/location1",
            children: [
              {
                label: "City1",
                to: "/city1",
              },
            ],
          },
        ],
      },
      {
        label: "Details2",
        to: "/details2",
        children: [
          {
            label: "Location2",
            to: "/location2",
            children: [
              {
                label: "City2",
                to: "/city2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Setting",
    to: "/setting",
    children: [
      {
        label: "Account",
        to: "/account",
      },
      {
        label: "Security",
        to: "/security",
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
          },
        ],
      },
    ],
  },
];

export default DataMenus;
