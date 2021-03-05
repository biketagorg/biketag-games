import { Ti18nSchema, Ti18nConfig } from '../types';
export declare function getConfig(type?: string | Ti18nSchema): Required<{
    [K in keyof Ti18nConfig]: Required<Ti18nConfig[K]>;
}> & {
    withTranslationsMaintenance: boolean;
};
