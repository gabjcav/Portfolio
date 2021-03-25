import styled from 'styled-components'
import Link from 'next/link'
const NavStyle = styled.nav`
  display: flex;
  color: white;
  align-items: center;
  background-color: var(--gray);
  height: 60px;
  margin-top: 1%;
  margin-bottom: 40px;
  box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.59);
  ul {
    display: flex;
    list-style: none;
    text-decoration: none;
    align-items: center;
    flex-direction: row;
    font-size: 1.6rem;
    min-width: 15%;
    max-width: 20%;
    justify-content: space-between;
    li {
      padding: 5px 15px;
      border-radius: 5px;
      &:hover {
        background-color: var(--dark-gray);
        border-radius: 5px;
      }
    }
  }
`

const NavBar = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

export default NavBar
