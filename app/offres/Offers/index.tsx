import { FC } from "react";

type Props = {
  filter?: {
    key: string;
  };
};

const Offers: FC<Props> = async ({ filter }) => {
  console.info(filter?.key);
  return null;
};

export default Offers;
