import { Component } from "@angular/core";

const questions = [
  {
    elements: [
      {
        name: "q1",
        type: "radiogroup",
        title:
          "Was the face to face clinical re-evaluation done after the 60th day from the initiation of the E0470, E0471 or E0472?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value:
              "Face to Face clinical re-eval NOT done after 60th day after initiation of the E0470, E0471 or E0472, Review is needed",
            text: "No"
          },
          {
            value: "Information unknown, Review is needed",
            text: "Unknown"
          }
        ]
      }
    ]
  },
  {
    elements: [
      {
        name: "q2",
        type: "radiogroup",
        title:
          "Is there documentation in the member's medical record about the progression of relevant symptoms and the member's usage of the device up to this time?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value:
              "NO documentation in member's medical record about progress of relevant symptoms and member's device usage up to this time, Review is needed",
            text: "No"
          },
          {
            value: "Information unknown, Review is needed",
            text: "Unknown"
          }
        ]
      }
    ]
  },
  {
    elements: [
      {
        name: "q3",
        type: "radiogroup",
        title: "Do you have a copy of the compliance study?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value: "No copy of compliance study on file, Review is needed",
            text: "No"
          }
        ]
      }
    ]
  },
  {
    elements: [
      {
        name: "q4",
        type: "radiogroup",
        title:
          "Was the compliance study reviewed by the treating practitioner?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value:
              "Compliance study no reviewed by treating practitioner, Review is needed",
            text: "No"
          },
          {
            value: "Information unknown, Review is needed",
            text: "Unknown"
          }
        ]
      }
    ]
  },
  {
    elements: [
      {
        name: "q5",
        type: "radiogroup",
        title:
          "Does the compliance study show adherence to therapy as defined as use of Respiratory Assist Device (RAD) >= 4 hours per 24 hour period by the time of the re-evaluation?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value:
              "compliance study does not show adherence to therapy as defined as use of RAD >= 4hrs/24 hour period by time of re-evaluation, Review is needed",
            text: "No"
          },
          {
            value: "Information unknown, Review is needed",
            text: "Unknown"
          }
        ]
      }
    ]
  },
  {
    elements: [
      {
        name: "q6",
        type: "radiogroup",
        title:
          "Do you have a signed and dated statement completed by the treating physician no sooner than 61 days after initiating use of the device, stating member is compliant with device is benefiting from its use?",
        choices: [
          {
            value: "",
            text: "Yes"
          },
          {
            value:
              "A signed and dated statement by the treating physician no sooner than 61 days, declaring the member is compliantly using the device and the member is benefiting from its use, is NOT on file, Review is needed",
            text: "No"
          },
          {
            value: "Information unknown, Review is needed",
            text: "Unknown"
          }
        ]
      }
    ]
  }
];

// <ul style="font-size: 20px">
// <li *ngFor="let note of notes">{{ note }}</li>
// </ul>
@Component({
  selector: "capture",
  template: `
    <survey
      [json]="json"
      (submitSurvey)="sendData($event)"
      (onNextPage)="onNextPage($event)"
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
})
export class CaptureRecordsComponent {
  results = null;
  notes = [];
  onNextPage(result) {
    this.notes = Object.values(result.data);
    console.log(result);
  }
  // E0470-E0471 PAP - RAD Continued Coverage WF.pdf
  json = {
    showCompletedPage: false,
    title: "7. Ability to capture product line journal records.",
    pages: questions
  };

  ngOnInit() {
    console.log(this.json.pages);
  }

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    this.results = Object.keys(result).map(name => {
      const question = questions.find(q => q.elements[0].name === name);
      console.log(question);
      return { question: question.elements[0].title, answer: result[name] };
    });
  }
}
