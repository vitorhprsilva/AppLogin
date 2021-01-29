import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { LembrasComponent } from './Interacao/lembras/lembras.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LembrasComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    LoginService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
