import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import React from 'react';
import './screenshot-table.css';
import { isApprovedScreenshot } from '../../common/get-approved-screenshots';
export function ScreenshotTable({ storiesToApprove, stories, api, onChange, approvedStories, }) {
    const onClick = React.useCallback((screenshotStory) => () => api.selectStory(screenshotStory.path, screenshotStory.id), [api]);
    const removeStoryToApprove = React.useCallback((story) => {
        const index = storiesToApprove.findIndex((currentStory) => story.path === currentStory.path && story.name === currentStory.name);
        const cloneArray = [...storiesToApprove];
        cloneArray.splice(index, 1);
        onChange(cloneArray);
    }, [onChange, storiesToApprove]);
    const addStoryToApprove = React.useCallback((story) => {
        const newStories = [...storiesToApprove, story];
        onChange(newStories);
    }, [onChange, storiesToApprove]);
    const onCheck = React.useCallback((story) => {
        return (event) => {
            const isChecked = event.target.checked;
            if (!isChecked) {
                removeStoryToApprove(story);
            }
            else {
                addStoryToApprove(story);
            }
        };
    }, [addStoryToApprove, removeStoryToApprove]);
    return (_jsxs("table", { className: "screenshot-table__panel", children: [_jsx("thead", { className: "screenshot-table__thead", children: _jsxs("tr", { className: "screenshot-table__tr", children: [_jsx("th", { className: "screenshot-table__th" }), _jsx("th", { className: "screenshot-table__th", children: "Name" }), _jsx("th", { className: "screenshot-table__th", children: "Title" })] }) }), _jsx("tbody", { children: stories.map((story) => (_jsxs("tr", { className: classNames('screenshot-table__tr', {
                        'screenshot-table__approved': isApprovedScreenshot(approvedStories, story),
                    }), children: [_jsx("td", { className: "screenshot-table__td", children: _jsx("input", { disabled: isApprovedScreenshot(approvedStories, story), className: "screenshot-table__checkbox", onChange: onCheck(story), type: "checkbox" }) }), _jsx("td", { className: "screenshot-table__td", children: story.name }), _jsx("td", { className: "screenshot-table__td", children: _jsx("button", { className: "screenshot-table__button", onClick: onClick(story), children: story.title }) })] }, story.path + story.name))) })] }));
}
//# sourceMappingURL=screenshot-table.js.map