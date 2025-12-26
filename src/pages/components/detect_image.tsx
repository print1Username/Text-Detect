import type { InputHTMLAttributes } from 'react'

interface ImageProps extends InputHTMLAttributes<HTMLInputElement> {
    link?:string
}

export default function DetectImage({
    link
}: ImageProps){

    return (
        <img 
            className='detect-image'
            src={link}
            alt='.'>
        </img>
    )
}