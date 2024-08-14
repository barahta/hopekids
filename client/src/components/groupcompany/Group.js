import style from './GroupStyle.module.scss'

function Group (){

    const companies = [
        {
            name: 'aviatech',
            url: 'https://vk.com',
            img: '/files/companies/aviatech.svg'
        },
        {
            name: 'reafarm',
            url: 'https://vk.com',
            img: '/files/companies/reafarm.svg'
        },
        {
            name: '24surgut',
            url: 'https://vk.com',
            img: '/files/companies/24surgut.svg'
        },
        {
            name: 'hopekids',
            url: 'https://vk.com',
            img: '/files/companies/hopekids.svg'
        },
        {
            name: 'hopefitness',
            url: 'https://vk.com',
            img: '/files/companies/hopefitness.svg'
        },
        {
            name: 'thekitcha',
            url: 'https://vk.com',
            img: '/files/companies/thekitcha.svg'
        },
        {
            name: 'traektoriya',
            url: 'https://vk.com',
            img: '/files/companies/traektoriya.svg'
        },
        {
            name: 'verniydrug',
            url: 'https://vk.com',
            img: '/files/companies/verniydrug.svg'
        },

    ]

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>Группа компаний</div>
                <div className={style.companies}>
                    {companies.map((com, index)=>(
                        <div key={index} className={style.one}>
                            <div className={style.active}>
                                <div className={style.sphereone}>
                                    <div></div>
                                </div>
                                <div className={style.spheretwo}>
                                    <div></div>
                                </div>
                                <div className={style.spherethree}>
                                    <div></div>
                                </div>
                            </div>
                            <div className={style.comimg} style={{backgroundImage: `url('${com.img}')`}}></div>
                        </div>
                    ))}

                </div>
                <div className={style.more}>Все проекты</div>
            </div>




        </div>
    )
}

export default Group