/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Mesh,
  Nullable,
  Scene,
  Node,
  SceneLoader,
} from "@babylonjs/core";

const gltf = `{
  "asset" : {
      "generator" : "Khronos glTF Blender I/O v3.2.43",
      "version" : "2.0"
  },
  "extensionsUsed" : [
      "KHR_materials_transmission"
  ],
  "scene" : 0,
  "scenes" : [
      {
          "name" : "Scene",
          "nodes" : [
              0
          ]
      }
  ],
  "nodes" : [
      {
          "mesh" : 0,
          "name" : "Cube"
      }
  ],
  "materials" : [
      {
          "doubleSided" : true,
          "extensions" : {
              "KHR_materials_transmission" : {
                  "transmissionFactor" : 0.4363636374473572
              }
          },
          "name" : "Material",
          "pbrMetallicRoughness" : {
              "baseColorFactor" : [
                  0,
                  0.8000000715255737,
                  0.7451565861701965,
                  1
              ],
              "metallicFactor" : 0,
              "roughnessFactor" : 0.027272727340459824
          }
      }
  ],
  "meshes" : [
      {
          "name" : "Cube",
          "primitives" : [
              {
                  "attributes" : {
                      "POSITION" : 0,
                      "NORMAL" : 1,
                      "TEXCOORD_0" : 2
                  },
                  "indices" : 3,
                  "material" : 0
              }
          ]
      }
  ],
  "accessors" : [
      {
          "bufferView" : 0,
          "componentType" : 5126,
          "count" : 16,
          "max" : [
              1,
              1,
              1
          ],
          "min" : [
              -1,
              -1,
              -1
          ],
          "type" : "VEC3"
      },
      {
          "bufferView" : 1,
          "componentType" : 5126,
          "count" : 16,
          "type" : "VEC3"
      },
      {
          "bufferView" : 2,
          "componentType" : 5126,
          "count" : 16,
          "type" : "VEC2"
      },
      {
          "bufferView" : 3,
          "componentType" : 5123,
          "count" : 24,
          "type" : "SCALAR"
      },
      {
          "bufferView" : 4,
          "componentType" : 5126,
          "count" : 2,
          "max" : [
              0.041666666666666664
          ],
          "min" : [
              0
          ],
          "type" : "SCALAR"
      },
      {
          "bufferView" : 5,
          "componentType" : 5126,
          "count" : 2,
          "type" : "VEC3"
      },
      {
          "bufferView" : 6,
          "componentType" : 5126,
          "count" : 2,
          "type" : "VEC4"
      },
      {
          "bufferView" : 7,
          "componentType" : 5126,
          "count" : 2,
          "type" : "VEC3"
      }
  ],
  "bufferViews" : [
      {
          "buffer" : 0,
          "byteLength" : 192,
          "byteOffset" : 0
      },
      {
          "buffer" : 0,
          "byteLength" : 192,
          "byteOffset" : 192
      },
      {
          "buffer" : 0,
          "byteLength" : 128,
          "byteOffset" : 384
      },
      {
          "buffer" : 0,
          "byteLength" : 48,
          "byteOffset" : 512
      },
      {
          "buffer" : 0,
          "byteLength" : 8,
          "byteOffset" : 560
      },
      {
          "buffer" : 0,
          "byteLength" : 24,
          "byteOffset" : 568
      },
      {
          "buffer" : 0,
          "byteLength" : 32,
          "byteOffset" : 592
      },
      {
          "buffer" : 0,
          "byteLength" : 24,
          "byteOffset" : 624
      }
  ],
  "buffers" : [
      {
          "byteLength" : 648,
          "uri" : "data:application/octet-stream;base64,AACAPwAAgL8AAIC/AACAPwAAgL8AAIC/AACAPwAAgL8AAIC/AACAPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAPwAAgL8AAIA/AACAPwAAgL8AAIA/AACAPwAAgL8AAIA/AACAvwAAgL8AAIC/AACAvwAAgL8AAIC/AACAvwAAgD8AAIA/AACAvwAAgD8AAIA/AACAvwAAgL8AAIA/AACAvwAAgL8AAIA/AACAvwAAgL8AAIA/q6qqvquqKj+rqiq/AAAAAAAAgL8AAACAAACAPwAAAAAAAACAq6qqvquqKj+rqiq/AAAAAAAAAAAAAIA/AACAPwAAAAAAAACAAAAAAAAAgL8AAACAAAAAAAAAAAAAAIA/AACAPwAAAAAAAACAq6qqvquqKj+rqiq/AAAAAAAAgL8AAACAq6qqvquqKj+rqiq/AAAAAAAAAAAAAIA/q6qqvquqKj+rqiq/AAAAAAAAgL8AAACAAAAAAAAAAAAAAIA/AADAPgAAAD8AAMA+AAAAPwAAwD4AAAA/AAAgPwAAgD4AACA/AACAPgAAID8AAIA+AADAPgAAgD4AAMA+AACAPgAAwD4AAIA+AADAPgAAQD8AAAA+AAAAPwAAYD8AAIA+AAAgPwAAAAAAAMA+AACAPwAAAD4AAIA+AADAPgAAAAAHAAQADAAHAAwADwADAAAACQAJAA0ACwAJAAsAAwAKAAEABgAKAAYADgACAAUACAAAAAAAq6oqPQAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAgD8AAAAAAAAAAAAAAIAAAIA/AACAPwAAgD8AAIA/AACAPwAAgD8AAIA/"
      }
  ]
}
`;

class WhiteKey extends Mesh {
  constructor(
    name: string,
    scene: Nullable<Scene> = null,
    parent: Nullable<Node> = null,
    source: Nullable<Mesh> = null,
    doNotCloneChildren?: boolean,
    clonePhysicsImpostor: boolean = true
  ) {
    super(
      name,
      scene,
      parent,
      source,
      doNotCloneChildren,
      clonePhysicsImpostor
    );

    SceneLoader.ImportMesh("", "", "data:" + gltf, scene, function (obj) {
      return obj[0];
    });
  }
}

export default WhiteKey;
