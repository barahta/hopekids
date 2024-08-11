import style from './styles/Main.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import AboutUs from "../components/about/AboutUs";
import NewsBlock from "../components/news/NewsBlock";
import Projects from "../components/projects/Projects";

function Main () {
    return (
        <div className={style.bodymain}>
            <HeaderMain />
            <div className={style.blockvideo}>
                <video autoPlay="autoplay" muted="muted" loop="loop" playsInline="">
                <source src="/files/header/intro.mp4" type="video/mp4"/>
            </video>

            </div>
            <AboutUs />
            <Projects />
            <NewsBlock />


        </div>
    )
}

export default Main