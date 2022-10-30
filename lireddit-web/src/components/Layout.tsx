import Navbar from './NavBar'
import Wrapper, { WrapperVariant } from './Wrapper';

interface LayoutProps {
    variant?: WrapperVariant 
    children: any
}

export const Layout: React.FC<LayoutProps> = ({
    variant,
    children
}) => {
        return (
            <>
                <Navbar/>
                <Wrapper variant={variant}>
                    {children}
                </Wrapper>
            </>
        );
}