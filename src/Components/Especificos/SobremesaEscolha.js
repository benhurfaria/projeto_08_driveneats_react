import React from "react";

export default function SobremesaEscolha(props){
    const{
        setCategoria,
        categoria,
        verificaQuantidade,
        normalizaLeiaute
    } = props

    const [contador, setContador] = React.useState(0);
    const [selecionado, setSelecionado] = React.useState("escondido");
    const [borda, setBorda] = React.useState("");
    const [contarCategoria, setContarCategoria] = React.useState(0);

    function incrementar(){
        setContador(contador+1);
    }

    function decrementar(){
        if(contador !== 0) setContador(contador-1);
        if(contador === 1) {
            setSelecionado("escondido");
            setBorda("");
            setCategoria(categoria-1);
            normalizaLeiaute("Sobremesa");
        }
        
    }

    function selecionar(){
        
        if(selecionado !== ""){
            setSelecionado("");
            setContador(contador+1);
            setBorda("verdinho");
            setCategoria(categoria+1);
            verificaQuantidade("Sobremesa");
        } 
    }

    return (
        <div class={`escolhido-sobremesa ${borda}`} onClick={selecionar}>
            <img src={props.image} class="fmtImagem" />
            <h1 class="fmtH1">{props.nomesobremesa}</h1>
            <h2 class="fmtH2">{props.descricao}</h2>
            <h3 class="fmtH3">R$ </h3>
            <h4 class="fmtH4">{props.valor}</h4>
            <p class={`minus ${selecionado}`} onClick={decrementar}>-</p>
            <p class={`number ${selecionado}`}>{contador}</p>
            <p class={`plus ${selecionado}`} onClick={incrementar}>+</p>
            <ion-icon name="checkmark-circle-sharp" class="escondido"></ion-icon>
        </div>
    );
}