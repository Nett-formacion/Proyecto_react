import HeaderLayout from "@/Layouts/HeaderLayout.jsx";
import NavLayout from "@/Layouts/NavLayout.jsx";
import FooterLayout from "@/Layouts/FooterLayout.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";
import {usePage} from "@inertiajs/react";
export default function Layout({children}){
    const user = usePage().props.user
    return(
        <>
            <HeaderLayout user={user} />
            <NavLayout user={user} />
            <MainLayout >
                {children}
            </MainLayout>
            <FooterLayout />



        </>
    )
}
