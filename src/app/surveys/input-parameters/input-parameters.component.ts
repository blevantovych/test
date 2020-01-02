import { Component } from "@angular/core";

@Component({
  selector: "input-parameters",
  template: `
    <div *ngIf="!showSurvey" style="margin-left: 40px;">
      <h4>Input parameters (ICD-10)</h4>
      <input type="text" [(ngModel)]="foo" />
      <button (click)="showSurvey = true">Show survey</button>
    </div>
    <survey
      *ngIf="showSurvey"
      [inputParams]="{ foo: foo }"
      [json]="json"
      (submitSurvey)="sendData($event)"
    ></survey>
  `
  // styleUrls: ["./branching.component.css"]
})
export class InputParametersComponent {
  title = "app works!";
  showSurvey = false;
  json = {
    title: "Ability to take input parameters",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            title: "Input param: {foo} "
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
