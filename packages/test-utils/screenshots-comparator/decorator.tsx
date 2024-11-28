import { type ComponentType, type ReactNode, useMemo } from 'react';
import { transliterate as tr } from 'transliteration';

import { ScreenshotsComparator } from './screenshots-comparator';

interface ScreenshotsDecoratorProps {
  title: string;
  name: string;
  children: ReactNode;
}

function getTransliteratedStoryName(text: string): string {
  const translit = tr(text);
  return translit.replaceAll(' - ', ' ').replaceAll(' ', '_').replaceAll('-', '_');
}

function ScreenshotsDecorator({ title, name, children }: ScreenshotsDecoratorProps) {
  const currentBranch = process.env.REACT_APP_BRANCH_REF ?? 'issue-168'; // переименовать на main
  const repositorySrc =
    process.env.REACT_APP_REPOSITORY_SRC ?? 'https://github.com/colibrijs/colibrijs/';

  const storyName = useMemo(() => {
    const formattedTitle = title.replaceAll('/', '_');
    const transliteratedName = getTransliteratedStoryName(name);
    console.log(`${formattedTitle}--${transliteratedName}`, 'storyName');

    return `${formattedTitle}--${transliteratedName}`;
  }, [title, name]);

  return (
    <ScreenshotsComparator
      currentBranch={currentBranch}
      repositorySrc={repositorySrc}
      storyName={storyName}
    >
      {children}
    </ScreenshotsComparator>
  );
}

export function withScreenshotsDecorator() {
  function Decorator(Story: ComponentType) {
    return (
      <ScreenshotsDecorator title="pagetitle-tests-screenshod" name="screenshotz">
        <Story />
      </ScreenshotsDecorator>
    );
  }

  Decorator.displayName = 'Kekich';
  return Decorator;
}
