import { Component } from "@angular/core";

@Component({
  selector: "capture",
  template: `
    <survey
      [json]="json"
      mainColor="yellow"
      (submitSurvey)="sendData($event)"
    ></survey>
  `
})
export class ChangeStyling {
  json = {
    title: "Change Styling",
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

  sendData(result) {}
}
