import crypto from 'crypto';

export type CardProps = {
  id?: string;
  number: string;
  flag: string;
  cvv: string;
  since_at: string;
  valid_at: string;
  due_day: number;
  closing_day: number;
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

  updateClosingDay(newClosingDay: number) {
    const MAX_DAYS_ON_MONTH = 31;
    if (newClosingDay > MAX_DAYS_ON_MONTH)
      throw new Error(`The day (${newClosingDay}) is invalid, please informing a day 0-31`);

    this.closing_day = newClosingDay;
  }

  get closing_day() {
    return this.card.closing_day;
  }

  private set closing_day(value: number) {
    this.card.closing_day = value;
  }
}
