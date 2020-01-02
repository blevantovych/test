import { Component } from "@angular/core";

@Component({
  selector: "only-one-answer",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
  `
  // styleUrls: ["./branching.component.css"]
})
export class OnlyOneAnswerComponent {
  title = "app works!";
  json = {
    title: "Ability to select only one (exactly 1) of the alternative answers",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            title: "Question",
            choices: ["Yes", "No", "Unknown"]
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
