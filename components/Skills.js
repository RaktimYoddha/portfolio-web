import { Zoom } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className="flex flex-col items-center mb-20 ml-11 pl-3 pr-6" id="skills">
      <div className='flex flex-col items-center justify-center mb-11'>
        <h1 className='project-heading text-3xl ml-5 mb-5'>Skills</h1>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
      <Zoom cascade delay={0}>

        <div>
          <ul className="skills-bar-container">
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>HTML5</h3>
                <span className="percent" id="html-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressred" id="progress-html"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>CSS | SASS</h3> 
                <span className="percent" id="css-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressblue" id="progress-css"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>JavaScript | jQuery</h3>
                <span className="percent" id="javascript-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progresspurple" id="progress-javascript"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Java</h3>
                <span className="percent" id="python-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressorange" id="progress-python"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>C++</h3>
                <span className="percent" id="c-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressgreen" id="progress-c"></span>
              </div>
            </li>
          </ul>
        </div>
        <div>
        <ul className="skills-bar-container">
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>ReactJs</h3>
                <span className="percent" id="html-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progresspurple" id="progress-react"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>NodeJS</h3>
                <span className="percent" id="css-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressgreen" id="progress-node"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>NextJs | Vite | Gatsby</h3>
                <span className="percent" id="javascript-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressorange" id="progress-reactnative"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Material UI | Bootstrap</h3>
                <span className="percent" id="python-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressred" id="progress-material"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Tailwind CSS</h3>
                <span className="percent" id="c-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressblue" id="progress-tailwind"></span>
              </div>
            </li>
          </ul>
        </div>
        <div>
        <ul className="skills-bar-container">
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Solidity</h3>
                <span className="percent" id="html-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progresspurple" id="progress-solidity"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>MongoDB | MySql</h3>
                <span className="percent" id="css-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressgreen" id="progress-mongo"></span>
              </div>
            </li>
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>ML | AI</h3>
                <span className="percent" id="javascript-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressorange" id="progress-mysql"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Git | Github</h3>
                <span className="percent" id="python-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressred" id="progress-git"></span>
              </div>
            </li>
            
            <li className="p-6 my-6">
              <div className="progressbar-title">
                <h3>Python</h3>
                <span className="percent" id="c-pourcent"></span>
              </div>
              <div className="bar-container">
                <span className="progressbar progressblue" id="progress-latex"></span>
              </div>
            </li>
          </ul>
        </div>
      </Zoom>
      </div>
    </div>
  )
}
