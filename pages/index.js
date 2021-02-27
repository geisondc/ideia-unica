import { useState } from 'react';

function Home() {
    return(
        <div>
            <h1> Home Teste </h1>
            <Contador />
        </div>
    
    );
}

function Contador() {
    const [contador, setContador] = useState(0);

    function adicionarContador(){
        setContador(contador + 1);
    }

    function removerContador(){
        if(contador > 0 ){
            setContador(contador - 1);
        }
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={removerContador}>Remover</button>
        </div>
    );
}

export default Home;