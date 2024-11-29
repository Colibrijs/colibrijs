import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react';

import styles from './screenshots-comparator.module.css';

interface Props {
  repositorySrc: string;
  currentBranch: string;
  storyId: string;
  children: ReactNode;
}

export function ScreenshotsComparator({ repositorySrc, currentBranch, storyId }: Props) {
  const [linePosition, setLinePosition] = useState(-1);
  const line = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

  /** Определяем имя пользователя по ссылке на репозиторий */
  const githubUserName = useMemo(() => {
    const url = new URL(repositorySrc);
    return url.pathname.slice(1, url.pathname.indexOf('/', 1));
  }, [repositorySrc]);

  /** Картинка которую сравниваем (та, что в main) */
  const referenceImage = useMemo(() => {
    // пример правильной ссылки:
    // https://colibrijs.github.io/colibrijs/issue-168/storybook/screenshots/actual/pagetitle-tests-screenshod--screenshotz.png
    const domain = repositorySrc
      .replace('github.com', `${githubUserName}.github.io/`)
      .replace(`/${githubUserName}/`, '');
    return `${domain}${currentBranch}/storybook/screenshots/reference/${storyId}.png`;
  }, [currentBranch, githubUserName, repositorySrc, storyId]);

  /** Картинка с которой сравниваем */
  const currentImage = useMemo(() => {
    return referenceImage.replace('reference', 'actual');
  }, [referenceImage]);

  const imageStyles = useMemo(() => {
    return {
      clipPath: `inset(0 0 0 ${linePosition}px)`,
      zIndex: 1,
    };
  }, [linePosition]);

  const lineStyles = useMemo(() => {
    return {
      left: linePosition !== -1 ? `${linePosition}px` : '50%',
    };
  }, [linePosition]);

  const onMouseDown = useCallback(() => {
    if (!line.current || !wrapper.current) return;
    const wrapperLeftOffset = wrapper.current.offsetLeft;
    const maxWidth = wrapper.current.offsetWidth - line.current.offsetWidth;

    function mouseMove(event: MouseEvent) {
      const { clientX } = event;
      const currentCalculatedPosition = clientX - wrapperLeftOffset;
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
      <div ref={wrapper} className={styles.imagesWrapper}>
        <div>
          <img className={styles.image} style={imageStyles} src={referenceImage} />
          <div ref={line} style={lineStyles} className={styles.line} onMouseDown={onMouseDown} />
          <img className={styles.image} src={currentImage} />
        </div>
      </div>
    </div>
  );
}
