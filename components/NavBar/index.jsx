import styled from 'styled-components'
import Link from 'next/link'
const NavStyle = styled.nav`
  display: flex;
  color: var(--dark-gray);
  align-items: center;
  height: 60px;

  ul {
    margin-top: 10%;
    margin-left: 3%;
    display: flex;
    list-style: none;
    text-decoration: none;
    align-items: left;
    flex-direction: column;
    font-size: 2rem;
    max-width: 20%;
    gap: 8px;
    justify-content: space-between;
    padding-inline-start: 0px;
    padding: 20px;
    border-radius: 4px;
    li {
      border-radius: 5px;
      text-shadow: 0.5px 2px var(--light-green);
      letter-spacing: 2px;
      &:hover {
        background-color: var(--dark-gray);
        border-radius: 5px;
        color: var(--light-green);
      }
    }
  }
`

const NavBar = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link href={'/'}>About</Link>
        </li>
        <li>
          <Link href={'/projects'}>Projects</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

export default NavBar
