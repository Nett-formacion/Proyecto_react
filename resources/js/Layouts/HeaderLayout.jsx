export default function HeaderLayout({user}) {

    return (
        <>
            <header className="hidden lg:flex h-15v bg-header flex flex-row justify-center items-center">
                <img className="w-1/5 max-h-full w-auto  p-5 " src="logos/nett_logo.png"
                     alt="logo nett" />
                    <div className="w-3/5 flex justify-center items-center">
                        <h1 className="text-3xl text-white h-auto max-w-full truncate ">APLICACIÓN EJEMPLO LARAVEL</h1>
                    </div>
                { !user &&(
                    <div className=" w-1/5 h-auto max-w-full flex items-center space-x-4 ">
                        <a href="login" className="btn glass  text-white"> Acceder</a>
                        <a href="register" className="btn  glass text-white">Registrar</a>
                    </div> )}
                {user &&(
                    <div className=" w-1/5 h-auto max-w-full flex flex-row items-center space-x-4 ">
                        <h2 className="text-white text-2xl ">{user.name}</h2>
                        <form action="logout" method="post">
                            <input className="btn glass" type="submit" value="Logout" />
                        </form>
                    </div>
              )}
            </header>
        </>
    );
}
