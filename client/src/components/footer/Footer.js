import style from './FooterStyle.module.scss'
import {Link} from "react-router-dom";
import NewsService from "../../services/NewsService";
import {useEffect, useState} from "react";
import WriteModal from "../modalwin/WriteModal";
import EntryBlanck from "../forms/EntryBlanck";

function Footer (){

    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    const [thisContacts, setThisContacts] = useState([]);
    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'hopekids'})
            setThisContacts(data)
        }catch(e){
            console.log(e)
        }
    }
    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }
    useEffect(()=>{
        getCities()
    }, [])

    return(
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />

            <div className={style.omediawater}></div>
            <div className={style.omedia}>HOPE KIDS</div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.upper}>
                        <div className={style.column}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <div className={style.point} onClick={()=>postResume()}>
                                <div className={style.next}></div>
                                <div className={style.text}>Записаться</div>
                            </div>
                            <Link to='/allprograms'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Все программы</div>
                            </Link>
                        </div>
                        {/*<div className={style.column}>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>Стратегические приоритеты</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.point}>*/}
                        {/*        <div className={style.next}></div>*/}
                        {/*        <div className={style.text}>История</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={style.column}>
                            <Link to='/phototour'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Фототур</div>
                            </Link>
                            <Link to='/contacts'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.uppermobile}>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>О нас</div>*/}
                            {/*</div>*/}
                            <div className={style.point} onClick={()=>postResume()}>
                                <div className={style.next}></div>
                                <div className={style.text}>Записаться</div>
                            </div>
                            <Link to={'/allprograms'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Все программы</div>
                            </Link>
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>Стратегические приоритеты</div>*/}
                            {/*</div>*/}
                            {/*<div className={style.point}>*/}
                            {/*    <div className={style.next}></div>*/}
                            {/*    <div className={style.text}>История</div>*/}
                            {/*</div>*/}
                            <Link to={'/phototour'} className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Фототур</div>
                            </Link>
                            <Link to='/contacts'  className={style.point}>
                                <div className={style.next}></div>
                                <div className={style.text}>Контакты</div>
                            </Link>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.data}>
                        {thisContacts.map((city, indexCity1) => (
                        <div key={indexCity1} className={style.adress}>г. {(city.city)&&city.city}, {(city.adress)&&city.adress}</div>
                        ))}
                        {thisContacts.map((city, indexCity2) => (
                            <div key={indexCity2} className={style.phone}>{(city.phone)&&city.phone}</div>
                        ))}

                    </div>
                    <div className={style.sociality}>
                        <a href={(thisContacts[0])&&thisContacts[0].vk} target="_blank" rel="noopener noreferrer"><img src="/files/sociality/vk.png" alt=""/></a>
                        <a href={(thisContacts[0])&&thisContacts[0].instagram} target="_blank" rel="noopener noreferrer"><img src="/files/sociality/insta.png" alt=""/></a>
                    </div>
                    <div className={style.autor}>
                        <div className={style.copyright}>

                        </div>
                        <div className={style.description}>
                            <div className={style.text}>"ГК "ОМЕДИА!"</div>
                            <div className={style.text}>Все права защищены</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer