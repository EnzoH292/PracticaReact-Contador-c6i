//rsc es para crear componentes funcionales

const TituloPrincipal = (props) => {
    //Aquí la lógica
    return (
        <>
            {/* Aquí va el maquetado y algún poco de lógica */}
            <h1> Proyecto Contador - {props.codigoComision}</h1>
            <hr/>
        </>
    );
};

export default TituloPrincipal;