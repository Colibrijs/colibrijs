import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react';

import styles from './screenshots-comparator.module.css';

interface Props {
  repositorySrc: string;
  currentBranch: string;
  storyName: string;
  children: ReactNode;
}

export function ScreenshotsComparator({
  repositorySrc,
  currentBranch,
  storyName,
  children,
}: Props) {
  const [isComparing, setIsComparing] = useState(false);
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
    console.log(
      `${domain}${currentBranch}/storybook/screenshots/reference/${storyName}.png`,
      'referenceImage'
    );
    return `${domain}${currentBranch}/storybook/screenshots/reference/${storyName}.png`;
  }, [currentBranch, githubUserName, repositorySrc, storyName]);

  /** Картинка с которой сравниваем */
  const currentImage = useMemo(() => {
    console.log(referenceImage.replace('reference', 'actual'), 'currentImage');
    return referenceImage.replace('reference', 'actual');
  }, [referenceImage]);

  const imageStyles = useMemo(() => {
    return isComparing
      ? {
          clipPath: `inset(0 0 0 ${linePosition}px)`,
          zIndex: 1,
        }
      : {};
  }, [isComparing, linePosition]);

  const lineStyles = useMemo(() => {
    return {
      left: linePosition !== -1 ? `${linePosition}px` : '50%',
      display: isComparing ? 'block' : 'none',
    };
  }, [isComparing, linePosition]);

  const changeComparingState = useCallback(() => {
    setIsComparing(!isComparing);
    if (isComparing) return;
    if (line.current) {
      setLinePosition(line.current.offsetLeft);
    }
  }, [isComparing]);

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
      <button className={styles.button} onClick={changeComparingState}>
        click
      </button>
      <div ref={wrapper} className={styles.imagesWrapper}>
        {!isComparing && children}
        {isComparing && (
          <div>
            <img className={styles.image} style={imageStyles} src={referenceImage} />
            <div ref={line} style={lineStyles} className={styles.line} onMouseDown={onMouseDown} />
            <img className={styles.image} src={currentImage} />
          </div>
        )}
      </div>
    </div>
  );
}
