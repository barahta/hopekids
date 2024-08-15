import style from './OpenCompany.module.scss'

function OpenCompany ({com}){
    return (
        <div className={style.main}>
            <div className={style.leftpart}>
                <div className={style.logo}>
                    <img src={`/files/companies/${com.img}`} alt=""/>
                </div>
                <div className={style.site}>Перейти на сайт</div>
            </div>
            <div className={style.rightpart}></div>
        </div>
    )
}

export default OpenCompany