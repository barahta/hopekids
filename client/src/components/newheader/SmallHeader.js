import style from './SmallHeaderStyle.module.scss'
import {Link} from "react-router-dom";

function SmallHeader(){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <Link to='/' className={style.leftpart}>
                    <img src="/files/header/logomain.svg" alt=""/>
                </Link>
                <div className={style.rightpart}>
                    <div className={style.menu}>
                        <div className={style.page}>
                            <div className={style.text}>Активы группы</div>
                            <div className={style.active}></div>
                        </div>
                        <div className={style.page}>
                            <div className={style.text}>О нас</div>
                            <div className={style.active}></div>
                        </div>
                        <Link to='/allnews' className={style.page}>
                            <div className={style.text}>Новости</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/contacts' className={style.page}>
                            <div className={style.text}>Контакты</div>
                            <div className={style.active}></div>
                        </Link>
                        <Link to='/vakansii' className={style.page}>
                            <div className={style.text}>Вакансии</div>
                            <div className={style.active}></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallHeader