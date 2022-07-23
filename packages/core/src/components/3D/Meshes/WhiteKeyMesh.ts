import { Mesh, Nullable, Scene, Vector3, VertexData } from "@babylonjs/core";

export default function WhiteKeyMesh(scene: Nullable<Scene> | undefined) {
  var customMesh = new Mesh("custom", scene);

  var vertexData = new VertexData();

  vertexData.positions = [
    1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0,
    1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0,
  ];

  vertexData.indices = [0, 4, 6, 3, 2, 6, 7, 6, 4, 5, 1, 3, 1, 0, 2, 5, 4, 0];

  vertexData.applyToMesh(customMesh);


  return customMesh;
}
