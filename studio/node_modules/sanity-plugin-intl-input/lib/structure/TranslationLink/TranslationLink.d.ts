import * as React from 'react';
import { ILanguageObject, Ti18nSchema } from '../../types';
interface IProps {
    docId: string;
    index: number;
    schema: Ti18nSchema;
    lang: ILanguageObject;
    currentLanguage: string | null;
    baseDocument?: any;
}
export declare const TranslationLink: React.FunctionComponent<IProps>;
export {};
