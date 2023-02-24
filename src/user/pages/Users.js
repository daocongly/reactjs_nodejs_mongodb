import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Bao Ngoc",
      image:
        "https://product.hstatic.net/1000122386/product/gw-b5600sgm-1dr_3f5e9fed1e32481f82407ddbc4cab423_master.png",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
