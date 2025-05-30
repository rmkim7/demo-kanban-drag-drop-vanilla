import { useEffect, useState } from 'react';

import { CardType } from '../types';
import { Column } from './column';
import { DeleteCard } from './delete-card';

export const Board = () => {
  const [cards, setCards] = useState<CardType[]>(() => {
    const cardData = localStorage.getItem('cards');
    return cardData ? JSON.parse(cardData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <DeleteCard setCards={setCards} />
    </div>
  );
};
