import { getFunctions, httpsCallable } from "firebase/functions";

// This works only because we already initialized the Firebase app in the ./firebase.ts file
const functions = getFunctions();

const generateUploadUrl = httpsCallable(functions, 'generateUploadUrl');

export async function uploadVideo(file: File) {
    const response: any = await generateUploadUrl({
        fileExtension: file.name.split('.').pop()
    });

    await fetch(response?.data?.url, {
        method: 'PUT', 
        body: file, 
        headers: {
            'Content-Type': file.type
        }
    });

    return;
}