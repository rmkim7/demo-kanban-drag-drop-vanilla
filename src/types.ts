import { Dispatch, DragEvent, SetStateAction } from 'react';

export type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type ColumnType = 'backlog' | 'todo' | 'doing' | 'done';

export type CardProps = CardType & {
  handleDragStart: (e: DragEvent, card: CardType) => void;
};

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

export type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

export type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};
