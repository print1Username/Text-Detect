import { useLocation, useNavigate } from 'react-router-dom'

import DetectImage from './components/detect_image';
import ThemeToggle from './components/theme_toggle';

export default function Detect() {
    const location = useLocation()
    const navigate = useNavigate()
    const link = location.state?.link
    const text = ''

    if (!link){
        navigate('/')
        return null
    }

    return (
        <>
            <h1>Image</h1>
            <DetectImage link={link}/>

            <h2>Detected Text</h2>
            <p>{text}</p>

            <ThemeToggle/>

        </>
    )
}