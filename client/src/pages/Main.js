import style from './styles/Main.module.scss'
import HeaderMain from "../components/header/HeaderMain";

function Main () {
    return (
        <div className={style.bodymain}>
            <HeaderMain />
            <div className={style.blockvideo}>
                <video autoPlay="autoplay" muted="muted" loop="loop" playsInline="">
                <source src="/files/header/intro.mp4" type="video/mp4"/>
            </video>
            </div>

        </div>
    )
}

export default Main