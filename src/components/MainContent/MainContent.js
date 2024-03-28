import './MainContent.scss';

export function MainContent({
    children,
}) {
    return (
        <div className="MainContent">
            {children}
        </div>
    );
}
