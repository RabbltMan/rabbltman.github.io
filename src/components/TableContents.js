import ArchiveTableContent from "./TableContent";
import { useSelector } from "react-redux";
import React from "react";

function TableContents() {
  const item = useSelector((state) => state.table.details);
  console.log(item);
  let Contents = item.map((content) => (
    <ArchiveTableContent
      itemName={content.itemName}
      updateTime={content.updateTime}
    />
  ));

  return Contents;
}

export default TableContents;
