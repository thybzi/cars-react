import {cleanup, render} from '@testing-library/react';
import {Icon} from './Icon';

afterEach(cleanup);

it('renders with name', () => {
    const {container} = render(
        <Icon name='heart'/>,
    );
    expect(container.firstElementChild).toBeTruthy();
});

it('adds auxClass', () => {
    const {container} = render(
        <Icon name='heart' auxClass='beats'/>,
    );
    expect(container.firstElementChild!.classList).toContain('beats');
});
