import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Button, Icon, Input } from "components";
import { Staff } from "types.d";

const StaffComponent: React.FC<{
  id?: number | string;
  name: string;
  age: string;
  email: string;
  onDelete: (id: number) => void;
  onUpdate?: (staff: Staff) => void;
}> = ({ id, name, age, email, onDelete, onUpdate }): ReactElement => {
  const [nName, setNName] = useState(name);
  const [nAge, setNAge] = useState(age);
  const [nEmail, setNEmail] = useState(email);

  const [edit, setEdit] = useState<boolean>(false);
  const handleOnDelete = useCallback(() => {
    onDelete(Number(id) || 0);
  }, [id, onDelete]);

  const handleOnUpdate = useCallback(() => {
    console.log(nName);
    if (onUpdate)
      onUpdate({
        id: Number(id),
        name: nName,
        age: Number(nAge),
        email: nEmail,
      });
    setEdit(false);
  }, [onUpdate, nName, nAge, nEmail, id]);

  return (
    <div className="grid grid-cols-12 gap-4">
      {edit === true ? (
        <>
          <p className="col-span-2">{id}</p>
          <Input
            value={nName}
            onChange={(e) => setNName(e.target.value)}
            className="col-span-2"
          />
          <Input
            value={nAge}
            onChange={(e) => setNAge(e.target.value)}
            className="col-span-2"
          />
          <Input
            value={nEmail}
            onChange={(e) => setNEmail(e.target.value)}
            className="col-span-3"
          />
        </>
      ) : (
        <>
          <p className="col-span-2">{id}</p>
          <p className="col-span-2">{name}</p>
          <p className="col-span-2">{age}</p>
          <p className="col-span-3">{email}</p>
        </>
      )}
      {edit === true ? (
        <>
          <Button onClick={handleOnUpdate}>
            <Icon.Plus />
          </Button>
          <Button onClick={() => setEdit(!edit)} className="col-span-1">
            <Icon.Close />
          </Button>
        </>
      ) : (
        <Button onClick={() => setEdit(!edit)} className="col-span-1">
          <Icon.Edit />
        </Button>
      )}

      <Button onClick={handleOnDelete} className="col-span-1">
        <Icon.Delete />
      </Button>
    </div>
  );
};

export default StaffComponent;
