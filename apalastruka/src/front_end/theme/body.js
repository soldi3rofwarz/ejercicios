import React from 'react'
import Foot from './foot'
import Head from './head'
import './body.css'

const Body =(Props) => {
    return (
        <section>
            <Head></Head>
            {Props.children}

            <Foot></Foot>
        </section>
    )
}

export default Body;