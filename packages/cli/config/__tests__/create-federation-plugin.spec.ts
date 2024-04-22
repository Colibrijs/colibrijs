import { describe, expect, it } from '@jest/globals';
import { NodeFederationPlugin } from '@module-federation/node';
import { container } from 'webpack';

import { defaultSettings } from '../../lib/__tests__/testing-data';
import { createFederationPlugin } from '../create-federation-plugin';

describe(createFederationPlugin.name, () => {
  it('если settings.platform = client, возвращает экземпляр ModuleFederationPlugin', () => {
    expect.assertions(1);

    const plugin = createFederationPlugin({ ...defaultSettings, platform: 'client' });

    expect(plugin).toBeInstanceOf(container.ModuleFederationPlugin);
  });

  it('если settings.platform = server, возвращает экземпляр NodeFederationPlugin', () => {
    expect.assertions(1);

    const plugin = createFederationPlugin({ ...defaultSettings, platform: 'server' });

    expect(plugin).toBeInstanceOf(NodeFederationPlugin);
  });
});
