/**
 * @flow
 * @relayHash 2fd67543b6e2821ae2295110d4e7802f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CardListQueryVariables = {||};
export type CardListQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +image: ?string,
    +types: ?$ReadOnlyArray<?string>,
  |}>
|};
export type CardListQuery = {|
  variables: CardListQueryVariables,
  response: CardListQueryResponse,
|};
*/


/*
query CardListQuery {
  pokemons(first: 151) {
    id
    name
    image
    types
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pokemons",
    "storageKey": "pokemons(first:151)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 151
      }
    ],
    "concreteType": "Pokemon",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "types",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CardListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CardListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CardListQuery",
    "id": null,
    "text": "query CardListQuery {\n  pokemons(first: 151) {\n    id\n    name\n    image\n    types\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e43c005fb18010565f4841954d39704d';

module.exports = node;
