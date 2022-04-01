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
    <div className="grid grid-cols-12 gap-4">
      {edit === true ? (
        <>
          <p className="col-span-2">{id}</p>
          <Input value={name} className="col-span-2" />
          <Input value={age} className="col-span-2" />
          <Input value={email} className="col-span-2" />
        </>
      ) : (
        <>
          <p className="col-span-2">{id}</p>
          <p className="col-span-2">{name}</p>
          <p className="col-span-2">{age}</p>
          <p className="col-span-2">{email}</p>
        </>
      )}
      <Button onClick={() => setEdit(!edit)} className="col-span-1">
        <Icon.Edit />
      </Button>
      <Button onClick={handleOnDelete} className="col-span-1">
        <Icon.Delete />
      </Button>
    </div>
  );
};

export default Staff;
