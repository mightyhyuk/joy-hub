import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" />
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
