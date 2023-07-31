import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginApi from "../servicos/loginApi";


import MobileVersion from '../../../Mobile Version.svg';
import DesktopVersion from '../../../Desktop Version.svg';
import Loading from '../../Loading/index';

import "./login.scss";

export default function Login() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        senha: "",
    });

    const [showLoading, setShowLoading] = useState(false);

    const Login = () => {
        LoginApi.Login({
            email: userData.email,
            senha: userData.senha,
        })
            .then((res) => {
                sessionStorage.setItem("USER_TOKEN", JSON.stringify(res.data.token));
                setShowLoading(true);

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => { });
    };

    //configurando as informaçoes da tela do login
    const [mostrarSenha, setMostrarSenha] = useState("");
    const [mostrarTitulo, setMostrarTitulo] = useState(0);
    const [mostrarSubTitulo, setMostrarSubTitulo] = useState(0);

    const setTitulo = () => {
        if (mostrarTitulo === 0) {
            return "Realize e acompanhe os agendamentos de usuários";
        } else if (mostrarTitulo === 1) {
            return "Realize e acompanhe os agendamentos de usuários 1";
        } else if (mostrarTitulo === 2) {
            return "Realize e acompanhe os agendamentos de usuários 2";
        }
    };
    const setSubTitulo = () => {
        if (mostrarSubTitulo === 0) {
            return "Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário";
        } else if (mostrarSubTitulo === 1) {
            return "Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário 1";
        } else if (mostrarSubTitulo === 2) {
            return "Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário 2";
        }
    };

    setInterval(() => { }, 3000);

    // Logica para deixar a senha Invisivel e visivel
    function seeSenha() {
        const inputSenha = document.getElementById("inputSenha");

        if (inputSenha.getAttribute("type") === "password") {
            inputSenha.setAttribute("type", "text");
            setMostrarSenha("hideSenha");
        } else {
            inputSenha.setAttribute("type", "password");
            setMostrarSenha("mostrarSenha");
        }

        return (
            <div className="fundoLogin">
                {showLoading === true ? <Loading /> : ""}

                <span className="textoFormLogin">
                    <h1>Bem-vindo novamente!</h1>
                    <p>Insira seus dados de acesso para ser direcionado</p>
                    <span className="textoForm">
                        <input type='email' placeholder='Email' value={userData.email} onChange={(e) =>
                            [setUserData({ ...userData, email: e.target.value })]} />
                        <div className="senha">
                            <input className="inputSenha" type="password" placeholder="Senha" value={userData.senha}
                                onChange={(e) => [setUserData({ ...userData, password: e.target.value })]} />
                            <button className='btnSeeSenha' onClick={() => seeSenha()}>
                                {mostrarSenha === 'mostrarSenha' ?
                                    <img src="https://img.icons8.com/small/96/null/visible.png" />
                                    :
                                    <img src="https://img.icons8.com/small/96/null/closed-eye.png" />
                                }
                            </button>
                        </div>
                        <button className="btnResetSenha">Esqueceu sua Senha?</button>
                        <button className="btnLogin" onClick={() => Login()}>Login</button>
                    </span>
                </span>
                <span className="DecoracaoDeFundo">
                    <h1>{setTitulo()}</h1>
                    <h3>{setSubTitulo()}</h3>

                    <span id='spanShowEtp'>
                        <span id='spanFirst' className='active' />
                        <span id='spanSecond' />
                        <span id='spanThird' />
                    </span>

                    <div className='versoesImagem'>
                        <img width={'auto'} height={'auto'} src={MobileVersion} alt='Imagem do login na versão mobile' />
                        <img width={'auto'} height={'auto'} src={DesktopVersion} alt='Imagem do login na versão desktop' />
                    </div>

                </span>
            </div>
        )
    }
}
