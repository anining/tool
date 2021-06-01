// import React from 'react'
// import { useHistory } from 'react-router-dom'
// import style from '../styles/HeaderComponent.module.css'

// function HeaderComponent() {
//   const modules = [
//     {
//       id: 'home',
//       name: 'Home',
//       path: '/home'
//     },
//     {
//       id: 'map',
//       name: 'Map',
//       path: '/home/map'
//     },
//     {
//       id: 'photos',
//       name: 'Photos',
//       path: '/home/photos'
//     }
//   ]
//   const history = useHistory()
//   const onClick = (path: string): void => {
//     history.push(path)
//   }

//   return (
//     <header id='header' className={style.header}>
//       <div id='message' />
//       { modules.map(({ path, id, name }) => <div onClick={() => onClick(path)} className={style.module} key={id}>{name}</div>)}
//     </header>
//   )
// }

// export default HeaderComponent
