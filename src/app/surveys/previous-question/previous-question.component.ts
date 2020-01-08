import { Component } from "@angular/core";

@Component({
  selector: "previous-question",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
    <div style="margin-left: 130px">
      <div *ngFor="let r of results">
        <h5 class="sv-title sv-question-title" style="font-size: 20px">
          {{ r.question }}
        </h5>
        <p style="font-size: 15px">{{ r.answer }}</p>
      </div>
    </div>
  `
  // <pre *ngIf="results">{{ results | json }}</pre>
})
export class PreviousQuestionComponent {
  results = null;

  questions = [
    {
      elements: [
        {
          type: "radiogroup",
          name: "q1",
          title:
            "Was the ABG/Oximetry performed as an inpatient hospital stay?",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "q2",
          title:
            "Was the ABG/Oximetry test preformed by IDTF/Qualifying medical personnel?",
          visibleIf: "{q1} = 'No'",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "q3",
          title:
            "Was the ABG/Oximetry test done within 2 days prior to discharge?",
          visibleIf: "{q1} = 'Yes'",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    }
  ];
  json = {
    completedHtml: "",
    showCompletedPage: false,
    title: "4. Ability to move back to the previous question (1 step back)",
    showProgressBar: "top",
    pages: this.questions
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    this.results = Object.keys(result).map(name => {
      const question = this.questions.find(q => q.elements[0].name === name);
      console.log(question);
      return { question: question.elements[0].title, answer: result[name] };
    });
  }
}
