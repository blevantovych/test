import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import * as Survey from "survey-angular";
// import * as widgets from "surveyjs-widgets";
// import * as SurveyPDF from "survey-pdf";
// import "inputmask/dist/inputmask/phone-codes/phone.js";

// widgets.icheck(Survey);
// widgets.select2(Survey);
// widgets.inputmask(Survey);
// widgets.jquerybarrating(Survey);
// widgets.jqueryuidatepicker(Survey);
// widgets.nouislider(Survey);
// widgets.select2tagbox(Survey);
// widgets.signaturepad(Survey);
// widgets.sortablejs(Survey);
// widgets.ckeditor(Survey);
// widgets.autocomplete(Survey);
// widgets.bootstrapslider(Survey);
// widgets.prettycheckbox(Survey);
//widgets.emotionsratings(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");
console.log(Survey.StylesManager.ThemeColors);
var defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#E87E37";
defaultThemeColors["$main-hover-color"] = "#f1b287";
Survey.StylesManager.applyTheme("modern");

@Component({
  // tslint:disable-next-line:component-selector
  selector: "survey",
  template: `
    <div class="survey-container contentcontainer codecontainer">
      <div id="surveyElement"></div>
    </div>
  `
})
export class SurveyComponent implements OnInit, OnChanges {
  @Output() submitSurvey = new EventEmitter<any>();
  @Output() onNextPage = new EventEmitter<any>();
  @Input() inputParams;
  @Input() page;
  @Input() mainColor;
  @Input() json: object;
  result: any;
  surveyModel;
  ngOnChanges(changes: SimpleChanges) {
    if (this.surveyModel)
      this.surveyModel.currentPageNo = changes.page.currentValue - 1;
  }

  ngOnInit() {
    this.surveyModel = new Survey.Model(this.json);
    this.surveyModel.data = this.inputParams;
    this.surveyModel.sendResultOnPageNext = true;

    this.surveyModel.currentPageNo = this.page - 1;
    this.surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) {
        return;
      }
      // Add a button;
      const btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      btn.onclick = function() {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector("h5");
      const span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });
    this.surveyModel.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
    this.surveyModel.onPartialSend.add(result => {
      this.onNextPage.emit(result);
    });
    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });
  }
  savePDF() {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10
      }
    };
    // const surveyPDF = new SurveyPDF.SurveyPDF(this.json, options);
    // console.log(this.result);
    // surveyPDF.data = this.result;
    // surveyPDF.save("survey PDF example");
  }
}
