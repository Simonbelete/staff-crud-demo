import React, { ReactElement, useCallback, useState } from "react";
import { Button, Icon, Input } from "components";

const Staff: React.FC<{
  id?: number;
  name: string;
  age: string;
  email: string;
  onDelete: (id: number) => void;
}> = ({ id, name, age, email, onDelete }): ReactElement => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleOnDelete = useCallback(() => {
    onDelete(id || 0);
  }, [id, onDelete]);

  return (
    <div className="flex flex-row gap-3">
      {edit === true ? (
        <>
          <Input value={name} />
          <Input value={age} />
          <Input value={email} />
        </>
      ) : (
        <>
          <p>{id}</p>
          <p>{name}</p>
          <p>{age}</p>
          <p>{email}</p>
        </>
      )}
      <Button onClick={() => setEdit(!edit)}>
        <Icon.Edit />
      </Button>
      <Button onClick={handleOnDelete}>
        <Icon.Delete />
      </Button>
    </div>
  );
};

export default Staff;
