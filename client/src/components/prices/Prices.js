import { useEffect, useState, useRef } from "react";
import style from './Prices.module.scss';
import EntryProgram from "../forms/EntryProgram";
import WriteModal from "../modalwin/WriteModal";
import NewsService from "../../services/NewsService";
import {Link} from "react-router-dom";


function Prices() {
    const [visibleBlocks, setVisibleBlocks] = useState({});
    const [list, setList] = useState([]);
    const blockRefs = useRef([]);
    const styles = [
        style.raketa, style.planet1, style.planet2, style.stars,style.raketa2,style.planet3,style.stars2
    ]

    const programs = [
        {
            cap: 'Пакет Лайт',
            desc: '3 часа',
            price: '12.000 ₽',
            points: [
                'Посещение лабиринта',
                'Праздничная посуда',
                'Воздушные шары',
                'Музыкальное сопровождение'
            ],
            priory: 1,
            img: [
                {
                    name: 'fullraket.svg',
                    style: 0
                }
            ]
        },
        {
            cap: 'Пакет медиум',
            desc: '3 часа',
            price: '16.000 ₽',
            points: [
                'Все пункты из пакета "Лайт"',
                '+ Анимационная программа – 1 час',
                '+ Бумажная дискотека - 30 мин',
                '+ Вынос торта персонажем'
            ],
            img: [
                {
                    name: 'planet1.svg',
                    style: 1
                }
            ]
        },
        {
            cap: 'Пакет люкс',
            desc: 'Закрытие центра на 4 часа',
            price: '32.000 ₽',
            points: [
                'Все пункты из пакета "Медиум"',
                '+ Ростовая кукла - 1 час',
                '+ Анимационные развлечения - 2 часа',
                '+ Мастер-класс на выбор'
            ],
            img: [
                {
                    name: 'planet2.svg',
                    style: 2
                }
            ]
        },
        {
            cap: 'Лабиринт',
            desc: 'Обязательное сопровождение взрослым (до 4 лет)',
            price: 'от 550 ₽',
            points: [
                '1 час- 550 рублей',
                '2 часа - 900 рублей',
                'Безлимитное посещение - 1200 рублей',
            ],
            img: [
                {
                    name: 'stars.svg',
                    style: 3
                }
            ]
        },
        {
            cap: 'Пакет №3',
            desc: '4 часа',
            price: '19.000 ₽',
            points: [
                'Посещение лабиринта',
                'Анимационная программа',
                'Бумажная дискотека',
                'Мастер класс на выбор'
            ],
            img: [
                {
                    name: 'fullraket.svg',
                    style: 4
                }
            ]
        },
        {
            cap: 'Пакет №4',
            desc: 'Закрытие центра на 4 часа',
            price: '26.000 ₽',
            points: [
                'Встреча ростовой куклой',
                'Анимационная программа',
                'Бумажная дискотека',
                'Мастер класс на выбор'
            ],
            img: [
                {
                    name: 'planet1.svg',
                    style: 5
                },
                {
                    name: 'stars.svg',
                    style: 6
                }
            ]
        }
    ]
    const imagesaminate = [
        [{

                    name: 'fullraket.svg',
                    style: 0
        }],
        [{

                    name: 'planet1.svg',
                    style: 1
        }],
        [{

                    name: 'planet2.svg',
                    style: 2

        }],
        [{

                    name: 'stars.svg',
                    style: 3
        }],
        [{

                    name: 'fullraket.svg',
                    style: 4
        }],
        [
                {
                    name: 'planet1.svg',
                    style: 5
                },
            {
                name: 'stars.svg',
                style: 6
            }
        ],
        [{

            name: 'fullraket.svg',
            style: 0
        }],
        [{

            name: 'planet1.svg',
            style: 1
        }],
        [{

            name: 'planet2.svg',
            style: 2

        }],
        [{

            name: 'stars.svg',
            style: 3
        }],
        [{

            name: 'fullraket.svg',
            style: 4
        }],
        [
            {
                name: 'planet1.svg',
                style: 5
            },
            {
                name: 'stars.svg',
                style: 6
            }
        ],
        [{

            name: 'fullraket.svg',
            style: 0
        }],
        [{

            name: 'planet1.svg',
            style: 1
        }],
        [{

            name: 'planet2.svg',
            style: 2

        }],
        [{

            name: 'stars.svg',
            style: 3
        }],
        [{

            name: 'fullraket.svg',
            style: 4
        }],
        [
            {
                name: 'planet1.svg',
                style: 5
            },
            {
                name: 'stars.svg',
                style: 6
            }
        ],
        [{

            name: 'fullraket.svg',
            style: 0
        }],
        [{

            name: 'planet1.svg',
            style: 1
        }],
        [{

            name: 'planet2.svg',
            style: 2

        }],
        [{

            name: 'stars.svg',
            style: 3
        }],
        [{

            name: 'fullraket.svg',
            style: 4
        }],
        [
            {
                name: 'planet1.svg',
                style: 5
            },
            {
                name: 'stars.svg',
                style: 6
            }
        ],
        [{

            name: 'fullraket.svg',
            style: 0
        }],
        [{

            name: 'planet1.svg',
            style: 1
        }],
        [{

            name: 'planet2.svg',
            style: 2

        }],
        [{

            name: 'stars.svg',
            style: 3
        }],
        [{

            name: 'fullraket.svg',
            style: 4
        }],
        [
            {
                name: 'planet1.svg',
                style: 5
            },
            {
                name: 'stars.svg',
                style: 6
            }
        ],
    ]
    const makeSale = (block) => {

    }

    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    const postResume = (pos = '') => {
        setData(pos)
        setActivemodal(true)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleBlocks(prev => ({ ...prev, [entry.target.dataset.index]: true }));
                    observer.unobserve(entry.target); // Остановить наблюдение, если блок уже видим
                }
            });
        }, { threshold: 0.1 });

        blockRefs.current.forEach((block, index) => {
            if (block) {
                observer.observe(block);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const getPacks = async () => {
        try{
            const {data} = await NewsService.getAllPacks({capter: 'hopekids'})
            if(data){
                data.reverse()
                const sortedPrograms = data.sort((a, b) => b.priory - a.priory);
                setList(sortedPrograms)
                console.log(sortedPrograms)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getPacks()
    },[])

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<EntryProgram program={data}  setActivemodal={setActivemodal}/>} setData={setData} />
            <div className={style.slashs}>
                <div className={`${style.sphere} ${style.one}`} ></div>
                <div className={`${style.sphere} ${style.two}`} ></div>
                <div className={`${style.sphere} ${style.tree}`} ></div>
                <div className={`${style.sphere} ${style.four}`} ></div>
                <div className={`${style.sphere} ${style.five}`} ></div>
            </div>
            <div className={style.nameblock}>
                <div className={style.title}>СТОИМОСТЬ</div>
            </div>
            <div className={style.container}>
                {list.map((block, index)=>{
                    if(index<6){
                        return(
                            <div
                                key={index}
                                className={`${style.blocks}`}

                            >
                                <div className={style.cap}>{block.name}</div>
                                <div className={style.desc}>{block.time}</div>
                                <div className={style.price}>{block.price}</div>
                                <div className={style.points} style={(block.desc.length > 8)?{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}:{}}>
                                    {block.desc.map((point, indpoint)=>(
                                        <p key={indpoint}>{point}{(block.desc.length > 8)&&';  '}{(block.desc.length > 8)&&' '}</p>
                                    ))}

                                </div>

                                <div className={style.subscript}><div className={style.btn} onClick={()=>postResume(block)}>записаться</div></div>
                                {(imagesaminate[index])&&imagesaminate[index].map((card, indexImg)=>(
                                    <img key={indexImg} src={`./files/kids/${card.name}`} className={styles[card.style]}></img>
                                ))}

                            </div>
                        )
                    }

                })}


            </div>
            <Link to='/allprograms' className={style.morew}>
                Все пакеты
            </Link>
        </div>
    );
}

export default Prices;