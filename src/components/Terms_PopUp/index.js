import React, { useEffect, useState } from 'react'
import './terms.css';

export default function Terms() {

    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        return () => {
            setShowButton(true)
        }
    }, [])
    if(showButton){
        return (
            <div className="frame">
            <p className="terms">This website uses cookies and personal data in accordance with our <a href="" className="link-termos">Terms of Use and Privacy Policy</a></p>
            <a className="button" onClick={() => setShowButton(false)}>
                OK
            </a>
        </div>
        )
    }
}
