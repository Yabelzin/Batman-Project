import	React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContext';

function Profile() {

    const {login, premium} = useContext(UserContext)

    return (
        <div>
            <div>
                {login ? 'Dados do usuário:' : 'Faça o seu login para ter acesso as informações.'}
            </div>
            <div>
                {login ? <div><li>Nome:</li><li>Idade:</li><li>Endereço:</li></div> : <li>Usuário deslogado</li>}
                {premium ? 'Vatagens premium' : 'Adquirir premium para ter vantagens'}
            </div>
        </div>
        
    )
}

export default Profile;