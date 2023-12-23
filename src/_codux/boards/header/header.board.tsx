import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header key={null} />,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#1a3271',
        canvasWidth: 706,
        canvasHeight: 104,
        windowWidth: 774
    }
});
