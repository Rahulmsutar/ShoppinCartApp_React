import React from 'react'
import { Container, Dropdown, FormControl, Navbar, Nav,Badge } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {

    const {state:{cart},dispatch} = CartState();

    return (
        <Navbar bg="dark" variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        Placeholder="Search Product"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px"/>
                           <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minwidth: 370 }}>
                            {
                                cart.length > 0 ?(
                                <>
                                {
                                    cart.map(prod=>(
                                        <span className='cartitem' key={prod.id}>
                                            <img
                                            src={prod.image}
                                            className='cartItemImg'
                                            alt={prod.name}
                                            />
                                    
                                        <div className='cartItemDetails'>
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split(".")[0]}</span>

                                        </div>
                                        <AiFillDelete
                                        fontSize="20px"
                                        style={{cursor:"pointer"}}
                                        onClick={()=>
                                        dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload:prod,
                                        })}
                                        />
                                        </span>
                                    ))
                                }
                                </>) : ( <span style={{ padding: 10 }}>cart is empty</span>)
                            }
                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )

}

export default Header
