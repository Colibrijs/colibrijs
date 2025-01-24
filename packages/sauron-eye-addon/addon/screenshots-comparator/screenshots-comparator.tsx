import React, { type ReactNode } from 'react';

import './screenshots-comparator.css';

interface Props {
  storybookUrl: string;
  storyId: string;
  children: ReactNode;
}

export function ScreenshotsComparator({ storybookUrl, storyId }: Props) {
  const [linePosition, setLinePosition] = React.useState(-1);
  const line = React.useRef<HTMLDivElement | null>(null);
  const wrapper = React.useRef<HTMLDivElement | null>(null);

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
    if (!line.current || !wrapper.current) return;

    const wrapperLeftOffset = wrapper.current.offsetLeft;
    const maxWidth = wrapper.current.offsetWidth - line.current.offsetWidth;

    function mouseMove(event: MouseEvent) {
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

  return (
    <div>
      <div ref={wrapper} className="screenshots-comparator__images-wrapper">
        <div>
          <img className="screenshots-comparator__image" style={imageStyles} src={referenceImage} />
          <div
            ref={line}
            style={lineStyles}
            className="screenshots-comparator__line"
            onMouseDown={onMouseDown}
          />
          <img className="screenshots-comparator__image" src={actualImage} />
        </div>
      </div>
    </div>
  );
}
