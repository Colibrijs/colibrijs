var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AddonPanel, Button } from '@storybook/components';
import { useGlobals } from '@storybook/manager-api';
import './screenshot-panel.css';
import React from 'react';
import { ScreenshotTable } from './screenshot-table/screenshot-table';
import { getApprovedScreenshots } from '../common/get-approved-screenshots';
import { useFailedStories } from '../common/use-failed-stories';
export function ScreenshotsPanel({ active, api }) {
    const [globals] = useGlobals();
    const config = globals.sauronEye;
    const { status, stories, error: failedStoriesError } = useFailedStories(api);
    const [storiesToApprove, setStoriesToApprove] = React.useState([]);
    const [approvedStories, setApprovedStories] = React.useState([]);
    const [error, setError] = React.useState('');
    React.useEffect(() => {
        getApprovedScreenshots(config)
            .then(setApprovedStories)
            .catch((error) => setError(error.message));
    }, [config]);
    const approve = React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const token = config.githubToken
            .split(',')
            .map((code) => String.fromCharCode(Number(code)))
            .join('');
        const response = yield fetch(`https://api.github.com/repos/${config.repositoryOwner}/${config.repositoryName}/actions/workflows/screenshot-approve.yml/dispatches`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ref: config.branchName,
                inputs: {
                    'pull-request-number': config.pullRequestNumber,
                    'approved-screenshots': JSON.stringify([...approvedStories, ...storiesToApprove], null, 2),
                },
            }),
        });
        if (!response.ok) {
            const error = yield response.json();
            setError(`Ошибка аппрува. ${error.status}: ${error.message}`);
        }
        else {
            setApprovedStories(approvedStories.concat(storiesToApprove));
            setStoriesToApprove([]);
        }
    }), [config, approvedStories, storiesToApprove]);
    if (!active) {
        return null;
    }
    if (status === 'error' || error) {
        return (_jsxs("div", { className: "screenshot-panel", children: [_jsx("p", { className: "screenshot-panel__text", children: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E \u043D\u0435\u043B\u0430\u0434\u043D\u043E\u0435: " }), _jsx("pre", { className: "screenshot-panel__text", children: (failedStoriesError === null || failedStoriesError === void 0 ? void 0 : failedStoriesError.message) || error })] }));
    }
    if (status === 'loading') {
        return (_jsx("div", { className: "screenshot-panel", children: _jsx("p", { className: "screenshot-panel__loading-text", children: "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0441\u0442\u043E\u0440\u0438\u0441\u0430\u0445..." }) }));
    }
    if (!stories.length) {
        return (_jsx("div", { className: "screenshot-panel", children: _jsx("p", { className: "screenshot-panel__success-text", children: "\u0412\u0441\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!" }) }));
    }
    return (_jsx(AddonPanel, { active: active, children: _jsxs("div", { className: "screenshot-panel", children: [!!storiesToApprove.length && (_jsx(Button, { size: "medium", onClick: approve, children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })), _jsx("p", { className: "screenshot-panel__text", children: "\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: " }), _jsx(ScreenshotTable, { stories: stories, api: api, storiesToApprove: storiesToApprove, approvedStories: approvedStories, onChange: setStoriesToApprove })] }) }));
}
//# sourceMappingURL=screenshot-panel.js.map