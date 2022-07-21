import { Color4, Engine, Scene, UniversalCamera, Vector3 } from "@babylonjs/core";
import React, { useCallback } from "react";
import { Text, View } from "react-native";
import GLRenderer from "./components/GLRenderer";

export default function App() {

  const onCreateEngine = useCallback((engine: Engine | undefined) => {
    if (!engine) return;

    const scene = new Scene(engine);
    scene.clearColor = Color4.FromHexString('#000000');
    const camera = new UniversalCamera('Camera', new Vector3(0, 0, 0), scene);

    engine.runRenderLoop(function () {
      scene.render();
    });

    return () => {
      scene.dispose();
      camera.dispose();
      engine.dispose();
    };
  },[ ])
  
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#000000',
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
  >
      <GLRenderer onCreateEngine={onCreateEngine} />
    </View>
  );
}
