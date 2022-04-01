import React, { ReactElement } from "react";

enum TYPE {
  EDIT = "EDIT",
  DELETE = "DELETE",
}

const Icon: React.FC<{ children?: ReactElement; type?: TYPE }> = ({
  children,
  type,
}): ReactElement => {
  return <div className="inline-flex rounded">{children}</div>;
};

const Edit: React.FC<React.ComponentProps<typeof Icon>> = ({
  type = TYPE.EDIT,
  ...props
}): ReactElement => {
  return (
    <Icon type={type} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 30 30"
      >
        <path d="M22.828 3c-.512 0-1.023.195-1.414.586L19 6l5 5 2.414-2.414a2 2 0 000-2.828l-2.172-2.172A1.994 1.994 0 0022.828 3zM17 8L5.26 19.74s.918-.082 1.26.26c.342.342.06 2.58.48 3 .42.42 2.644.124 2.963.443.319.32.297 1.297.297 1.297L22 13l-5-5zM4 23l-.943 2.672A1 1 0 003 26a1 1 0 001 1 1 1 0 00.328-.057 1 1 0 00.01-.004l.025-.007a1 1 0 00.006-.004L7 26l-1.5-1.5L4 23z"></path>
      </svg>
    </Icon>
  );
};

const Delete: React.FC<React.ComponentProps<typeof Icon>> = ({
  type = TYPE.DELETE,
  ...props
}): ReactElement => {
  return (
    <Icon type={type} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 30 30"
      >
        <path d="M14.984 2.486A1 1 0 0014 3.5V4H8.5a1 1 0 00-1.014 1H6a1 1 0 100 2h18a1 1 0 100-2h-1.486A1 1 0 0021.5 4H16v-.5a1 1 0 00-1.016-1.014zM6 9l1.793 15.234A1.997 1.997 0 009.777 26h10.446a1.998 1.998 0 001.984-1.766L24 9H6z"></path>
      </svg>
    </Icon>
  );
};

const IconObject = Object.assign(Icon, { Edit, Delete });

export default IconObject;
