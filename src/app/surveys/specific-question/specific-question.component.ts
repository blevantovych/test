import { Component } from "@angular/core";

@Component({
  selector: "specific-question",
  template: `
    <h4>go to page</h4>
    <button (click)="this.page = 1">1</button>
    <button (click)="this.page = 2">2</button>
    <button (click)="this.page = 3">3</button>
    <button (click)="this.page = 4">4</button>
    <survey
      [page]="page"
      [json]="json"
      (submitSurvey)="sendData($event)"
    ></survey>
  `
  // styleUrls: ["./branching.component.css"]
})
export class SpecificQuestionComponent {
  page = 3;
  json = {
    title: `Ability to go directly to some specific question. If the new answer
      changes the further workflow, the answers and product line journal records
      should be cleaned up.`,
    showProgressBar: "top",

    pages: [
      {
        elements: [
          {
            type: "boolean",
            name: "question1",
            title: "question 1"
          }
        ]
      },
      {
        elements: [
          {
            type: "boolean",
            name: "question2",
            title: "question 2"
          }
        ]
      },
      {
        elements: [
          {
            type: "boolean",
            name: "question3",
            title: "question 3"
          }
        ]
      },
      {
        elements: [
          {
            type: "boolean",
            name: "question4",
            title: "question 4"
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
