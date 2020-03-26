import React, { useState } from "react";
import { Input, Button, List } from "antd";
import { FlexCenter } from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/actions/UserAction";
import { AppState } from "../store";

export default () => {
  const [user, setUser] = useState<any>({
    name: "",
    email: ""
  });

  const dispatch = useDispatch();

  const userList = useSelector((state: AppState) => state.UserReducer);

  return (
    <FlexCenter>
      <Input
        type="text"
        style={{ width: 200, margin: 10 }}
        placeholder="name"
        value={user.name}
        onChange={e =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />
      <Input
        type="text"
        style={{ width: 200, margin: 10 }}
        placeholder="email"
        value={user.email}
        onChange={e =>
          setUser({
            ...user,
            email: e.target.value
          })
        }
      />
      <Button
        htmlType="submit"
        type="primary"
        onClick={() => dispatch(addUser(user))}
      >
        Submit
      </Button>

      <List
        bordered
        style={{ margin: 20, minWidth: 200 }}
        dataSource={userList}
        renderItem={(item: any) => (
          <List.Item>
            {item && item.name} | {item && item.email}
          </List.Item>
        )}
      />
    </FlexCenter>
  );
};
