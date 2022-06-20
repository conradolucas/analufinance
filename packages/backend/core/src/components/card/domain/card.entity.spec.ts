import { Card, CardProps } from './card.entity';
describe('Card Entity', () => {
  describe('Constructor', () => {
    describe('when the card entity is created', () => {
      let visaGold: Card;

      beforeAll(() => {
        const visaGoldProps: CardProps = {
          number: '123456',
          flag: 'visa',
          cvv: '123',
          since_at: '25/05/1997',
          valid_at: '27/07/2019',
          due_day: 15,
          closing_day: 10,
        };

        visaGold = new Card(visaGoldProps);
      });

      it('should return the card entity', async () => {
        expect(visaGold.card).toStrictEqual({
          id: visaGold.card.id,
          number: '123456',
          flag: 'visa',
          cvv: '123',
          since_at: '25/05/1997',
          valid_at: '27/07/2019',
          due_day: 15,
          closing_day: 10,
        });
      });
    });
  });

  describe('updateClosingDay', () => {
    let eloNanquim: Card;
    const defaultClosingDay = 10;

    beforeAll(() => {
      const eloNanquimProps: CardProps = {
        number: '123456',
        flag: 'visa',
        cvv: '123',
        since_at: '25/05/1997',
        valid_at: '27/07/2019',
        due_day: 15,
        closing_day: defaultClosingDay,
      };

      eloNanquim = new Card(eloNanquimProps);
    });

    describe('when updating the closing day contain a valid day', () => {
      beforeEach(() => {
        eloNanquim.updateClosingDay(31);
      });

      afterAll(() => {
        eloNanquim.updateClosingDay(defaultClosingDay);
      });

      it('should change the closing day', () => {
        expect(eloNanquim.closing_day).toBe(31);
      });
    });

    describe('when updating the closing day contain a invalid day', () => {
      const invalidDay = 32;

      it('should return a business error informing that the day is not valid', () => {
        expect(() => {
          eloNanquim.updateClosingDay(invalidDay);
        }).toThrow(`The day (${invalidDay}) is invalid, please informing a day 0-31`);
      });

      it('should not change the closing day', () => {
        expect(() => {
          eloNanquim.updateClosingDay(invalidDay);
        }).toThrow();
        expect(eloNanquim.closing_day).toBe(defaultClosingDay);
      });
    });
  });
});
