import classNames from 'classnames';
import styles from './header.module.scss';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Filter } from '../filter/filter';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Input,
} from '@chakra-ui/react';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex w-screen flex-auto items-center justify-between bg-[#1A3271] p-4">
            {/* Item 1 */}
            <nav className="mr-1">
                <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                            className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>
            {/* Item 2 */}
            <span className="ml-1 mr-4 text-white">Netnedge</span>
            {/* Item 3 */}
            {/* This div tag size */}
            <div className="h-flex relative ml-4 mr-4 flex w-screen items-center justify-center">
                <input
                    type="search"
                    className="w-full rounded-lg border-2 border-slate-100 bg-white py-2 pl-4 pr-10"
                />
                <Search
                    color="gray"
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                />
            </div>
            <div className="h-flex absolute-right ml-4 flex">
                <CircleUserRound color="white" size={32} />
            </div>
            <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
