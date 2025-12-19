import { defineLdsButton } from './components/button/define';
import { defineLdsBadge } from './components/badge/define';
import { defineLdsInput } from './components/input/define';
import { defineLdsCard } from './components/card/define';
import { defineLdsModal } from './components/modal/define';

export function defineLdsComponents(): void {
  defineLdsButton();
  defineLdsBadge();
  defineLdsInput();
  defineLdsCard();
  defineLdsModal();
}

defineLdsComponents();
