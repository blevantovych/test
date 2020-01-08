import { Component } from "@angular/core";

// <img
//   style="position: absolute; right: 10px; top: 10px; z-index: -1"
//   src="assets/Screenshot_1.png"
// />
// <div style="margin-top: 200px">
// </div>

@Component({
  selector: "multiple-questions",
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
export class MultipleQuestionsComponent {
  title = "app works!";
  results = null;
  questions = [
    {
      elements: [
        {
          type: "radiogroup",
          title: "Is there a 5 element order (5EO) attached?",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "q1"
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          title:
            "Is documentation attached supporting a treating practitioner has had a face to face encounter with the member within 6 months prior to signing the 5EO?",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "q2"
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          title:
            "Is the member enrolled in a clinical trial approved by CMS and sponsored by the National Heart, Lung, and Blood Institute?",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "q3"
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          title:
            "Does documentation being submitted support PO2 from 55-65 mm Hg or Oxygen Saturation >= 89%",
          choices: ["Yes", "No"],
          // isRequired: true,
          name: "q4",
          visibleIf: "{q3} = 'Yes'"
        }
      ]
    },
    {
      elements: [
        {
          type: "radiogroup",
          title:
            "Was the ABG/Oximetry performed as an inpatient hospital stay?",
          choices: ["Yes", "No"],
          // isRequired: true,
          name: "q5",
          visibleIf: "{q3} = 'No'"
        }
      ]
    }
  ];
  json = {
    showCompletedPage: false,

    title: `3. Ability to display more than one question at the time. It is a valid use
    case if all the questions (except the last one) do not trigger the
    branching logic.`,
    // showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            title: "Is there a 5 element order (5EO) attached?",
            choices: ["Yes", "No"],
            isRequired: true,
            name: "q1"
          },
          {
            type: "radiogroup",
            title:
              "Is documentation attached supporting a treating practitioner has had a face to face encounter with the member within 6 months prior to signing the 5EO?",
            choices: ["Yes", "No"],
            isRequired: true,
            name: "q2"
          },
          {
            type: "radiogroup",
            title:
              "Is the member enrolled in a clinical trial approved by CMS and sponsored by the National Heart, Lung, and Blood Institute?",
            choices: ["Yes", "No"],
            isRequired: true,
            name: "q3"
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            title:
              "Does documentation being submitted support PO2 from 55-65 mm Hg or Oxygen Saturation >= 89%",
            choices: ["Yes", "No"],
            // isRequired: true,
            name: "q4",
            visibleIf: "{q3} = 'Yes'"
          }
        ]
      },
      {
        elements: [
          {
            type: "radiogroup",
            title:
              "Was the ABG/Oximetry performed as an inpatient hospital stay?",
            choices: ["Yes", "No"],
            // isRequired: true,
            name: "q5",
            visibleIf: "{q3} = 'No'"
          }
        ]
      }
    ]
  };

  sendData(result) {
    this.results = Object.keys(result).map(name => {
      const question = this.questions.find(q => q.elements[0].name === name);
      console.log(question);
      return { question: question.elements[0].title, answer: result[name] };
    });
  }
}
