import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Modal, ModalContent } from '../NavbarStyles';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { logoutUser } from '../../../redux/usersSlice';

const ModalUser = ({ handleToggleMenu, handleToggleCart }) => {
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    const isLoggedIn = useSelector((state) => state.user.user?.user?.username);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const menuRef = useRef(null);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
        if (isCartOpen) {
            handleToggleCart();

        }
    };

    const handleLogout = async () => {
        try {
            dispatch(logoutUser());
            handleToggle();
            handleToggleMenu();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    //funcion de si se hace click por fuera del modal
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Menu ref={menuRef}>
            <Button onClick={handleToggle} style={{ minWidth: '155px' }} >
                {isLoggedIn ? `${isLoggedIn}` : 'Tu Cuenta'}
            </Button>
            {menuOpen && (
                <Modal>
                    {isLoggedIn ? (
                        <ModalContent>
                            <NavLink style={{ background: '#454545'}} to="/misOrdenes" onClick={() => {
                                handleToggle();
                                handleToggleMenu();
                            }}>
                                Ver Mis Ordenes
                            </NavLink>
                            <NavLink style={{ background: '#454545' }}
                                onClick={() => {
                                    handleLogout();
                                    handleToggle();
                                    handleToggleMenu();
                                }}
                            >
                                Cerrar Sesión
                            </NavLink>
                        </ModalContent>
                    ) : (
                        <ModalContent>
                                <NavLink to="/login" style={{ background: '#454545' }} onClick={() => {
                                handleToggle();
                                handleToggleMenu();
                            }}>
                                Inicia Sesión
                                </NavLink>
                                <NavLink to="/register" style={{ background: '#454545' }} onClick={() => {
                                    handleToggle();
                                    handleToggleMenu();
                                }}>
                                    Registrate
                                </NavLink>
                        </ModalContent>

                    )}
                </Modal>
            )}
        </Menu>
    );
};

export default ModalUser;
