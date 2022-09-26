import Contador from "./components/Contador";
import Subtitulo from "./components/Subtitulo";
import TituloPrincipal from "./components/TituloPrincipal";
//Import hojas de estilo
import './style.css'


function App() {

  const comision = 'c6i';

  return (
    <>
    {/* <TituloPrincipal></TituloPrincipal> */}
    <TituloPrincipal codigoComision={comision} estado={true} />
    <Subtitulo/>
    <Contador></Contador>
    </>
  );
}

export default App;
