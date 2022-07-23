import {
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  Material,
  MeshBuilder,
  MirrorTexture,
  PBRSpecularGlossinessMaterial,
  Scene,
  StandardMaterial,
  UniversalCamera,
  Vector3,
} from "@babylonjs/core";
import React, { useCallback } from "react";
import { Text, View } from "react-native";
import WhiteKeyMesh from "./components/3D/Meshes/WhiteKeyMesh";
import GLRenderer from "./components/UI/GLRenderer";

export default function App() {
  const onCreateEngine = useCallback((engine: Engine | undefined) => {
    if (!engine) return;

    const scene = new Scene(engine);
    scene.clearColor = Color4.FromHexString("#fcfcfc");
    const camera = new UniversalCamera("camera", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());

    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    MeshBuilder.CreateBox
    light.intensity = 0.7;
    var cube = WhiteKeyMesh(scene);
    var myMaterial = new StandardMaterial("myMaterial", scene);

    myMaterial.ambientColor = new Color3(255, 255, 255);

    cube.material = myMaterial;

    engine.runRenderLoop(function () {
      scene.render();
    });

    return () => {
      scene.dispose();
      camera.dispose();
      engine.dispose();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <GLRenderer onCreateEngine={onCreateEngine} />
    </View>
  );
}
