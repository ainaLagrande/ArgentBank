// React 
import { NavLink } from 'react-router-dom';
// Components 
import NavBar from '../Components/Nav';

export default function Error() {
    return (<main><NavBar />
    <div className="Error"> 
        <div className="error_box">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={'/'}>Retourner sur la page d'accueil</NavLink>
        </div>
    </div>
</main>)
}
