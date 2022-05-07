# svbu-rct-tdlist

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/svbu-rct-tdlist)

with types.d.import { FC } from 'react'
//import './README.scss'

const README: FC<{ title: string }> = (props) => {
  return (
    <div className='README'>README {props.title}</div>
  )
}

export default README