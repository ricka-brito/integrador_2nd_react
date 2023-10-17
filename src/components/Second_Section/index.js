import React, {useState, useEffect} from 'react'
import SmartPhone from '../../assets/images/smartphone.png'
import './secondSection.css';


export default function SecondSection() {

    const [the, setThe] = useState("noAniThe")
    const [app, setApp] = useState("noAniApp")
    const [cell, setCell] = useState("noAniCell")

    const listenScrollEvent = (event) => {
        if (window.scrollY > 600) {
        return (setThe("aniThe"), setCell('aniCell'), setApp("aniApp"))
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
    <div className="second-section">
        <h1 id="the" className={`text-app ${the}`}>
            The
        </h1>
        <img className={`phone ${cell}`} src={SmartPhone}/>
        <h1 id="app" className={`text-app ${app}`}>
            App
        </h1>
    </div>
    )
}
