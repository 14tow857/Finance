import * as React from "react";
import { Dialog } from "@radix-ui/react-dialog";

export type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;

};

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
};

export const SheetContent: React.FC<{ children: React.ReactNode; side?: string; className?: string }> = ({ children, side, className }) => {
    return (
      <div className={`${className} sheet-content ${side}`}>
        {children}
      </div>
    );
  };
  

export const SheetTrigger: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
