import styled from 'styled-components'
import logo from '../../Images/logo_netflix.png'
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai'
import { BsFillGiftFill } from 'react-icons/bs'

export default function Header() {
    return (
        <>
            <TopMenu>
                <HeaderLeft>
                    <a href='#'><img src={logo} /></a>
                    <MenuHeader>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Series</a></li>
                            <li><a href="#">Filmes</a></li>
                            <li><a href="#">Adicionados Recentemente</a></li>
                            <li><a href="#">Minha Lista</a></li>
                        </ul>
                    </MenuHeader>
                </HeaderLeft>
                <HeaderRight>
                    <Search>
                        <AiOutlineSearch />
                        <a href='#'>INFALTIL</a>
                        <BsFillGiftFill />
                        <AiFillBell />
                    </Search>
                </HeaderRight>
            </TopMenu>
        </>
    )
}

const TopMenu = styled.header`
    background-color: black;
    padding: 12px 0;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
`

const HeaderLeft = styled.div`
     img{
        max-width: 120px;
        margin: 8px 0;
     }
     display: flex;
     align-items: center;
`

const MenuHeader = styled.div`
    display: inline-block;
    margin-left: 30px;
    a{
        color: white;
        text-decoration: none;
    }
    li{
        display: inline-block;
        margin-right: 15px;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    svg{
        color: white;
        margin: 0 15px;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }
    a{
        color: white;
        text-decoration: none;
    }

`

const Search = styled.div`
    svg{
        
    }
`