import React, { useState } from 'react'
import { ButtonGoogle, ButtonLogin, FormInputLogin, FormLoginContainer, ImageAuth, SpanAuth, TextAuth, TextGoogle, TextReset, TitleLogin, WrapperLogin } from '../../Components/auth/AuthComponent'
import { IconPassword, InputField, Label, Span, TextButtonWhite, TextGray } from '../../Components/AllComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { iconGoole } from '../../Assets'
import { useNavigate } from 'react-router-dom'
const RegisterComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); // Hook untuk navigasi

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };


    const handleMasuk = () => {
        navigate('/'); // Alihkan ke halaman login ("/")
    };
    return (
        <FormLoginContainer>
            <TitleLogin>Buat akun baru</TitleLogin>
            <FormInputLogin>
                <WrapperLogin>
                    <Label>Nama Lengkap <Span>*</Span></Label>
                    <InputField type='email'
                        placeholder='Masukkan nama lengkap' />
                </WrapperLogin>
                <WrapperLogin>
                    <Label>Email Perusahaan <Span>*</Span></Label>
                    <InputField type='email'
                        placeholder='Masukkan email' />
                </WrapperLogin>
                <WrapperLogin>
                    <Label>Password <Span>*</Span></Label>
                    <InputField
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Masukkan password"
                    />
                    <IconPassword onClick={toggleVisibility}>
                        <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                    </IconPassword>
                </WrapperLogin>
            </FormInputLogin>
            <TextReset>Reset Kata Sandi</TextReset>
            <ButtonLogin>
                <TextButtonWhite>Daftar</TextButtonWhite>
            </ButtonLogin>
            <TextGray style={{ marginTop: "20px", marginBottom: "20px" }}>atau</TextGray>
            <ButtonGoogle>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ImageAuth src={iconGoole} style={{ marginRight: "10px" }} />
                    <TextGoogle>
                        Daftar dengan Google
                    </TextGoogle>
                </div>
            </ButtonGoogle>
            <TextAuth>
                Sudah punya akun? <SpanAuth onClick={handleMasuk}>Masuk</SpanAuth>
            </TextAuth>
        </FormLoginContainer>
    )
}

export default RegisterComponent
