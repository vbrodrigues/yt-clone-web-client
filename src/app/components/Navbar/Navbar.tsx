'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'
import { onAuthStateChangedHelper } from '@/app/utils/firebase/firebase'
import { User } from 'firebase/auth'

function Navbar() {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, [])

  return (
    <div className='flex justify-between items-center p-8'>
        <Link className='cursor-pointer' href='/'>
            <Image src='/youtube-logo.svg' alt='YouTube Logo' width={90} height={20} />
        </Link>

        <SignIn user={user} />
    </div>
  )
}

export default Navbar