import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

type MenuContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const MenuContext = createContext({} as MenuContextType)

interface MenuContextProps {
  children: React.ReactNode;
};

export function MenuProvider({ children }: MenuContextProps) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return (
    <MenuContext.Provider value={{ isOpen, onOpen, onClose, onToggle }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext