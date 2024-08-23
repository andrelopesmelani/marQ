import {ReactNode} from 'react';

interface ColumnProps {
  title: string;
  children: (row: any) => ReactNode;
  className?: string;
}

const Column = ({ children }: ColumnProps) => {
  return <>{children}</>;
};

export default Column;