import React from "react";

class ArchiveTableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>
            <a href="https://www.baidu.com" rel="noreferrer" target="_blank">{this.props.itemName}</a>
          </td>
          <td>{this.props.updateTime}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default ArchiveTableContent;
