import {cleanup, fireEvent, render} from '@testing-library/react';
import {Button} from './Button';

afterEach(cleanup);

it('renders with text', () => {
    const {queryByText} = render(
        <Button text='Hello'/>,
    );
    expect(queryByText('Hello')).toBeTruthy();
});

it('adds auxClass', () => {
    const {getByText} = render(
        <Button text='Hello' auxClass='world'/>,
    );
    expect(getByText('Hello').classList).toContain('world');
});

it('handles click event', () => {
    let value = 0;
    const {getByText} = render(
        <Button text='Click me' onClick={() => {
            value = 42;
        }}/>,
    );
    fireEvent.click(getByText('Click me'));
    expect(value).toEqual(42);
});
