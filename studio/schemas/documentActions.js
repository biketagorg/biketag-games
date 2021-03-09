// lib/documentActions.js

import defaultResolve, {
    PublishAction,
  } from 'part:@sanity/base/document-actions';
  import SetSlugAndPublishAction from "./actions/setSlugAndPublishAction.js"
  
  /// Publish Actions
  export default function useDocumentActions(props) {
    if (["tag"].indexOf(props.type) !== -1) {
      return defaultResolve(props).map((Action) =>
        Action === PublishAction ? SetSlugAndPublishAction : Action
      );
    }

    return defaultResolve(props)
  }