"use client";

import { useSearchParams } from 'next/navigation';
import React from 'react'

function Watch() {

  const videoPrefix = '';
  const videoSrc = useSearchParams().get('v');

  return (
    <div className='min-h-screen p-24 flex flex-col gap-4'>
        <h1>{videoSrc}</h1>
        <video controls src={videoPrefix + videoSrc} className='max-w-[1080px]' />
    </div>
  )
}

export default Watch