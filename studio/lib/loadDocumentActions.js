// resolveDocumentActions.js

// import the default document actions
import defaultResolve from "part:@sanity/base/document-actions";

import { SetSlugAndPublishAction } from "./actions/setSlugAndPublishAction.js"

export default function resolveDocumentActions(props) {
  if (["tag"].indexOf(props.type) === -1) {
    return [...defaultResolve(props)]
  }

  return [...defaultResolve(props), SetSlugAndPublishAction]
}
