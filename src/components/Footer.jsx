import React, { useEffect, useState } from 'react'

export default function Footer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {

        setInterval(() => setTime(new Date()), 1000)
    }, []);
    return (
        <footer className='footer'>

        <div className='subfooter'>

            <h2 >My Social Medias</h2>
            <ul className='redes'>
                    <li><a className='redesA' href='https://github.com/FranklynSierra'><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a href='https://www.instagram.com/franklyn_sierra_contreras/'><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>

        </div>
          
            <p className='copyright'>CopyRight {time.getFullYear()}</p>
        </footer>



    )
}