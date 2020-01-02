import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SurveyComponent } from "./survey.component";
import { BranchingComponent } from "./surveys/branching/branching.component";
import { SingleQuestionComponent } from "./surveys/single-question/single-question.component";
import { MultipleQuestionsComponent } from "./surveys/multiple-questions/multiple-questions.component";
import { SpecificQuestionComponent } from "./surveys/specific-question/specific-question.component";
import { OnlyOneAnswerComponent } from "./surveys/only-one-answer/only-one-answer.component";
import { CaptureRecordsComponent } from "./surveys/capture-records/capture-records.component";
import { PredefinedConditionsComponent } from "./surveys/predefined-conditions/predefined-conditions.component";
import { InputParametersComponent } from "./surveys/input-parameters/input-parameters.component";

const routes: Routes = [
  // { path: "survey", component: SurveyComponent },
  { path: "branching", component: BranchingComponent },
  { path: "single-question", component: SingleQuestionComponent },
  { path: "multiple-questions", component: MultipleQuestionsComponent },
  { path: "specific-question", component: SpecificQuestionComponent },
  { path: "only-one-answer", component: OnlyOneAnswerComponent },
  { path: "capture-records", component: CaptureRecordsComponent },
  { path: "predefined-conditions", component: PredefinedConditionsComponent },
  { path: "input-parameters", component: InputParametersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
