import crypto from 'crypto';

export type CardProps = {
  id?: string;
  number: string;
  flag: string;
  cvv: string;
  since_at: string;
  valid_at: string;
  due_day: string;
  closing_day: string;
};
export class Card {
  public readonly id: string;
  public card: CardProps;

  constructor(card: CardProps) {
    this.card = {
      id: crypto.randomUUID(),
      ...card,
    };
  }
}
