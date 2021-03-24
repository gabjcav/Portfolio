import styled from 'styled-components'
import Link from 'next/link'
const NavStyle = styled.nav`
  display: flex;
  color: #f2aa4cff;
  align-items: center;
  background-color: #101820ff;
  height: 100px;
  margin-bottom: 40px;
  ul {
    display: flex;
    flex: right;
    list-style: none;
    text-decoration: none;
    align-items: center;
    flex-direction: row;
    font-size: 1.6rem;
    min-width: 15%;
    max-width: 20%;
    justify-content: space-between;
    li {
      padding: 10px;
      border: 2px solid #101820ff;
      &:hover {
        border: 2px solid #f2aa4cff;
        border-radius: 2px;
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
          <Link href={'/work'}>Work</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

export default NavBar
