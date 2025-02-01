
import { Fragment } from 'react';
import { About } from './Components/About';
import Head from './Components/Head';
import { Main } from './Components/Main';
import Skills from './Components/Skill';
import Resume from './Components/Resume';
import { Project } from './Components/Project';
import Certfation from './Components/Certfation';


const App = (props) => {
    return (
        <Fragment>
            <Head />
            <Main />
            <About />
            <Skills />
            <Resume />
            <Project/>
            <Certfation/>
            
            
            



        </Fragment>
    );
};

export default App;
