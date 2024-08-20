import style from './NewHeaderStyle.module.scss';
import {Link} from "react-router-dom";

function NewHeader() {
    return (
        <div className={style.main}>
            <div className={style.video}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={style.videoContent}
                >
                    <source src="/files/header/intro.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={style.container}>
                <div className={style.leftpart}>
                    <img src="/files/header/logomain.svg" alt=""/>
                </div>
                <div className={style.rightpart}>
                    <div className={style.board}>
                        <div className={style.btn}>Активы группы<div className={style.border}></div>
                        </div>
                        <div className={style.btn}>О нас<div className={style.border}></div></div>
                        <Link to='/allnews' className={style.btn}>Новости<div className={style.border}></div></Link>
                        <Link to='/contacts' className={style.btn}>Контакты<div className={style.border}></div></Link>
                        <Link to='/vakansii' className={style.btn}>Вакансии<div className={style.border}></div></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewHeader;