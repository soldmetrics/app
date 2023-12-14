export default function(i18n: any) {
  return [
    {
      name: i18n.t("profile.myData"),
      items:[
        {
          icon: require("@assets/icons/iconMyData.svg"),
          name: i18n.t("profile.myData"),
          link: "/profile-settings",
        },
        {
          icon: require("@assets/icons/iconMyPoints.svg"),
          name: i18n.t("profile.myPoints"),
          link: "/my-points",
          plan: "premium",
        },
      ]
    },
    {
      name: i18n.t("profile.settings"),
      items:[
        {
          icon: require("@assets/icons/iconPreferences.svg"),
          name: i18n.t("profile.preferences"),
          link: "/preferences",
        },
        {
          icon: require("@assets/icons/iconPreferences.svg"),
          name: i18n.t("profile.notifications"),
          link: "/notifications",
          plan: "premium",
        },
        {
          icon: require("@assets/icons/iconPrivacy.svg"),
          name: i18n.t("profile.privacy"),
          link: "/privacy",
        },
        {
          icon: require("@assets/icons/iconSecurity.svg"),
          name: i18n.t("profile.security"),
          link: "/security",
        },
      ]
    },
    {
      name: i18n.t("profile.learn"),
      items:[
        {
          icon: require("@assets/icons/iconStepBy.svg"),
          name: i18n.t("profile.stepBy"),
          link: "/step-by-step",
        },
      ]
    },
    {
      name: i18n.t("profile.help"),
      items:[
        {
          icon: require("@assets/icons/iconChatVirtual.svg"),
          name: i18n.t("profile.chatVirtual"),
          link: "/chat-virtual",
        },
        {
          icon: require("@assets/icons/iconAttendant.svg"),
          name: i18n.t("profile.attendant"),
          link: "/attendant",
        },
      ]
    },
  ];
};
