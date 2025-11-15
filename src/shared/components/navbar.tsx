import { Button, Flex, Image, Menu, Portal } from "@chakra-ui/react";
import { CustomContainer } from "../layout/container";
import { List } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BlogImage from "@/shared/assets/images/blog.png";
import MenuIcon from "@/shared/assets/icons/menu";
import CloseIcon from "@/shared/assets/icons/close";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import AccountIcon from "@/shared/assets/icons/account";
const links = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <Flex h="fit-content" w="full" bg="#F3EBFF" flexDir="column">
      <CustomContainer
        variant="containerXS"
        display="flex"
        flexDir="row"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <NavLink to="/">
          <Image src={BlogImage} w="40px" h="40px" />
        </NavLink>
        <List.Root
          flexDir="row"
          listStyleType="none"
          color="#42307D"
          fontWeight="semibold"
          p="0.8rem"
          px="1.8rem"
          gap="1rem"
          rounded="2xl"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link) => (
            <List.Item key={link.to}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </List.Item>
          ))}

          {user ? (
            <Menu.Root>
              <Menu.Trigger cursor="pointer" outline="none">
                <AccountIcon />
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    bg="#F3EBFF"
                    display={{ base: "none", md: "flex" }}
                  >
                    <Menu.Item
                      color="#42307D"
                      value="middle"
                      onSelect={logout}
                      cursor="pointer"
                    >
                      Log Out
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          ) : (
            <List.Item>
              <NavLink to="/signup">Sign Up</NavLink>
            </List.Item>
          )}
        </List.Root>

        <Button
          bg="none"
          display={{ md: "none" }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </CustomContainer>

      {menuOpen && (
        <List.Root
          alignItems="center"
          flexDir="column"
          listStyleType="none"
          color="#42307D"
          fontWeight="semibold"
          p="0.8rem"
          px="1.8rem"
          gap="1rem"
          rounded="2xl"
          display={{ md: "none" }}
        >
          {links.map((link) => (
            <List.Item key={link.to}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </List.Item>
          ))}

          {user ? (
            <List.Item>
              <Button
                onClick={logout}
                bg="none"
                h="20px"
                color="#42307D"
                fontSize="16px"
                fontWeight="semibold"
              >
                Log Out
              </Button>
            </List.Item>
          ) : (
            <List.Item>
              <NavLink to="/signup">Sign Up</NavLink>
            </List.Item>
          )}
        </List.Root>
      )}
    </Flex>
  );
};

export default Navbar;
