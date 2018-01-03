import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from 'app/authentication/authentication.component';
import { CardsComponent } from 'app/cards/cards.component';
import { EntryComponent } from 'app/entry/entry.component';
import { SummaryComponent } from 'app/summary/summary.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { HelpComponent } from 'app/help/help.component';
import { AboutComponent } from 'app/about/about.component';
import { ErrorsComponent } from 'app/errors/errors.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'home', component: CardsComponent },
  { path: 'home/:view', component: CardsComponent },
  { path: 'entry/:id', component: EntryComponent },
  { path: 'summary/:id/:type', component: SummaryComponent },
  { path: 'entry/:id/section/:section_id/item/:item_id', component: EntryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
