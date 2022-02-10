import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveyTypeOne'

const SurveyOne = () => {
    const [showPage, setShowPage] = useState(true);
    const [text, setText] = useState("pontução");
    
    const onCompletePage = useCallback((data) => {
        console.log(data);
        console.log(data.Score)
        setShowPage(!showPage)
        setText(data.Score)
    }, [showPage]
    
    )

    const setFinalPage = () => {
       
        return(
        <><head>
                <link rel="stylesheet" href="src/components/surveyDisplay/display1.css" />
                <title>Projeto Web</title>
            </head>
            <body>
                    <div class="container">
                        <header id="home">
                            <div class="img-cover">

                            </div>
                            <div class="banner">
                                <h1>Obridago Por sua atenção, sua pontuação foi {text}.</h1>
                                <p>Natan Frederico Da Silva Lima</p>
                                <button><a href="#Saiba mais">Saiba mais</a></button>
                            </div>
                        </header>
                    </div>
                </body></>
        )
        
        
    }

    return (
        <div className = "App">
            {
            showPage?
            <MySurvey  showCompletedPage={data=>onCompletePage(data)} />:
            setFinalPage()
            }
        </div>
        
        
    )
}
export default SurveyOne