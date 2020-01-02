import { Component } from "@angular/core";

@Component({
  selector: "capture",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
  `
  // styleUrls: ["./branching.component.css"]
})
export class SingleQuestionComponent {
  title = "app works!";
  json = {
    title: "Ability to display single question at the time",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            title: "question 1"
          }
        ]
      },
      {
        elements: [
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
