import React from 'react';
import { getReport } from './get-report';
function kebabize(str) {
    return str
        .split('')
        .map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter;
    })
        .join('');
}
export function useFailedStories(api) {
    const [query, setQuery] = React.useState({
        status: 'idle',
        stories: [],
        error: null,
        isLoading: false,
    });
    React.useEffect(() => {
        setQuery({ status: 'loading', isLoading: true, stories: [], error: null });
        getReport()
            .then((data) => {
            const failedScreenshots = data.testResults.filter((test) => {
                if (test.status === 'passed')
                    return false;
                return test.name.includes('/screenshot/') || test.name.includes('\\screenshot\\');
            });
            const storiesData = failedScreenshots.flatMap((story) => {
                return story.assertionResults.map((result) => {
                    const path = result.ancestorTitles[0].toLowerCase().replaceAll('/', '-');
                    const name = result.ancestorTitles[1];
                    const id = kebabize(name);
                    const storyId = path + '--' + id;
                    const title = api.getData(storyId).name;
                    return { path, name, id, key: path, title };
                });
            });
            setQuery({ status: 'success', isLoading: false, stories: storiesData, error: null });
        })
            .catch((error) => {
            setQuery({ status: 'error', isLoading: false, stories: [], error });
        });
    }, [api]);
    return query;
}
//# sourceMappingURL=use-failed-stories.js.map