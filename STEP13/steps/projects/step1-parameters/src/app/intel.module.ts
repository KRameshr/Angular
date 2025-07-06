import { NgModule } from '@angular/core';
import { IntelComponent } from './intel.component';
import { IntelPipe } from './intel.pipe';
import { IntelDirective } from './intel.directive';

@NgModule({
  declarations: [IntelComponent, IntelPipe, IntelDirective],
  exports: [IntelComponent, IntelPipe, IntelDirective],
})
export class IntelModule {}
