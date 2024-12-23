import React from 'react'
import { Image, ImageMobile, LoginContainer, LoginContentContainer, Shadow } from '../../Components/auth/AuthComponent'
import imageLogin from '../../Assets/image/2024102104016715d2211a801.jpg'
import imageResponsive from '../../Assets/image/image-2.png'
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'
import { useLocation } from 'react-router-dom'
const Auth = () => {
    const location = useLocation();
    return (
        <LoginContainer image={imageLogin} imageResponsive={imageResponsive}>
            <ImageMobile>
                <Image src={imageResponsive} />
                <Shadow></Shadow>
            </ImageMobile>
            <LoginContentContainer>
                {location.pathname === '/register' ? <RegisterComponent /> : <LoginComponent />}
            </LoginContentContainer>
        </LoginContainer>
    )
}

export default Auth
