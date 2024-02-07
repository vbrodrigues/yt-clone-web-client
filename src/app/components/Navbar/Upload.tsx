"use client"

import { uploadVideo } from '@/app/utils/firebase/functions';
import { VideoCamera } from 'phosphor-react'
import React, { Fragment } from 'react'

function Upload() {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);

        if (file) {
            handleVideoUpload(file);
        }

    }

    const handleVideoUpload = async (file: File) => {
        try {
            const response = await uploadVideo(file);
            alert(`File uploaded successfully.`)
        } catch (err) {
            alert(`Failed to upload video. Error: ${err}`)
        }
    }

  return (
    <Fragment>
        <input id='upload' className='hidden' type='file' accept='video/*' onChange={handleFileChange} />
        <label htmlFor='upload' className=' flex justify-center border border-gray-500 bg-gray-300 items-center w-12 h-12 rounded-full text-gray-900 cursor-pointer p-2 hover:border-none hover:bg-blue-300'>
            <VideoCamera size={24} weight='regular' />
        </label>
    </Fragment>
  )
}

export default Upload