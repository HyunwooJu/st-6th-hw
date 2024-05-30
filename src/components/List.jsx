import React from "react";

const List = React.memo(({ items }) => {
  console.log("리스트 컴포넌트 렌더링됨");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default List;
