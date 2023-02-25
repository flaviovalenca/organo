import Colaborador from "../Colaborador";
import "./index.css";

const Time = (props) => {
  const csstime = { backgroundColor: props.corSecundaria };
  const cssh3 = { borderColor: props.corPrimaria };

  return (
    (props.colaboradores.lenght > 0) ? <section className="time" style={csstime}>
      <h3 style={cssh3}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.codPrimaria}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section> : ''
  )
}

export default Time;
