import { useContext } from "react";
import { Collapse } from "@chakra-ui/react";

import MenuContext from "./MenuContext";

interface MenuListProps {
  children: React.ReactNode;
};

export function MenuList({ children }: MenuListProps) {
  const { isOpen } = useContext(MenuContext)

  return (
    <Collapse in={isOpen}>
      {children}
    </Collapse>
  )
}
