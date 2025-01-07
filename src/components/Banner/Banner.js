import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="Banner Principal da página do Organo."/>
        </header>
    );
}

//Componente com exemplo de importação distinta, para ser utilizado em outros componentes e
// com prevenção de escopo global facilitando o encapsulamento.
