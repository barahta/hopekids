import style from './FooterStyle.module.scss'

function Footer (){
    return(
        <div className={style.main}>
            <div className={style.omediawater}></div>
            <div className={style.omedia}></div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.upper}>
                        <div className={style.column}>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>О нас</div>
                            </div>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Активы группы</div>
                            </div>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Новости</div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Стратегические приоритеты</div>
                            </div>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>История</div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </div>
                            <div className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Карьера</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.data}>
                        <div className={style.adress}>г.Сургут, ул. 30 лет Победы, 27/2</div>
                        <div className={style.phone}>+7(3462) 22-12-11 (6139)</div>
                        <div className={style.email}>site@in-news.ru</div>
                    </div>
                    <div className={style.sociality}></div>
                    <div className={style.contacts}>
                        <div className={style.copyright}>

                        </div>
                        <div className={style.contacts}>
                            <div className={style.contacts}>"Сетевое издание "ОМЕДИА!"</div>
                            <div className={style.contacts}>Все права защищены</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer