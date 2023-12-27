import classNames from 'classnames';
import styles from './carousel.module.scss';

export interface CarouselProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Carousel = ({ className }: CarouselProps) => {
    return <div className={classNames(styles.root, className)}>Carousel</div>;
};
