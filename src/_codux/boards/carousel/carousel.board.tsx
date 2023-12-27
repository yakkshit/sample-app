import { createBoard } from '@wixc3/react-board';
import { Carousel } from '../../../components/carousel/carousel';

export default createBoard({
    name: 'Carousel',
    Board: () => <Carousel />,
    isSnippet: true,
});
