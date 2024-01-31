import Layout from "@/Layouts/Layout.jsx";

export default function Index({num, auth}){


    const nombre ="Manuel";
    return(
        <Layout user={auth.user} >
            <h1>Este es mi primer componente {5+4}</h1>
            <h1>Seguro</h1>
            <h1>Valor de nombre {nombre} </h1>
            <h1>Número recibido  {num} </h1>
        </Layout>
    )
}
