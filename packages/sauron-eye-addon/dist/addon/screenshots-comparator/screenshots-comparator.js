import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './screenshots-comparator.css';
export function ScreenshotsComparator({ storybookUrl, storyId }) {
    const [linePosition, setLinePosition] = React.useState(-1);
    const line = React.useRef(null);
    const wrapper = React.useRef(null);
    // Картинка которую сравниваем (та, что в main)
    // пример правильной ссылки:
    // https://colibrijs.github.io/colibrijs/issue-168/storybook/screenshots/reference/pagetitle-tests-screenshod--screenshotz.png
    const referenceImage = `${storybookUrl}screenshots/reference/${storyId}.png`;
    const actualImage = referenceImage.replace('reference', 'actual');
    const imageStyles = React.useMemo(() => {
        return {
            clipPath: `inset(0 0 0 ${linePosition}px)`,
            zIndex: 1,
        };
    }, [linePosition]);
    const lineStyles = React.useMemo(() => {
        return {
            left: linePosition !== -1 ? `${linePosition}px` : '50%',
        };
    }, [linePosition]);
    const onMouseDown = React.useCallback(() => {
        if (!line.current || !wrapper.current)
            return;
        const wrapperLeftOffset = wrapper.current.offsetLeft;
        const maxWidth = wrapper.current.offsetWidth - line.current.offsetWidth;
        function mouseMove(event) {
            const currentCalculatedPosition = event.clientX - wrapperLeftOffset;
            const newLinePosition = Math.min(maxWidth, Math.max(currentCalculatedPosition, 0));
            setLinePosition(newLinePosition);
        }
        function mouseUp() {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        }
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }, []);
    return (_jsx("div", { children: _jsx("div", { ref: wrapper, className: "screenshots-comparator__images-wrapper", children: _jsxs("div", { children: [_jsx("img", { className: "screenshots-comparator__image", style: imageStyles, src: referenceImage }), _jsx("div", { ref: line, style: lineStyles, className: "screenshots-comparator__line", onMouseDown: onMouseDown }), _jsx("img", { className: "screenshots-comparator__image", src: actualImage })] }) }) }));
}
//# sourceMappingURL=screenshots-comparator.js.map