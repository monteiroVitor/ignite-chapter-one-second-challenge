import { memo } from "react";
import { Icon } from "./Icon";

import "../styles/button.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
  onButtonClick: (id: number) => void;
  genreId: number;
}

function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => rest.onButtonClick(rest.genreId)}
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}

function getAtributes({ title, iconName, selected }: ButtonProps) {
  return { title, iconName, selected };
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(getAtributes(prevProps), getAtributes(nextProps));
});
