import { Component } from "@angular/core";

@Component({
  selector: "multiple-questions",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
  `
  // styleUrls: ["./branching.component.css"]
})
export class MultipleQuestionsComponent {
  title = "app works!";
  json = {
    title: `Ability to display more than one question at the time. It is a valid use
    case if all the questions (except the last one) do not trigger the
    branching logic.`,
    // showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            title: "question 1"
          },
          {
            type: "text",
            title: "question 2"
          }
        ]
      }
    ]
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    //TODO update with your own behavior
    console.log(result);
  }
}
