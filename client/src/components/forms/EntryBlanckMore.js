import style from './PostResumeStyle.module.scss'
import {useState} from "react";
import useNotification from "../../hooks/useNotification.hook";
import Nota from "./Nota";
import {useMessage} from "../../hooks/message.hook";

function EntryBlanckMore ({setActivemodal}){

    const [myname, setMyname] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const { notifications, addNotification } = useNotification();
    const [active, setActive] = useState(false)

    const message = useMessage();

    const postMess = () => {
        if(myname.length>0 && phone.length>0){
            setActivemodal(false)
            setMyname('')
            setPhone('')
            message('Ожидайте звонка для подтверждения')
        }
    }

    return (
        <div className={style.main}>
            <div className={style.up}>
                <div className={style.title}>Обратная связь</div>
                <input onChange={e=>setMyname(e.target.value)} value={myname} type="text" className={style.forminput} placeholder='Как Вас зовут'/>
                <input onChange={e=>setPhone(e.target.value)} value={phone} type="number" className={style.forminput} placeholder='Телефон для связи'/>
            </div>
            <div className={style.down}>
                <div className={style.btnpost} onClick={postMess}>Отправить</div>
            </div>



        </div>
    )
}

export default EntryBlanckMore