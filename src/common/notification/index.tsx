import { notification } from "antd";

export const pushNotification = (
  mesage: string,
  description: string,
  type: string
) => {
  if (type === "success")
    notification["success"]({
      message: `${mesage}`,
      description: `${description}`,
      placement: "topRight",
    });
  else {
    if (type === "info")
      notification["info"]({
        message: `${mesage}`,
        description: `${description}`,
        placement: "topRight",
      });
    else
      notification["error"]({
        message: `${mesage}`,
        description: `${description}`,
        placement: "topRight",
      });
  }
};
