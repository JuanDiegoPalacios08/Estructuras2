import Profile from "./components/Profile";
import Security from "./components/Security";
import Password from "./components/Password";
import Help from "./components/Help";

export const menuTree = [
    {
        title: "Settings",
        link: "/settings",
        component: null,
        children: [
            {
                title:"Account",
                link: "/settings/account",
                component: null,
                children:[
                    {title:"Profile", link: "/settings/account/profile", component: Profile},
                    {title:"Security & Privacy", link: "/settings/account/security", component: Security},
                    {title:"Password", link: "/settings/account/password", component: Password},
                ]
            },
            {
                title: "Notificacion",
                link: "/settings/notification",
                component: null,
                children:[]
            }
        ]
    },
    {
        title: "Help",
        link:"/help",
        component:Help,
        children:[]
    },
    {
        title: "logout",
        link: "/logout",
        component: null,
        children: []
    }
];