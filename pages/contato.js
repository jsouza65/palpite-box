import React from 'react'
import Link from 'next/Link'
import PageTitle from '../components/page-title'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1>Contato</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Contato
