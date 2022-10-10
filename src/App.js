import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { FPV } from "./FPV";
import { Cubes } from "./Cubes";
import { TextureSelector } from "./TextureSelector";
import { Menu } from "./Menu";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5}/>
          <FPV />
          <Physics>
            <Player />
            <Cubes />
            <Ground />
          </Physics>
      </Canvas>
      <div className="absoulte centered curosr">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;