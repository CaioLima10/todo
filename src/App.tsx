import TrashIcon from "../src/assets/icons/trash.svg?react"
import LogoIcon from "../src/assets/image/logo.svg?react"
import CheckIcon from "../src/assets/icons/check.svg?react"

import { Icon } from "./components/icon";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import PlusIcon from "../src/assets/icons/plus.svg?react"
import { ButtonIcon } from "./components/buttonIcon";
import { InputText } from "./components/inputText";
import { InputCheckBox } from "./components/inputCheckBox";
import { Card } from "./components/card";

export function App() {
  return (
    <section className="flex flex-col gap-10 min-h-screen">
    <div>
      <Icon svg={LogoIcon} />
    </div>
    <div className="flex gap-2">
      <Icon svg={TrashIcon} className="fill-pink-base" />
      <Badge>5</Badge>
    </div>
    <div>
      <Badge variant={"secondary"}>2 de 5</Badge>
    </div>
    <div>
      <Button variant={"primary"} icon={PlusIcon}>Nova tarefa</Button>
    </div>
    <div className="flex gap-2">
      <ButtonIcon icon={TrashIcon} variant={"ternary"} />
      <ButtonIcon icon={TrashIcon} variant={"secondary"} />
      <ButtonIcon icon={TrashIcon} variant={"primary"}/>
    </div>
    <div>
      <InputText/>
    </div>
    <div>
      <InputCheckBox type="checkbox" icon={CheckIcon}/>
    </div>
    <Card size={"md"} className="w-40 h-20">
      <InputCheckBox type="checkbox" icon={CheckIcon}/>
    </Card>
    </section>
  )
}
