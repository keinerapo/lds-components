import { createDefiner } from '../../foundation/create-definer';

export const defineLdsCard = createDefiner(
  'lds-card',
  () => import('./lds-card'),
);
