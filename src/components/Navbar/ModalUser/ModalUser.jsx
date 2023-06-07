import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Modal, ModalContent } from '../NavbarStyles';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { auth } from '../../../firebase/firebaseConfig';
import { logoutUser } from '../../../redux/UserSlice';

const ModalUser = ({ handleToggleMenu, handleToggleCart }) => {
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    const isLoggedIn = useSelector((state) => state.user.user?.displayName);
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
            await auth.signOut();
            dispatch(logoutUser());
            handleToggle();
            handleToggleMenu();
            navigate('/')
        } catch (error) {
            console.log('Error al cerrar sesión:', error);
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
                            <NavLink to="/misOrdenes" onClick={() => {
                                handleToggle();
                                handleToggleMenu();
                            }}>
                                Ver Mis Ordenes
                            </NavLink>
                            <NavLink
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
                            <NavLink to="/login" onClick={() => {
                                handleToggle();
                                handleToggleMenu();
                            }}>
                                Inicia Sesión
                                </NavLink>
                                <NavLink to="/register" onClick={() => {
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
