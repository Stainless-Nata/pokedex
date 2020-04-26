/**
 * @flow
 * @relayHash 171efcebb3aba76145671ca500f178fa
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
    +height: ?{|
      +minimum: ?string,
      +maximum: ?string,
    |},
    +weight: ?{|
      +minimum: ?string,
      +maximum: ?string,
    |},
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
    height {
      minimum
      maximum
    }
    weight {
      minimum
      maximum
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "minimum",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "maximum",
    "args": null,
    "storageKey": null
  }
],
v1 = [
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "height",
        "storageKey": null,
        "args": null,
        "concreteType": "PokemonDimension",
        "plural": false,
        "selections": (v0/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "weight",
        "storageKey": null,
        "args": null,
        "concreteType": "PokemonDimension",
        "plural": false,
        "selections": (v0/*: any*/)
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
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CardListQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CardListQuery",
    "id": null,
    "text": "query CardListQuery {\n  pokemons(first: 151) {\n    id\n    name\n    image\n    types\n    height {\n      minimum\n      maximum\n    }\n    weight {\n      minimum\n      maximum\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1469911bef85af5a87325597dc2b25c';

module.exports = node;
