import {
  Color4,
  Engine,
  Scene,
  SceneLoader,
  UniversalCamera,
  Vector3,
} from "@babylonjs/core";

import { GLTFFileLoader } from "@babylonjs/loaders";

import React, { useCallback } from "react";
import { View } from "react-native";
import WhiteKey from "./components/3D/Meshes/WhiteKeyMesh";
import GLRenderer from "./components/UI/GLRenderer";

export default function App() {
  const onCreateEngine = useCallback((engine: Engine | undefined) => {
    if (!engine) return;

    const scene = new Scene(engine);

    scene.createDefaultLight()
    scene.clearColor = new Color4(.3, .3, .9)

    const camera = new UniversalCamera("camera", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());

    SceneLoader.RegisterPlugin(new GLTFFileLoader());

    const box = new WhiteKey("whiteKey333", scene);

    engine.runRenderLoop(function () {
      if (scene && scene.activeCamera) scene.render();
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
