import {
    Route,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    NavLink,
    RouterProvider,
} from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Layout } from './components/Layout';
import { About } from './pages/Aboutpage';
import { Assistance } from './pages/Assistance';
import { Contact } from './pages/Contact';
import { blogLoader, Blogpage } from './pages/Blogpage';
import { postLoader, Singlepage } from './pages/Singlepage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { LoginPage } from './pages/Loginpage';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import Header from './components/header/header';
import Promo from './components/promo/promo';
import { Services } from './pages/Services';
import { Cartpage } from './pages/Cartpage';
import { Sertif } from './pages/Sertif';
import {Program1} from "./pages/Program1";

import {Index1} from "./pages/Index1";
import {Main} from "./components/Main/Main";

import {SignUp} from "./pages/SignUp";
import {Loginpage1} from "./pages/Loginpage1";
import {Registration} from "./pages/Registration";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="navlink" element={<NavLink />} />
            <Route path="cartpage" element={<Cartpage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="services" element={<Services />}/>
            <Route path="sertif" element={<Sertif />} />
            <Route path="program1" element={<Program1 />} />
            <Route path="index1" element={<Index1/>} />
            <Route path="main" element={<Main/>} />

            <Route path="signUp" element={<SignUp/>} />



            <Route path="assistance" element={<Assistance />} />
            <Route path="posts" element={<Blogpage />} loader={blogLoader} />
            <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />
            <Route path="posts/:id/edit" element={<Editpost />} />
            <Route
                path="posts/new"
                element={
                    <RequireAuth>
                        <Createpost />
                    </RequireAuth>
                }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="login1" element={<Loginpage1 />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Notfoundpage />} />
            <Route path="about-us" element={<Navigate to="/about" replace />} />
        </Route>
    )
);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;