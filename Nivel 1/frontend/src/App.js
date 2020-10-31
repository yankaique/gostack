import React,{useState} from 'react';
import Header from './components/Header'
import './app.css'
import backgroundImage from './assets/background.jpg'

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'desenvolvimento web'])

    function handleAddProject(){
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return( 
    <> 
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <img width={300} src={backgroundImage} />
        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    )
};

export default App;