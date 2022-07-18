import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GradientLineComponent } from './gradient-line/gradient-line.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GradientLineComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, SharedRoutingModule],
  exports: [NavigationComponent, FooterComponent, GradientLineComponent],
})
export class SharedModule {}
