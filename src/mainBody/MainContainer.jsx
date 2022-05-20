import React, { useState, useEffect } from 'react'
import './mainContainerStyle.css'
import { btnTest } from '../../../react-app-2/src/mainBody/MainBody'

const MainContainer = () => {
    const data = {
        a: 5,
        b: 3,
    }
    const [getValue, setGetValue] = useState(4)

    useEffect(() => {
        btnTest.next(getValue)
        console.log(btnTest)
        //console.log(btnTest)
    }, []);

    return (
        <div className='main-footer-div'>
            <div className='footer-wraper'>
                <div className='logo'>Logo</div>
                <div>
                    <ul className='un-ordered-list'>
                        <li>insta</li>
                        <li>Face</li>
                        <li>Twi</li>
                    </ul>
                </div>
                <div className='handle-btn'>
                    CART: ${getValue}
                </div>
            </div>
        </div>
    )
}

export default MainContainer