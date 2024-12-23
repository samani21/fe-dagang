import React, { useState } from 'react'
import { ButtonGoogle, ButtonLogin, FormInputLogin, FormInputLoginMobile, FormLoginContainer, IconWrapperAuth, ImageAuth, InputContainerAuth, InputFieldAuth, LabelAuth, PilihanAuth, SpanAuth, SpanLoginMobile, TextAuth, TextGoogle, TextMobile, TextReset, TitleLogin, TitleLoginMobile, TitleLoginMobileContainer, WrapperLogin } from '../../Components/auth/AuthComponent'
import { IconPassword, InputField, Label, Span, TextButtonWhite, TextGray } from '../../Components/AllComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { iconGoole } from '../../Assets'
import { useNavigate } from 'react-router-dom'
const LoginComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleDaftar = () => {
        navigate('/register'); // Alihkan ke halaman login ("/")
    };
    const handleMasuk = () => {
        navigate('/dashboard'); // Alihkan ke halaman login ("/")
    };
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <FormLoginContainer>
            <TitleLogin>Masuk ke akun Anda</TitleLogin>
            <TitleLoginMobileContainer>
                <TitleLoginMobile>Masuk ke <SpanLoginMobile>akun anda</SpanLoginMobile></TitleLoginMobile>
            </TitleLoginMobileContainer>
            <FormInputLogin>
                <WrapperLogin>
                    <LabelAuth>
                        <Label>Email <Span>*</Span></Label>
                    </LabelAuth>
                    <InputField type='email'
                        placeholder='Masukkan email' />
                </WrapperLogin>
                <WrapperLogin>
                    <LabelAuth>
                        <Label>Password <Span>*</Span></Label>
                    </LabelAuth>
                    <InputField
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Masukkan password"
                    />
                    <IconPassword onClick={toggleVisibility}>
                        <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                    </IconPassword>
                </WrapperLogin>
            </FormInputLogin>
            <FormInputLoginMobile>
                <WrapperLogin>
                    <InputContainerAuth>
                        <IconWrapperAuth>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </IconWrapperAuth>
                        <InputFieldAuth type="email" placeholder="Email" />
                    </InputContainerAuth>
                </WrapperLogin>
                <WrapperLogin>
                    <InputContainerAuth>
                        <IconWrapperAuth>
                            <FontAwesomeIcon icon={faLock} />
                        </IconWrapperAuth>
                        <InputFieldAuth type="email" placeholder="Email" />
                    </InputContainerAuth>
                </WrapperLogin>
            </FormInputLoginMobile>
            <TextReset>Reset Kata Sandi</TextReset>
            <TextMobile>
                <TextAuth>
                    Lupa kata sandi? <SpanAuth style={{ fontWeight: "700" }}>Reset</SpanAuth>
                </TextAuth>
            </TextMobile>
            <ButtonLogin onClick={handleMasuk}>
                <TextButtonWhite>Masuk</TextButtonWhite>
            </ButtonLogin>
            <PilihanAuth>
                <TextGray style={{ marginTop: "20px", marginBottom: "20px" }}>atau</TextGray>
                <ButtonGoogle>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ImageAuth src={iconGoole} style={{ marginRight: "10px" }} />
                        <TextGoogle>
                            Masuk dengan Google
                        </TextGoogle>
                    </div>
                </ButtonGoogle>
                <TextAuth>
                    Belum punya akun? <SpanAuth onClick={handleDaftar}>Daftar</SpanAuth>
                </TextAuth>
            </PilihanAuth>
        </FormLoginContainer>
    )
}

export default LoginComponent
