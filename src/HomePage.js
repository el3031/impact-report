import axel from './img/ST_Axel.jpeg';
import logo from './img/logo.png';
import tableOfContents from './img/tableContentsHome.svg'

function HomePage()
{
    return(
        <header className="Home">
        <img src={axel} className="Home-cover" alt="axel"/>
        <h1 className="Home-title">Impact Report 2021</h1>
        <img src={logo} className="Home-logo" alt="logo"/>
        <tableOfContents className="Home-toc"/>
        </header>
    );
}

export default HomePage;