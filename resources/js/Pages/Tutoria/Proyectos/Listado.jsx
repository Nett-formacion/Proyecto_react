import Layout from "@/Layouts/Layout.jsx";
import Table from "@/Components/Table.jsx";




export default function Listado({filas, nombre, campos}){
    console.log("Estoy en listado");
    return(
        <Layout>
            <Table filas={filas} campos ={campos} nombre={nombre} />
        </Layout>
    )
}
