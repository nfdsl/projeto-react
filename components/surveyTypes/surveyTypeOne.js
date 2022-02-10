import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from '../surveys/question1';

const Mysurvey = (prop) => {
    Survey.Serializer.addProperty("question", "score:number");
    Survey.Serializer.addProperty("itemvalue", "score:number");
    var modelo = new Survey.Model(Json);
    var totalScore = 0;
    modelo.onComplete
    .add(function (survey) {
       var data = survey.data;
       Object.keys(data).forEach(function(qName) {
          var question = survey.getQuestionByName(qName);
          var qValue = data[qName];
          
          if (question.choices) {
            question.choices.forEach(function(choice) {
              if (choice.value === qValue) {
                totalScore += +choice.score;
              }
            });
          } else {
            totalScore += +question.score;
          }
        });
        survey.Score=totalScore
    });
    var vat = <Survey.Survey
            model={modelo}
            Score={totalScore}
            onComplete = {data =>prop.showCompletedPage(data)}
        />
        return (vat)

}



export default Mysurvey;