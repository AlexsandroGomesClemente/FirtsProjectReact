import Foto from './img/user.png'
import { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";





export const Main = () => {

    const [options, setOptions] = useState({
        title: 'Minhas Ações'
    })
    const [data, setData] = useState([
        ['Açao', 'Quantidade', 'Valor'],
        ['Petrobras', 43, 32.44],
        ['Embraer', 50, 19.94],
        ['B3Brasil', 15, 14.10],
        ['Itau Unibanco', 23, 25.05],
        ['Vale', 20, 93.87]

    ])

    const [grafico, setGrafico] = useState(<Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        data={data}
        options={options} />)



    const cliclou = () => {

        setOptions({
            title: "Valores e alterações",
        })

        setGrafico(<Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />)

    }


    const voltar = () => window.location.reload()
    return (
        <div className="main">
            <div className="menu-dash">
                <div className="Usuario">
                    <img className='img-header' src={Foto} alt="FotoDePerfil" />
                    <span>Alexsandro Clemente</span>
                </div>
                <div className='Lista'>
                    <ul>
                        <h3>Ações</h3>
                        <a><li>Minhas Ações</li></a>
                        <a><li>Compre Novas Ações</li></a>
                        <a><li>Nossas Recomendações</li></a>
                    </ul>

                    <ul>
                        <h3>Configurações</h3>
                        <a><li>Perfil</li></a>
                        <a><li>Suporte</li></a>
                        <a><li>Sair</li></a>
                    </ul>

                </div>

            </div>

            <div className="Graficos">
                <div className='Graf-Principal' onClick={cliclou}>
                    {grafico}
                </div>

                <button className='Voltar' onClick={voltar}>Voltar</button>



            </div>
        </div>
    )



}