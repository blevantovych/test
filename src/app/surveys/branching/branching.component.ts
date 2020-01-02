import { Component } from "@angular/core";

@Component({
  selector: "branching",
  template: `
    <survey [json]="json" (submitSurvey)="sendData($event)"></survey>
  `,
  styleUrls: ["./branching.component.css"]
})
export class BranchingComponent {
  title = "app works!";
  json = {
    title:
      "Support of branching logic (if-then) dependent on the option (answer) user selects",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "q1",
            title: "Question title",
            choices: ["Yes", "No"]
          }
        ]
      },
      {
        elements: [
          {
            type: "text",
            name: "q2",
            title: "Yes question",
            visibleIf: "{q1} = 'Yes'"
          }
        ]
      },
      {
        elements: [
          {
            type: "text",
            name: "q3",
            title: "No question",
            visibleIf: "{q1} = 'No'"
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
