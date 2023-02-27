import Table from "react-bootstrap/Table";

function ArchiveTable() {
  return (
    <Table hover>
      <thead>
        <tr>
          <th className="columnName">
            名称
            <br />
            Archive Name
          </th>
          <th className="columnUpdate">
            上次更新
            <br />
            Latest Update
          </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Day 1 - 基础的小测试</td>
          <td>Today</td>
        </tr>

      </tbody>
    </Table>
  );
}

export default ArchiveTable;