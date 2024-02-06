'use client'

import { signInWithGoogle, signOut } from '@/app/utils/firebase/firebase'
import { User } from 'firebase/auth'
import React, { Fragment } from 'react'

interface SignInProps {
    user: User | null;
}

function SignIn({user}: SignInProps) {

  return (
    <Fragment>
        {user ? (
            <button onClick={signOut} className='block bg-gray-300 border border-gray-500 rounded-full text-blue-700 px-5 py-3 text-sm font-medium cursor-pointer hover:bg-blue-300 hover:border-transparent'>
                Sign Out
            </button>
        ) : (
            <button onClick={signInWithGoogle} className='block border bg-gray-300 border-gray-500 rounded-full text-blue-700 px-5 py-3 text-sm font-medium cursor-pointer hover:bg-blue-300 hover:border-transparent'>
                Sign In
            </button>
        )}

    </Fragment>
  )
}

export default SignIn