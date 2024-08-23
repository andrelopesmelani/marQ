import { ReactNode } from "react";
import './styles.scss'

interface TitleProps{
  title: string;
  subtitle?: string;
  button?: ReactNode;
}

const Title = ({ title, subtitle, button }: TitleProps) => {
  return (
    <div className="titleContainer">
      <div>
        <span className="text">{title}</span>
        <p>{subtitle}</p>
      </div>
      {button}
    </div>
  );
};

export default Title;
