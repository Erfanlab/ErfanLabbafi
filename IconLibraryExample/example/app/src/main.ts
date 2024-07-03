import "./style.css";
import "@alexanderweigelt/icon-library/lib/styles/main.css";
import "@alexanderweigelt/icon-library/lib/IconComponent";
import IconSprite from "@alexanderweigelt/icon-library/lib/icons/icons.sprite.svg";

document.querySelector<HTMLDivElement>("#sprite")!.innerHTML = IconSprite;
