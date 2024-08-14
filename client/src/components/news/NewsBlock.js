import style from './NewsBlockStyle.module.scss'
import {useState} from "react";

function NewsBlock () {

    const [start, setStart] = useState(0)
    const slash = [1,2,3,4]
    const [comas, setComas] = useState(1)
    const news = [
        {
            name: 'Яркий мурал украсил 23 микрорайон Сургута',
            url: '1.webp',
            date: '11 августа 2024'
        },
        {
            name: 'Два человека пострадали в ДТП в Ханты-Мансийском районе',
            url: '2.webp',
            date: '10 августа 2024'
        },
        {
            name: 'Партнеры летнего фестиваля OMEDIA! представили свою продукцию Партнеры летнего фестиваля OMEDIA! представили свою продукцию Партнеры летнего фестиваля OMEDIA! представили свою продукцию',
            url: '6.webp',
            date: '10 августа 2024'
        },
        {
            name: 'В Сургуте отработали действия при выявлении очага африканской чумы свиней',
            url: '3.webp',
            date: '9 августа 2024'
        },
        {
            name: 'Михаил Гуменюк оставляет пост замглавы Сургута',
            url: '4.webp',
            date: '9 августа 2024'
        },
        {
            name: 'На фестивале OMEDIA! работала большая волонтерская зона',
            url: '5.webp',
            date: '8 августа 2024'
        },
        {
            name: 'В ДТП в Нижневартовске пострадала пенсионерка',
            url: '9.webp',
            date: '8 августа 2024'
        },
        {
            name: 'Врио губернатора Югры ответил на опросы жителей Сургутского района',
            url: '7.webp',
            date: '7 августа 2024'
        },
        {
            name: 'В Сургуте отметили Международный день коренных народов мира',
            url: '8.webp',
            date: '7 августа 2024'
        }
    ]

    const ActiveNews = (active, comaactv) =>{
        setStart(active)
        setComas(comaactv)
    }

    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>Новости</div>
                <div className={style.news}>
                    {news.map((elem, index)=>{
                    if(start+3 > index && index>=start){
                        return(
                            <div className={style.news_block}>
                                <div className={style.img} style={{backgroundImage: `url('/files/news/${elem.url}')`}}></div>
                                <div className={style.date}>{elem.date}</div>
                                <div className={style.name}>{(elem.name.length > 80)?elem.name.slice(0, 80) + '...':elem.name}</div>
                                <div className={style.active}></div>
                            </div>
                        )
                    }

                    })}
                </div>
            </div>
            <div className={style.container} style={{backgroundColor: '#FFF'}}>
                <div className={style.comas}>
                    {slash.map((active, index)=>(
                        <div className={style.coma} onClick={()=>ActiveNews(index, active)}><div className={style.slash} style={(active === comas)?{opacity: '1'}:{}}></div></div>
                    ))}
                    </div>
                <div className={style.more}>
                    <div className={style.openmore}>
                        <div className={style.next}></div>
                        <div className={style.title}>Все новости</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock