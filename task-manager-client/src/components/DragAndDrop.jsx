import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM';

const DraggableItem = ({ id, children, moveItem, findItem }) => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { id },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      const dragIndex = findItem(item.id).index;
      const hoverIndex = findItem(id).index;

      if (dragIndex === hoverIndex) return;
      moveItem(item.id, id);
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ margin: '8px', padding: '8px', background: 'lightgray' }}>
      {children}
    </div>
  );
};

const DragAndDrop = ({ items, moveItem, findItem }) => (
  <div>
    {items.map((item, index) => (
      <DraggableItem key={item.id} id={item.id} moveItem={moveItem} findItem={findItem}>
        {item.text}
      </DraggableItem>
    ))}
  </div>
);

export default DragAndDrop;
