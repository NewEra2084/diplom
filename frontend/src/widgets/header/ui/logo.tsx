import {ClockAlert} from "lucide-react"

export const Logo = ({className} : {className?: string}) => {
  return (
    <div className={"flex gap-3 items-center "+className}>
      <ClockAlert/>
      <h1 className="text-2xl font-bold">Scrumify.ru</h1>
    </div>
  )
}