import HeaderLayout from "@/Layouts/HeaderLayout.jsx";
import NavLayout from "@/Layouts/NavLayout.jsx";
import FooterLayout from "@/Layouts/FooterLayout.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";
export default function Layout({children, user}){
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
