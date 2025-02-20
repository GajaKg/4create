import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
// import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { UsersTableComponent } from './users/components/users/users-table/users-table.component';
import { AddUserComponent } from './users/components/users/add-user/add-user.component';
import { ModalComponent } from './shared/UI/modal/modal.component';
import { UsersComponent } from './users/components/users/users.component';
// import { UsernameValidatorDirective } from './users/validators/username.validator';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    AddUserComponent,
    ModalComponent,
    UsersComponent,
    // UsernameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
