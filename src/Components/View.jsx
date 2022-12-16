import React from "react";
// import { Icon } from "react-icons-kit";
// import { trash } from "react-icons-kit/feather/trash";

const View = ({ user, deleteUser }) => {
  return user.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.selector}</td>
      {/* <td className="delete-btn" onClick={() => deleteUser(user.id)}>
        <Icon icon={trash} />
      </td> */}
    </tr>
  ));
};

export default View;
