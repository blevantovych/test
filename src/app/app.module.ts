import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey.component";
import { SurveyCreatorComponent } from "./survey.creator.component";
import { SurveyAnalyticsComponent } from "./survey.analytics.component";
import { BranchingComponent } from "./surveys/branching/branching.component";
import { SingleQuestionComponent } from "./surveys/single-question/single-question.component";
import { MultipleQuestionsComponent } from "./surveys/multiple-questions/multiple-questions.component";
import { SpecificQuestionComponent } from "./surveys/specific-question/specific-question.component";
import { OnlyOneAnswerComponent } from "./surveys/only-one-answer/only-one-answer.component";
import { CaptureRecordsComponent } from "./surveys/capture-records/capture-records.component";
import { PredefinedConditionsComponent } from "./surveys/predefined-conditions/predefined-conditions.component";
import { InputParametersComponent } from "./surveys/input-parameters/input-parameters.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    SurveyAnalyticsComponent,
    BranchingComponent,
    SingleQuestionComponent,
    MultipleQuestionsComponent,
    SpecificQuestionComponent,
    OnlyOneAnswerComponent,
    CaptureRecordsComponent,
    PredefinedConditionsComponent,
    InputParametersComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
