import Subtitulo from "./components/Subtitulo";
import TituloPrincipal from "./components/TituloPrincipal";


function App() {

  const comision = 'c6i';

  return (
    <>
    {/* <TituloPrincipal></TituloPrincipal> */}
    <TituloPrincipal codigoComision={comision} estado={true} />
    <Subtitulo/>
    </>
  );
}

export default App;
