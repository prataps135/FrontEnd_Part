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
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import { User1Component } from './components/users/user1/user1.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponent } from './components/hello/hello.component';
import { CounterActionComponent } from './components/bindings/counter-action/counter-action.component';
import { TwoWayCounterComponent } from './components/bindings/two-way-counter/two-way-counter.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';

@NgModule({
  // Declarations only accept component pipe and directives
  declarations: [
    
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    User1Component,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HelloComponent,
    CounterActionComponent,
    TwoWayCounterComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    // HeaderComponent
    // CoreModule
    // User
    // UserService
  ],
  imports: [
    FormsModule,
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
