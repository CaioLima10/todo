import { Text } from "./components/text";
import TrashIcon from "../src/assets/icons/trash.svg?react"
import { Icon } from "./components/icon";
import { Badge } from "./components/badge";

export function App() {
  return (
    <>
      <Text variant={"body-md-bold"} className="bg-pink-base">Hello world</Text>
      <Text variant={"body-md"} className="bg-pink-base">Hello world</Text>
      <Icon svg={TrashIcon} className="fill-pink-base" />
      <Badge>5</Badge>
      <Badge variant={"secondary"}>2 de 5</Badge>
    </>
  )
}
