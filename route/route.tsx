import Comments from "../Screens/Comments/Comments";
import Home from "../Screens/Home/Home";
import Posts from "../Screens/Posts/Posts";
import Splash from "../Screens/Splash/Splash";

export const route = [
    {
        name: "Splash",
        component: Splash,
        options: {
            headerShown: false
        }
    },
    {
        name: "Home",
        component: Home,
        options: {
            headerShown: false
        }
    },
    {
        name: "Posts",
        component: Posts,
        options: {
            headerShown: false,
        }
    },
    {
        name: "Comments",
        component: Comments,
        options: {
            headerShown: false,
        }
    },
];