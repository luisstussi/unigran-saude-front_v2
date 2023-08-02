import { useState } from 'react';
import './index.scss';
import CarouselImg from '../../components/Carousel';

export default function Login() {

    //função para exibir ou ocultar a senha
    const [showPassword, setShowPassword] = useState('password')
    function seePassword() {
        if (showPassword === 'password') {
            setShowPassword('text')
        } else {
            setShowPassword('password')
        }
    }

    return (
        <div className="backgroundLogin">
            <span className="formLogin">
                <h1>Bem-Vindo novamente!</h1>
                <p>Insira seus dados de acesso para ser direcionado</p>
                <span className='form'>
                    <input type='email' placeholder='Email' />
                    <div className='password'>
                        <input className='inputPassword' type={showPassword} placeholder='Senha' />
                        <button className='btnSeePassword' onClick={() => seePassword()}>
                            {showPassword === 'text' ?
                                <img alt='visivel' src="https://img.icons8.com/small/96/null/visible.png" />
                                :
                                <img alt='invisivel' src="https://img.icons8.com/small/96/null/closed-eye.png" />
                            }
                        </button>
                    </div>
                    <button className='btnResetPassword'>Esqueceu sua Senha?</button>
                    <button className='btnLogin'>Login</button>
                </span>
            </span>

            <span className='backgroundCarousel'>
                <CarouselImg/>
            </span>
        </div>
    )

}
