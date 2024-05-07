/* eslint-disable jsdoc/check-param-names */
import antfu from '@antfu/eslint-config'
import { defu } from 'defu'

import { configs } from './configs'

import type { UserConfigItem } from '@antfu/eslint-config'
import type { FlatConfigPipeline } from 'eslint-flat-config-utils'

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {OptionsConfig & FlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<UserConfigItem | UserConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<UserConfigItem[]>}
 *  The merged ESLint configurations.
 */
export default function eslintConfig(...args: Parameters<typeof antfu>): FlatConfigPipeline<UserConfigItem> {
    const [options, ...userConfigs] = args
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
