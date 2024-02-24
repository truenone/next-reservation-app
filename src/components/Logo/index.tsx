import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href={'/'}>
            <img src="/logo.svg" alt="reserve logo" className='w-[100px] h-[50px]' />
        </Link>
    )
}

export default Logo