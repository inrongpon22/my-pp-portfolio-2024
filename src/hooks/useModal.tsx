import { createContext, ReactNode, useState } from "react";

interface ModalContextType {
  modals: { name: string, props: any }[];
  openModal: (name: string, props: any) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null)
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,

}) => {
  const [modals, setmodals] = useState<{ name: string, props: any }[]>([])

  const openModal = (name: string, props: any) => {
    setmodals([...modals, { name, props }])
  }

  return (
    <ModalContext.Provider value={{ modals, openModal }}>
      {children}
    </ModalContext.Provider>
  )
}