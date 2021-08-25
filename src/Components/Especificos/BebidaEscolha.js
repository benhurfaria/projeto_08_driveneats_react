export default function BebidaEscolha(props){
    return (
        <div class="escolhido-bebida" onclick="selecionarItemBebida(this)">
                <img src={props.image} class="fmtImagem" />
                <h1 class="fmtH1">{props.nomebebida}</h1>
                <h2 class="fmtH2">{props.descricao}</h2>
                <h3 class="fmtH3">R$ </h3>
                <h4 class="fmtH4">{props.valor}</h4>
                <ion-icon name="checkmark-circle-sharp" class="escondido"></ion-icon>
            </div>
    );
}
