import React from "react";

class ArchiveTableContent extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemName}</td>
        <td>{this.props.updateTime}</td>
      </tr>
    );
  }
}

export default ArchiveTableContent;
