import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

    const cssBackground = { backgroundColor: props.corSecundaria};
    const cssBorder = { borderColor: props.corPrimaria};
    const infoNome = props.nome;
    const infoColaboradores = props.colaboradores;

    return (
        (props.colaboradores.length > 0) && <section className="time" style={cssBackground} >
            <h3 style={cssBorder}>{infoNome}</h3>
            <div className="colaboradores">
                {infoColaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time
