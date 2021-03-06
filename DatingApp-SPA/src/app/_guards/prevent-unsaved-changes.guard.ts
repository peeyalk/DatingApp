import { AlertifyService } from 'src/app/_services/alertify.service';
import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges
  implements CanDeactivate<MemberEditComponent> {
    constructor(private alertify: AlertifyService) {

    }
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty || !component.editForm.pristine) {
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost!');
    } else {
      return true;
    }
  }
}
