import { EventCreateComponent } from './event-create.component';

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return confirm(`you haven't save the event. Are you sure to cancel?`);
  }
  return true;
}
