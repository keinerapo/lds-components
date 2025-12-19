import { createDefiner } from '../../foundation/create-definer';

export const defineLdsModal = createDefiner(
  'lds-modal',
  () => import('./lds-modal'),
);
