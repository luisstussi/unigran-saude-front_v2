import styled from "styled-components";
import { useParams, } from "react-router-dom";
import { useState } from 'react';

import "./styled.scss";

export default function MenuLeft() {
    const params = useParams();


//estilização dos itens da lista do menu lateral
    const Li = styled.li`
    display: flex;
    grid-gap: 18px;
    align-items: center;
    padding: 10px 10px 10px 20px;
    border-radius: 9px;
    background-color: ${(props) =>
            params.title === props.className ? "#343434" : "transparent"};

    &:hover {
      background-color: ${(props) =>
            params.title === props.className ? "#343434" : "#3434344a"};
    }
  `;

//função para alternar entre tema claro e escuro
const [dark, setDark] = useState(true)
const theme = {
    background: dark ? "#1e1e1e" : "white",
}

    return (
        <section style={theme} className="divBackgroundMenuLeft">
            <i>
            <img className="logoMenuLeft" src={dark ? "/static/media/logoDark.484e7300203ed1a3e7e9.png" : "/static/media/logoWhite.610c2c2e6ff4227977d3.png"}/>
            </i> 

            <div>
                <div className="divMenu">
                    <h1>Menu</h1>

                    <ul>
                        <Li className="scheduling">
                            <img
                                width={"25px"}
                                height={"25px"}
                                src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/crossed-out-date--v1.png"
                                alt="Ícone de um calendário, sem cor de fundo, que possui três pontos na coluna superior e dois pontos na coluna inferior. Apenas bordas brancas"
                            />
                            <p>Agendamentos</p>
                        </Li>
                        <div className="divLiWithOptions">
                            <Li className="working">
                                <img
                                    width={"25px"}
                                    height={"25px"}
                                    src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/under-computer.png"
                                    alt="Ícone de um usuário, sem cor de fundo, apenas bordas brancas"
                                />
                                <p>Funcionários</p>
                            </Li>
                            <li
                                style={{
                                    opacity: `${params.title === "working"
                                            ? params.subtitle === "allWorking"
                                                ? 1
                                                : 0.5
                                            : 0.5
                                        }`,
                                }}

                            >
                                Todos Funcionários
                            </li>
                            <li
                                style={{
                                    opacity: `${params.subtitle === "prof&tec" ? 1 : 0.5}`,
                                }}

                            >
                                Professores e Técnicos
                            </li>
                            <li
                                style={{
                                    opacity: `${params.subtitle === "attendants" ? 1 : 0.5}`,
                                }}

                            >
                                Atendentes
                            </li>
                        </div>

                        <Li className="clients">
                            <img
                                width={"25px"}
                                height={"25px"}
                                src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/conference-call.png"
                                alt="Ícone de três usuários lateralmente, sem cor de fundo, apenas bordas brancas"
                            />
                            <p>Clientes</p>
                        </Li>
                        <Li
                            className="departments"

                        >
                            <img
                                width={"25px"}
                                height={"25px"}
                                src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/tree-structure.png"
                                alt="Ícone de uma árvore de estrutura, sem cor de fundo, apenas bordas brancas"
                            />
                            <p>Departamentos</p>
                        </Li>
                    </ul>
                </div>

                <div className="divCustomization">
                    <h1>Customização</h1>
                    <ul>
                        <li>
                            <button
                                id="btnChangeTheme"
                                className="menuLeftButton hoveractive"
                                onClick={() => {setDark(old => !old)}}
                            >
                                <img
                                    width={"25px"}
                                    height={"25px"}
                                    src="https://img.icons8.com/fluency-systems-regular/144/ffffff/sun--v1.png"
                                    alt="Ícone de um sol, sem cor de fundo, apenas bordas brancas"
                                />
                                <p>Mudar Tema</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="divMoreOptions">
                <ul>
                    <Li className="config">
                        <img
                            width={"25px"}
                            height={"25px"}
                            src="https://img.icons8.com/fluency-systems-regular/144/A5A5A5/settings.png"
                            alt="Ícone de uma engrenagem, sem cor de fundo, apenas bordas brancas"
                        />
                        <p>Configurações</p>
                    </Li>
                    <Li className="profile">
                        <img
                            width={"25px"}
                            height={"25px"}
                            src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/resume-website.png"
                            alt="Ícone de uma engrenagem, sem cor de fundo, apenas bordas brancas"
                        />
                        <p>Perfil</p>
                    </Li>
                </ul>
                <button
                    id="btnExit"
                    className="menuLeftButton"
                >
                    <img
                        width={"25px"}
                        height={"25px"}
                        src="https://img.icons8.com/fluency-systems-regular/96/ffffff/shutdown.png"
                        alt="Ícone de uma engrenagem, sem cor de fundo, apenas bordas brancas"
                    />
                    <p>Sair</p>
                </button>
            </div>
        </section>
    );
}
