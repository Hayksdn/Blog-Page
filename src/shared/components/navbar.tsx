import { Flex } from "@chakra-ui/react";
import { CustomContainer } from "../layout/container";
import { List } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex w="full" h="fit-content">
      <CustomContainer variant="containerXS" mx="auto" >
        <List.Root
          flexDir="row"
          listStyleType="none"
          justifyContent="space-between"
          color='#42307D'
          fontWeight='semibold'
                    bg="#F3EBFF"
                    p='0.8rem'
                    px='1.8rem'
        rounded='2xl'
        >
          <List.Item>
            <NavLink to="/">Home</NavLink>
          </List.Item>
          <List.Item>
            <NavLink to="/about">About</NavLink>
          </List.Item>

          <List.Item>
            <NavLink to="/contact">Contact</NavLink>
          </List.Item>
        </List.Root>
      </CustomContainer>
    </Flex>
  );
};

export default Navbar;
