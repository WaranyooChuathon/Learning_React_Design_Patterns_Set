import type { ComponentType } from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: ComponentType<any>;
}

export const RegularList = <T,>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps<T>) => (
  <>
    {items.map((item, i) => (
      <ItemComponent key={i} {...{ [resourceName]: item }} />
    ))}
  </>
);