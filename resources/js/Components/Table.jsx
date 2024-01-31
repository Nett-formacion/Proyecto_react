import {useState} from "react";

export default function Table({filas, campos, nombre}) {
    console.log("Estoy en tabla");
    console.log("nombre" +nombre);
    console.log("campos" +campos);
    console.log("filas" +filas);
    const[orden, setOrden]=useState({
        campo:campos[0],
        ascendente:true
    })
    function ordenar(campo){
        setOrden((ordenActual)=>{
           if (ordenActual.campo ==campo)
               return{
                   campo,
                   ascendente:!ordenActual.ascendente
               }
            else
                return{
                   campo,
                   ascendente: true
                }

           }
        )
    }
    const filasOrdenadas =[...filas].sort((a,b)=>{
        let valorA = a[orden.campo];
        let valorB = b[orden.campo];
        if (!isNaN(valorA)){
            valorA = Number(valorA);
            valorB = Number(valorB);
        }
        if (valorA<valorB)
            return orden.ascendente? -1:1;
        if (valorA>valorB)
            return orden.ascendente? 1:-1;
        return 0
    })
    return (
        <div className="flex flex-col items-center justify-center max-h-full m-5">
            <h1 className="text-2xl text-green-800">Listado de {nombre}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                        <tr>
                        {campos.map((campo, index)=>(
                            <th key={index}>
                            <button className="btn btn-sm btn-primary" onClick={()=>ordenar(campo)}>
                                {campo}
                                {orden.campo===campo && (
                                orden.ascendente? ' ▲' : ' ▼')}
                            </button>
                            </th>
                        ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filasOrdenadas.map((fila)=>(
                            <tr key={fila.id}>
                                {campos.map((campo,index)=>(
                                   <td key={index}>{fila[campo]}</td>
                                ))}

                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
        </div>
            )
            }
