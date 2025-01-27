import { useEffect, useRef, useState } from "react";
import style from './styles/ContactsStyle.module.scss';
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import SmallHeader from "../components/newheader/SmallHeader";
import MyMap from "../components/map/Map";
import WriteModal from "../components/modalwin/WriteModal";
import PostContact from "../components/forms/PostContact";
import {useMessage} from "../hooks/message.hook";
import {Link} from "react-router-dom";
import EntryBlanck from "../components/forms/EntryBlanck";
import NewsService from "../services/NewsService";

function Contacts() {
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [thisContacts, setThisContacts] = useState([]);
    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }

    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'hopekids'})
            setThisContacts(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getCities()
    }, [])

    return (
        <div className={style.bodymain}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryBlanck man={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <SmallHeader />
            <div className={style.contacts}>
                <div className={style.ontheleft}>
                    {thisContacts.map((city, indexCity) => (
                        <div className={style.container50} key={indexCity}>
                            <div className={style.strock}>телефон</div>
                            <div className={style.strock}>{(city.phone)&&city.phone}</div>
                            <div className={style.strock}>адрес</div>
                            <div className={style.strock}>г. {(city.city)&&city.city}, {(city.adress)&&city.adress}</div>
                        </div>
                    ))}

                </div>
                <div className={style.ontheright}>
                    <div className={style.container50}>
                        <div className={style.entry}>
                            <Link to='/allprograms' className={style.btn}>Все программы</Link>
                            <div className={style.btn} onClick={()=>postResume()}>Записаться</div>
                        </div>
                    </div>
                </div>
            </div>
            <MyMap mapw={(thisContacts[0].length > 0)?thisContacts[0].mapw:'61.249149'} maph={(thisContacts[0].length > 0)?thisContacts[0].maph:'73.429279'}/>
            <Footer />
        </div>
    );
}

export default Contacts;