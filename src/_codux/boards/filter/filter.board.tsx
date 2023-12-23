import { createBoard } from '@wixc3/react-board';
import { Filter } from '../../../components/filter/filter';

const industries = ['SaaS', 'Fintech', 'Climate Tech', 'E-commerce'];


export default createBoard({
    name: 'Filter',
    Board: () => <Filter industries={industries} className='w-auto' />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 663,
        canvasHeight: 27
    }
});
