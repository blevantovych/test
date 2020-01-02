import { Component } from "@angular/core";

@Component({
  selector: "capture",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
    <pre *ngIf="results">{{ results | json }}</pre>
  `
  // styleUrls: ["./branching.component.css"]
})
export class CaptureRecordsComponent {
  results = null;
  title = "app works!";
  json = {
    title: "Ability to capture product line journal records.",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            title: "Is there a 5 element order (5EO) attached?",
            choices: [
              { value: "", text: "Yes" },
              {
                value: "There is no 5 element order attached, Review is needed",
                text: "No"
              }
            ]
          }
        ]
      }
    ]
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    this.results = result;
  }
}
