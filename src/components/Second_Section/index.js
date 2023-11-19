import React, {useState, useEffect} from 'react'
import SmartPhone from '../../assets/images/smartphone.png'
import './secondSection.css';
import stars from '../../assets/images/stars.png';


export default function SecondSection() {

    const [the, setThe] = useState("noAniThe")
    const [app, setApp] = useState("noAniApp")
    const [cell, setCell] = useState("noAniCell")

    const [part1, setPart1] = useState("")
    const [part2, setPart2] = useState("")
    const [part3, setPart3] = useState("")
    const [part4, setPart4] = useState("")

    const listenScrollEvent = (event) => {
        if (window.scrollY > 600) {
        return (setThe("aniThe"), setCell('aniCell'), setApp("aniApp"))
        } 
    }

    const listenScrollEventText = (event) => {
        if (window.scrollY < 1600) {
            return (setPart1('high'), setPart2(''), setPart3(''), setPart4(''))
        } 
        if (window.scrollY < 1750) {
            return (setPart1(''), setPart2('high'), setPart3(''), setPart4(''))
        } 
        if (window.scrollY < 1900) {
            return (setPart1(''), setPart2(''), setPart3('high'), setPart4(''))
        }
        if (window.scrollY < 2050) {
            return (setPart1(''), setPart2(''), setPart3(''), setPart4('high'))
        }  
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        window.addEventListener('scroll', listenScrollEventText);

        return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <>
            <div className="second-section">
                <h1 id="the" className={`text-app ${the}`}>
                    The
                </h1>
                <img className={`phone ${cell}`} src={SmartPhone}/>
                <h1 id="app" className={`text-app ${app}`}>
                    App
                </h1>
            </div>
            <div className="desc">
                <h1 className="desc_second_div">
                    <span className={`desc_second ${part1}`}>Download Swift.</span><br/>
                    <span className={`desc_second ${part2}`}>Your purchases, anywhere, anytime.</span><br/>
                    <span className={`desc_second ${part3}`}> Easily transfer money, for free. </span><br/>  
                    <span className={`desc_second ${part4}`}>Bank from anywhere in the world.</span>
                </h1>
            </div>
            <div className='rating'>
                <h1 className='rating-number'>
                    4.7
                </h1>
                <div className='stars-desc'>
                    <img className='stars' src={stars}/>
                    <p>
                        Score on app store
                    </p>
                </div>
            </div>
        </>
    )
}
