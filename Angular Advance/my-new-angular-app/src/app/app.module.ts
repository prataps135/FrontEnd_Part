import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipe/safe/safe.pipe';
import { CoreModule } from './core/core.module';
import { User } from './model/user';
import { UserService } from './user/user.service';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  // Declarations only accept component pipe and directives
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    // HeaderComponent
    // CoreModule
    // User
    // UserService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  exports:[],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent,UserComponent]
})
export class AppModule { }
