<<<<<<< HEAD
import styled from "styled-components";
import { useParams } from "react-router-dom";
=======
import { useState } from 'react';
import LogoDark from '../../imgs/LogoDark.png';
import LogoWhite from '../../imgs/LogoWhite.png';
>>>>>>> db1d4225269d57e28873c705553eed6d7bdb580d

import "./styled.scss";

export default function MenuLeft() {
<<<<<<< HEAD
  const params = useParams();

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
=======

    //função para alternar entre tema claro e escuro
    const [dark, setDark] = useState(true)
    const theme = {
        background: dark ? "#1e1e1e" : "black",
        color: dark ? "#a5a5a5" : "white",
>>>>>>> db1d4225269d57e28873c705553eed6d7bdb580d
    }

<<<<<<< HEAD
  return (
    <section className="divBackgroundMenuLeft">
      <i>
        
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
                  opacity: `${
                    params.title === "working"
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
            <Li className="departments">
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
              >
                <img
                  width={"25px"}
                  height={"25px"}
                  src="https://img.icons8.com/fluency-systems-regular/144/ffffff/sun--v1.png"
                  alt="Ícone de um sol, sem cor de fundo, apenas bordas brancas"
                />
                <p>Modo Claro</p>
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
        <button id="btnExit" className="menuLeftButton">
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
=======
    return (
        <div className="backgroundFull" style={{ background: dark ? "#ffffff" : "#1e1e1e" }}>
            <section style={theme} className="divBackgroundMenuLeft">
                <i>
                    <img className="logoMenuLeft" src={dark ? LogoWhite : LogoDark} />
                </i>

                <div>
                    <div className="divMenu">
                        <h1 style={theme}>Menu</h1>

                        <ul>
                            <span className="scheduling list">
                                <img
                                    width={"25px"}
                                    height={"25px"}
                                    src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/crossed-out-date--v1.png"
                                    alt="Ícone de um calendário, sem cor de fundo, que possui três pontos na coluna superior e dois pontos na coluna inferior. Apenas bordas brancas"
                                />
                                <p>Agendamentos</p>
                            </span>
                            <div className="divLiWithOptions">
                                <span className="working list">
                                    <img
                                        width={"25px"}
                                        height={"25px"}
                                        src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/under-computer.png"
                                        alt="Ícone de um usuário, sem cor de fundo, apenas bordas brancas"
                                    />
                                    <p>Funcionários</p>
                                </span>
                                <li
                                >
                                    Todos Funcionários
                                </li>
                                <li
                                >
                                    Professores e Técnicos
                                </li>
                                <li
                                >
                                    Atendentes
                                </li>
                            </div>

                            <span className="clients list">
                                <img
                                    width={"25px"}
                                    height={"25px"}
                                    src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/conference-call.png"
                                    alt="Ícone de três usuários lateralmente, sem cor de fundo, apenas bordas brancas"
                                />
                                <p>Clientes</p>
                            </span>
                            <span
                                className="departments list"

                            >
                                <img
                                    width={"25px"}
                                    height={"25px"}
                                    src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/tree-structure.png"
                                    alt="Ícone de uma árvore de estrutura, sem cor de fundo, apenas bordas brancas"
                                />
                                <p>Departamentos</p>
                            </span>
                        </ul>
                    </div>

                    <div className="divCustomization">
                        <h1>Customização</h1>
                        <ul>
                            <li>
                                <button
                                    id="btnChangeTheme"
                                    className="menuLeftButton hoveractive"
                                    onClick={() => { setDark(old => !old) }}
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
                        <span className="config list">
                            <img
                                width={"25px"}
                                height={"25px"}
                                src="https://img.icons8.com/fluency-systems-regular/144/A5A5A5/settings.png"
                                alt="Ícone de uma engrenagem, sem cor de fundo, apenas bordas brancas"
                            />
                            <p>Configurações</p>
                        </span>
                        <span className="profile list">
                            <img
                                width={"25px"}
                                height={"25px"}
                                src="https://img.icons8.com/fluency-systems-regular/96/A5A5A5/resume-website.png"
                                alt="Ícone de uma engrenagem, sem cor de fundo, apenas bordas brancas"
                            />
                            <p>Perfil</p>
                        </span>
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
        </div>
    );
>>>>>>> db1d4225269d57e28873c705553eed6d7bdb580d
}
