import { HStack, Spacer } from "@chakra-ui/react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { FC } from "react"
import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
    async () => WalletMultiButton,
    { ssr: false }
);

const NavBar: FC = () => {
    return (
        <HStack width="full" padding={4}>
            <Spacer />
            <WalletMultiButtonDynamic style={{background: 'orange'}} />
        </HStack>
    )
}

export default NavBar