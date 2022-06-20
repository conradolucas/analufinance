import { Card, CardProps } from './card.entity';
describe('Card Entity', () => {
  describe('Constructor', () => {
    describe('when the card entity is created', () => {
      let visaGold: Card;

      beforeAll(() => {
        const cardProps: CardProps = {
          number: '123456',
          flag: 'visa',
          cvv: '123',
          since_at: '25/05/1997',
          valid_at: '27/07/2019',
          due_day: '15',
          closing_day: '10',
        };

        visaGold = new Card(cardProps);
      });

      it('should return the card entity', async () => {
        expect(visaGold.card).toStrictEqual({
          id: visaGold.card.id,
          number: '123456',
          flag: 'visa',
          cvv: '123',
          since_at: '25/05/1997',
          valid_at: '27/07/2019',
          due_day: '15',
          closing_day: '10',
        });
      });
    });
  });
});
