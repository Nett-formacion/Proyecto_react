import Layout from "@/Layouts/Layout.jsx";

export default function Proyectos({ auth}){


    const nombre ="Manuel";
    return(
        <Layout user={auth.user} >
            <h1>Listado de proyectos</h1>

        </Layout>
    )
}
