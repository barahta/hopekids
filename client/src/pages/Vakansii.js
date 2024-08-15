import style from './styles/AllNewsStyle.module.scss'
import TwoBlocks from "../components/animation/TwoBlocks";
import Footer from "../components/footer/Footer";
import NewsPost from "../components/news/NewsPost";
import SmallHeader from "../components/newheader/SmallHeader";
import {useEffect, useState} from "react";

function AllNews (){

    return (
        <div className={style.bodymain}>
            <SmallHeader />
            <TwoBlocks />
            <Footer />
        </div>
    )
}

export default AllNews