import {Link} from "@inertiajs/react";
export default function NavLayout({user}) {
    return (
        <>
            <nav className="bg-nav flex flex-row justify-start space-x-2 px-2">
                <a href="#" className="btn btn-primary  ">Inicio</a>
                <a href="#" className="btn btn-primary">Acerca de Nosotros</a>
                <Link href="proyectos" className="btn btn-primary">Proyectos</Link>

                { user && (
                    <>
                        <a href="#" className="btn btn-primary">Contacto</a>
                        <a href="#" className="btn btn-primary">Alumnos</a>
                    </>

                )}

            </nav>
        </>
    )
}

