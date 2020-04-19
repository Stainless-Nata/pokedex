/**
 * @flow
 * @relayHash 7a6c12c6706612dea1c7c2ed249814c9
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
    +maxCP: ?number,
    +maxHP: ?number,
    +attacks: ?{|
      +fast: ?$ReadOnlyArray<?{|
        +name: ?string,
        +type: ?string,
        +damage: ?number,
      |}>,
      +special: ?$ReadOnlyArray<?{|
        +name: ?string,
        +type: ?string,
        +damage: ?number,
      |}>,
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
    maxCP
    maxHP
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "damage",
    "args": null,
    "storageKey": null
  }
],
v2 = [
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
      (v0/*: any*/),
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
        "name": "maxCP",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "maxHP",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "attacks",
        "storageKey": null,
        "args": null,
        "concreteType": "PokemonAttack",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fast",
            "storageKey": null,
            "args": null,
            "concreteType": "Attack",
            "plural": true,
            "selections": (v1/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "special",
            "storageKey": null,
            "args": null,
            "concreteType": "Attack",
            "plural": true,
            "selections": (v1/*: any*/)
          }
        ]
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
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CardListQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CardListQuery",
    "id": null,
    "text": "query CardListQuery {\n  pokemons(first: 151) {\n    id\n    name\n    image\n    maxCP\n    maxHP\n    attacks {\n      fast {\n        name\n        type\n        damage\n      }\n      special {\n        name\n        type\n        damage\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa89fc8f3aa61a19596b219ecc65ad01';

module.exports = node;
