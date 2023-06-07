import React from 'react'
import { BeneficiosContainer, CardsContainer, CardsInfo, InfoContainer } from './BeneficiosStyles'
import { SectionTitle } from '../UI/SectionTitle/SectionTitle'
import {FaMobileAlt, FaDollarSign, FaTruck} from "react-icons/fa"

const Beneficios = () => {
    return (
        <BeneficiosContainer>
            <SectionTitle>¡ENCONTRA TODO LO QUE BUSCAS AL MEJOR PRECIO!</SectionTitle>
            <p>Contamos con muchos beneficios para hacerte la vida más fácil!</p>
            <CardsContainer>
                <CardsInfo>
                    <FaMobileAlt style={{ fontSize: '45px', background: 'none' }} />
                    <InfoContainer>
                    <h3>Stock disponible 24hs</h3>
                    <p>
                        Entrando en nuestra tienda virtual vas a poder elegir el producto que vos quieras llevarte. En
                        caso de querer varios podés ir sumándolos a tu carrito y luego finalizar la compra.
                        </p>
                    </InfoContainer>
                </CardsInfo>

                <CardsInfo>
                    <FaDollarSign style={{ fontSize: '45px', background:'none' }} />
                    <InfoContainer>
                        <h3>Todos los medios de pago</h3>

                        <p>
                            Podés pagar con: Tarjetas de crédito/débito, Transferencia bancaria, Rapipago/Pago Fácil, y
                            muchas más opciones. Además, tenés 3,6 y hasta 12 cuotas sin interés.
                        </p>
                    </InfoContainer>
                </CardsInfo>

                <CardsInfo>
                    <FaTruck style={{ fontSize: '45px', background:'none'}} />
                    <InfoContainer>
                        <h3>Envios a todo el pais</h3>
                        <p>
                            Llegamos a todo el país. Elegí la forma de entrega que prefieras ¡y listo!. Aseguramos la entrega de tu pedido en tiempo y con los may ores cuidados.
                        </p>
                    </InfoContainer>
                </CardsInfo>

            </CardsContainer>
        </BeneficiosContainer>
    )
}

export default Beneficios
