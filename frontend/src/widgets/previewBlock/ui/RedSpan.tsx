type Props = {
  children: string;
}

export const RedSpan = ({children}: Props) => {
  return (
    <span className='text-accent'>{children}</span>
  )
}