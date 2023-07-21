import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
