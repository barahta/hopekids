import style from './BigModalStyle.module.scss';
import {useEffect} from "react";

function BigModal({activemodal, setActivemodal, data}) {
    useEffect(() => {
        let scrollPosition = 0;

        if (activemodal) {
            scrollPosition = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
        } else {
            const y = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';

            window.scrollTo(0, parseInt(y || '0') * -1);
        }
    }, [activemodal]);

    return (
        <div className={style.main} style={activemodal ? {display: 'flex'} : {}}>
            <div className={style.logo}><img src="/files/header/logomain.svg" alt=""/></div>
            <div className={style.closes} onClick={() => setActivemodal(false)}>Close</div>
            {data}
        </div>
    );
}

export default BigModal;