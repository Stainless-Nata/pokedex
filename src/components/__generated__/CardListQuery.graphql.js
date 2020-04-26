/**
 * @flow
 * @relayHash 8fad0280661a2feb3d89d0c650f08703
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
    +attacks: ?{|
      +fast: ?$ReadOnlyArray<?{|
        +name: ?string,
        +damage: ?number,
      |}>,
      +special: ?$ReadOnlyArray<?{|
        +name: ?string,
        +damage: ?number,
      |}>,
    |},
    +evolutions: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?string,
      +image: ?string,
    |}>,
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
    attacks {
      fast {
        name
        damage
      }
      special {
        name
        damage
      }
    }
    evolutions {
      id
      name
      image
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v3 = [
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
v4 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "damage",
    "args": null,
    "storageKey": null
  }
],
v5 = [
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
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
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
        "selections": (v3/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "weight",
        "storageKey": null,
        "args": null,
        "concreteType": "PokemonDimension",
        "plural": false,
        "selections": (v3/*: any*/)
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
            "selections": (v4/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "special",
            "storageKey": null,
            "args": null,
            "concreteType": "Attack",
            "plural": true,
            "selections": (v4/*: any*/)
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "evolutions",
        "storageKey": null,
        "args": null,
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
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
    "selections": (v5/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CardListQuery",
    "argumentDefinitions": [],
    "selections": (v5/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CardListQuery",
    "id": null,
    "text": "query CardListQuery {\n  pokemons(first: 151) {\n    id\n    name\n    image\n    types\n    height {\n      minimum\n      maximum\n    }\n    weight {\n      minimum\n      maximum\n    }\n    attacks {\n      fast {\n        name\n        damage\n      }\n      special {\n        name\n        damage\n      }\n    }\n    evolutions {\n      id\n      name\n      image\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0352a9310eb8db409c5f0e6598793405';

module.exports = node;
