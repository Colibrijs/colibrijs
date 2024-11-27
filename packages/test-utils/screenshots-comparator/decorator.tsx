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
  const currentBranch = process.env.REACT_APP_BRANCH_REF ?? 'main';
  const repositorySrc =
    process.env.REACT_APP_REPOSITORY_SRC ?? 'https://github.com/vivasoft-pro/sdating_front_vue/';

  const storyName = useMemo(() => {
    const formattedTitle = title.replaceAll('/', '_');
    const transliteratedName = getTransliteratedStoryName(name);

    return `${formattedTitle}_${transliteratedName}`;
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
      <ScreenshotsDecorator title="title" name="name">
        <Story />
      </ScreenshotsDecorator>
    );
  }

  Decorator.displayName = 'Kekich';
  return Decorator;
}
