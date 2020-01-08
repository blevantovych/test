import { Component } from "@angular/core";

const questions = [
  {
    elements: [
      {
        name: "q1",
        type: "radiogroup",
        choices: [
          { text: "Yes", value: "" },
          {
            text: "No",
            value: "There is no 5 element order attached, Review is needed"
          }
        ],
        title: "Is there a 5 element order (5EO) attached?",
        visibleIf: "{hcpcs_code} anyof ['E0424', 'E0439']"
      }
    ]
  },
  {
    elements: [
      {
        name: "q3",
        type: "radiogroup",
        choices: [
          { text: "Yes", value: "" },
          {
            text: "No",
            value:
              "There is no documentation of a face to face encounter within 6 months prior to 5 element order, Review is needed"
          }
        ],
        title:
          "Is documentation attached supporting a treating practitioner has had a face to face encounter with the member within 6 months prior to signing the 5EO?",
        visibleIf: "{hcpcs_code} anyof ['E0424', 'E0439']"
      }
    ]
  },
  {
    elements: [
      {
        name: "q2",
        type: "radiogroup",
        choices: [
          { text: "Yes", value: "" },
          {
            text: "No",
            value:
              "There is no written or verbal order attached, Review is needed"
          }
        ],
        title:
          "Is there a written or verbal order from the treating physician attached that includes a description of the item, the member's name, the physician's name, and the start date of the order?",
        visibleIf: "{hcpcs_code} anyof ['E1390', 'E1391', 'E1405', 'E1406']"
      }
    ]
  }
];

//<input type="text" [(ngModel)]="icd" />
@Component({
  selector: "input-parameters",
  template: `
    <div *ngIf="!showSurvey" style="margin-left: 40px;">
      <h4>Select HCPCS code</h4>
      <select [(ngModel)]="hcpcs_code">
        <option value="E0424">E0424</option>
        <option value="E0439">E0439</option>
        <option value="E1390">E1390</option>
        <option value="E1391">E1391</option>
        <option value="E1405">E1405</option>
        <option value="E1406">E1406</option>
      </select>
      <button style="margin-left: 10px" (click)="showSurvey = true">
        Show survey
      </button>
    </div>
    <div style="margin-left: 40px;">
      <h4 *ngIf="showSurvey">Selected HCPCS code: {{ hcpcs_code }}</h4>
      <button *ngIf="showSurvey" (click)="showSurvey = false; results = null">
        Select another HCPCS code
      </button>
    </div>
    <survey
      *ngIf="showSurvey"
      [inputParams]="{ hcpcs_code: hcpcs_code }"
      [json]="json"
      (submitSurvey)="sendData($event)"
    ></survey>
    <div style="margin-left: 130px">
      <div *ngFor="let r of results">
        <h5 class="sv-title sv-question-title" style="font-size: 20px">
          {{ r.question }}
        </h5>
        <p
          style="font-size: 15px; width: 200px; color: black; border: 2px solid red; background: #ccc; padding: 10px; display: inline-block"
        >
          {{ r.answer }}
        </p>
      </div>
    </div>
  `
  // styleUrls: ["./branching.component.css"]
})
export class InputParametersComponent {
  results = null;
  showSurvey = false;
  json = {
    showCompletedPage: false,
    title: "9. Ability to take input parameters",
    showProgressBar: "top",
    pages: questions
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    console.log(result);
    this.results = Object.keys(result)
      .filter(name => name !== "hcpcs_code")
      .map(name => {
        const question = questions.find(q => q.elements[0].name === name);
        console.log(question);
        return { question: question.elements[0].title, answer: result[name] };
      });
    console.log(this.results);
  }
}
