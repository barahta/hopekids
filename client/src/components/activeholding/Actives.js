import style from './ActivesStyle.module.scss'

function Actives (){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.blocks}>
                    <div className={style.one}>
                        <div className={style.left}>
                            <div className={style.next}></div>
                        </div>
                        <div className={style.right}>
                            <div className={style.text}>Радио</div>
                        </div>
                    </div>
                    <div className={style.two}>
                        <div className={style.block}>
                            <div className={style.left}>
                                <div className={style.next}></div>
                            </div>
                            <div className={style.right}>
                                <div className={style.text}>Телевидение</div>
                            </div>
                        </div>
                        <div className={style.block}>
                            <div className={style.left}>
                                <div className={style.next}></div>
                            </div>
                            <div className={style.right}>
                                <div className={style.text}>Цифровые платформы</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.three}>
                        <div className={style.left}>
                            <div className={style.next}></div>
                        </div>
                        <div className={style.right}>
                            <div className={style.text}>Рекалама и Маркетинг</div>
                        </div>
                    </div>
                    <div className={style.four}>
                        <div className={style.left}>
                            <div className={style.next}></div>
                        </div>
                        <div className={style.right}>
                            <div className={style.text}>Другие активы</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Actives