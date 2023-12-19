import antfu from '@antfu/eslint-config'
import { defu } from 'defu'

import { configs } from './configs'

import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config'

export default function eslintConfig(
    options?: OptionsConfig & FlatConfigItem,
    ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]
) {
    return antfu(
        defu(options, {
            stylistic: {
                indent: 4,
            },
        }),

        ...configs,
        ...userConfigs,
    )
}
