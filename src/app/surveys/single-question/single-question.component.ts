import { Component } from "@angular/core";

@Component({
  selector: "capture",
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
  // styleUrls: ["./branching.component.css"]
})
export class SingleQuestionComponent {
  results = null;
  questions = [
    {
      elements: [
        {
          type: "radiogroup",
          name: "q1",
          title:
            "Does qualifying documentation being submitted supports Group I PO2 <= 55 mm Hg or Oxygen Saturation <= 88% at rest",
          choices: ["Yes", "No"],
          isRequired: true
        }
      ]
    }
    // {
    //   elements: [
    //     {
    //       type: "text",
    //       title: "question 2"
    //     }
    //   ]
    // }
  ];
  json = {
    showCompletedPage: false,
    title: "2. Ability to display single question at the time",
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
