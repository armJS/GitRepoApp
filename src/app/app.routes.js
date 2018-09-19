import {usersPage} from "./pages/users/Users";
import {reposPage} from "./pages/repos/Repos";
import {notFound} from "./common/notFound";
import {userDetailsPage} from "./pages/userDetails/UserDetails";


export const appRoutes = [
    {path: '', component: usersPage},
    {path: 'repos', component: reposPage},
    {path: 'userDetails', component: userDetailsPage, init: userDetailsPage.init},
    {path: '**', component: notFound}
];