import classNames from 'classnames';
import styles from './webcard.module.scss';
import { Flex, Image, SimpleGrid, Card, CardBody } from '@chakra-ui/react';
import { Heading } from 'lucide-react';

export interface WebcardProps {
    className?: string;
    images: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Webcard = ({ className, images }: WebcardProps) => {
    // Array of image URLs

    return (
        <div className={`... snap-x py-4 ${className}`}>
            <div className="justify-content: space-between flex snap-start overflow-x-scroll px-2">
                {/* Map over the array of image URLs passed as props */}
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        className="ml-2 mr-2 rounded-lg"
                        alt={`Image ${index}`}
                    />
                ))}
            </div>
        </div>
    );
};
