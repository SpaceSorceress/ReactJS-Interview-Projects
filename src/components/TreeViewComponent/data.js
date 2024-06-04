const menu = [
  {
    label: "Home",
    to: "/",
    content: "This is the main page",
  },
  {
    label: "Profile",
    to: "/profile",
    content: "This is the profile section",
    children: [
      {
        label: "Details",
        to: "details",
        content: "Here are the details of your profile",
        children: [
          {
            label: "Location",
            to: "location",
            content: "The location is:...",
            children: [
              {
                label: "City",
                to: "city",
                content: "Please indicate your city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    content: "Settings section",
    children: [
      {
        label: "Account",
        to: "account",
        content: "Account section",
      },
      {
        label: "Security",
        to: "security",
        content: "Security section",
        children: [
          {
            label: "Login",
            content: "Possible Login Page",
            to: "login",
          },
          {
            label: "Register",
            content: "Possible Register Page",
            to: "register",
            children: [
              {
                label: "Random data",
                content: "Random Data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menu;
