import React from 'react'
import Link from 'next/Link'
import PageTitle from '../components/page-title'

const Sobre = () => {
    return (
    <div>
        <PageTitle title='Sobre' />
        <h1>Sobre</h1>
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    </div>
    )
}

export default Sobre