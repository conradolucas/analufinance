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

  describe('updateDueDay', () => {
    let eloNanquim: Card;
    const defaultDueDay = 10;

    beforeAll(() => {
      const eloNanquimProps: CardProps = {
        number: '123456',
        flag: 'eloNanquim',
        cvv: '123',
        since_at: '25/05/1997',
        valid_at: '27/07/2019',
        due_day: 15,
        closing_day: defaultDueDay,
      };

      eloNanquim = new Card(eloNanquimProps);
    });

    describe('when updating the due day contain a valid day', () => {
      beforeEach(() => {
        eloNanquim.updateDueDay(31);
      });

      afterAll(() => {
        eloNanquim.updateDueDay(defaultDueDay);
      });

      it('should change the due day', () => {
        expect(eloNanquim.due_day).toBe(31);
      });
    });

    describe('when updating the due day contain a invalid day', () => {
      const maxDay = 31;
      const minDay = 1;

      describe('when updating the due day contain a day that more than max day', () => {
        const invalidDayMax = maxDay + 1;

        it('should return a business error informing that the day is not valid', () => {
          expect(() => {
            eloNanquim.updateDueDay(invalidDayMax);
          }).toThrow(`The day (${invalidDayMax}) is invalid, please informing a day 1-31`);
        });
      });

      describe('when updating the due day contain a day that smaller than min day', () => {
        const invalidDayMin = minDay - 1;

        it('should return a business error informing that the day is not valid', () => {
          expect(() => {
            eloNanquim.updateDueDay(invalidDayMin);
          }).toThrow(`The day (${invalidDayMin}) is invalid, please informing a day 1-31`);
        });
      });

      it('should not change the due day', () => {
        expect(() => {
          eloNanquim.updateDueDay(0);
        }).toThrow();
        expect(eloNanquim.due_day).toBe(defaultDueDay);
      });
    });
  });

  describe('updateClosingDay', () => {
    let eloNanquim: Card;
    const defaultClosingDay = 10;

    beforeAll(() => {
      const eloNanquimProps: CardProps = {
        number: '123456',
        flag: 'eloNanquim',
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
      const maxDay = 31;
      const minDay = 1;

      describe('when updating the closing day contain a day that more than max day', () => {
        const invalidDayMax = maxDay + 1;

        it('should return a business error informing that the day is not valid', () => {
          expect(() => {
            eloNanquim.updateClosingDay(invalidDayMax);
          }).toThrow(`The day (${invalidDayMax}) is invalid, please informing a day 1-31`);
        });
      });

      describe('when updating the closing day contain a day that smaller than min day', () => {
        const invalidDayMin = minDay - 1;

        it('should return a business error informing that the day is not valid', () => {
          expect(() => {
            eloNanquim.updateClosingDay(invalidDayMin);
          }).toThrow(`The day (${invalidDayMin}) is invalid, please informing a day 1-31`);
        });
      });

      it('should not change the closing day', () => {
        expect(() => {
          eloNanquim.updateClosingDay(0);
        }).toThrow();
        expect(eloNanquim.closing_day).toBe(defaultClosingDay);
      });
    });
  });

  describe('toJSON', () => {
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

    it('should return object with properties of card entity', async () => {
      expect(visaGold.toJSON()).toStrictEqual({
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
